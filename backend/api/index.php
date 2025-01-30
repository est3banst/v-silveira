<?php

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $to = "steven_devs@hotmail.com";
    $name = isset($_POST["name"]) ? $_POST["name"] : "No name";
    $lname = isset($_POST["lname"]) ? $_POST["lname"] : "";
    $email = isset($_POST["email"]) ? $_POST["email"] : "";
    $message = isset($_POST["mssg"]) ? $_POST["mssg"] : "Mensaje vacío.";
    
    if (empty($email)) {
        echo json_encode(["status" => "error", "message" => "Mail inválido"]);
        return;
    }
    $subject = $name . $lname;

    $headers = "From: " . $email . "\r\n";
    $headers .= "Reply-To: " . $email . "\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

   
    if (mail($to, $subject, $message, $headers)) {
        echo json_encode(["status" => "success", "message" => "Email envíado exitosamente"]);
    } else {
        echo json_encode(["status" => "error", "message" => "Error al enviar"]);
    }
} else {
    echo json_encode(["status" => "error", "message" => "Solicitud inválida"]);
}
