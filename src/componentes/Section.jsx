import React from 'react'
import Testimonio from './Testimonio'

const Section = () => {
  return (

    <>
    <div className='bg-slate-50 p-2'>
    <h2 className='text-slate-900 text-xl py-3 mx-6 border-b-8 border-teal-600 w-max'>Pacientes</h2>
    </div>
    <div className='w-full h-screen bg-slate-50 flex items-center gap-3 flex-col'>
    
    {
    
    testimonios.map((testimonio, key) => {
        return (
            <Testimonio 
            key={key}
            props={testimonio} />
        )

    })}

    </div>
    
    </>
  )
}

const testimonios = [
    {
        name: "John",
        text: "Excelente atención de la Dra. Virginia,me gustaría destacar su dedicación y profesionalismo, agenda consultas sin pasar largas esperas, responde a cualquier duda que tengas sobre los tratamientos y  da opciones que convienen al paciente . Los trabajos que me realizó fueron sin dolores ,con rapidéz y a precios accesibles. Muy recomendado el consultorio Sintonía Dental.",
    },
    {
        name: "Silvana",
        text: "La Dra. Virginia es la 1, se ha convertido en la dentista de la flia., ya es una amiga. Super dedicada a su profesión, además del constante seguimiento cuando estás en tratamiento. Nos ha llegado a atender durante el fin de semana, por cuestión de horarios, o emergencia.100% Recomendable!!!",
    },
    {
        name: "Carina",
        text: "Virginia es una excelente profesional no sólo con adultos sino que mis hijos la aman todos los tratamientos han sido impecables y el trato humano excelente! Super recomiendo!",
    },
    {
        name: "Nara",
        text: "Muy buena atención y profesionalismo. Hace años me atiende y me siento muy conforme tanto con la atención como con los resultados.",
    },
]

export default Section