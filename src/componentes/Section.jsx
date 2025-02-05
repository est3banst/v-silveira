import React from 'react'
import Testimonio from './Testimonio'

const Section = () => {
  return (

    <>
    <div className='bg-slate-50 mt-4 p-2'>
    <h2 className='text-slate-900 text-xl py-3 mx-6 border-b-8 border-teal-600 w-max'>Pacientes</h2>
    </div>
    <div className='w-full h-auto bg-slate-50 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-3 p-4 mb-3'>
    
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
        text: "Excelente atención de Odontología personalizada,me gustaría destacar su dedicación y profesionalismo, agendan consultas sin pasar largas esperas, responden a cualquier duda que tengas sobre los tratamientos y dan opciones que convienen al paciente .Los trabajos que me realicé en la clínica fueron sin dolores ,con rapidéz y a precios accesibles. Muy recomendado el consultorio.",
    },
    {
        name:"Maria",
        text: "Excelentes profesionales, dedicados y mucha paciencia. Muy prolijos. MUY RECOMENDABLE"
    },
    {
        name:"Natalia",
        text: "Odontología personalizada muy recomendable!para adultos y niños. Mi hijo de 9 años adora atenderse con ellos. Muy profesionales"
    },
    {
        name: "Carina",
        text: "Excelente equipo de profesionales, no sólo con adultos ya que mis hijos adoran la clínica todos los tratamientos han sido impecables y el trato humano excelente! Super recomiendo!",
    },
    {
        name: "Nara",
        text: "Muy buena atención y profesionalismo. Hace años me atiendo acá y me siento muy conforme tanto con la atención como con los resultados.",
    },
]

export default Section