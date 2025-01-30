import React from 'react'

const About = () => {
  return (
    <>
    <h2 className='text-slate-900 font-bold text-2xl p-3 m-4'>Consultorio odontológico.
            
            Estética dental y armonización facial. Ortodoncia, prótesis, blanqueamiento,
             radiografía digital, y más.</h2>
    <div className='p-4 my-4 flex flex-col md:flex-row gap-4'>
        
        <div>
        
             <hr />
        <h2 className='text-slate-900 text-xl py-3 mx-6 w-4/6 md:w-4/5'>Si necesitas un dentista, capacitado y equipado para darte la mejor atención
            para el cuidado y la salud de tu boca, contactá hoy para agendar tu consulta
        </h2>
        <span className='mx-4 flex w-[120px] px-4 justify-center border-b-8 border-teal-600'></span>
        </div>
        <button className="w-4/5 m-3 h-max self-center py-2 bg-[#17C3B2] text-white text-lg font-bold rounded-md hover:bg-[#149e91]">Contactar</button>

    </div>
    </>
  )
}

export default About