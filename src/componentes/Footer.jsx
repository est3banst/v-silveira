import React, { useState } from 'react'

const Footer = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const year = new Date();

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };


    return (
        <>
            <hr className='my-3' />


            <footer className='text-slate-800 h-auto flex-col justify-center md:flex-row px-4 my-4 py-4 flex gap-2 md:items-center md:justify-evenly'>
                <div className='p-2 flex flex-col items-center'>
                    <small>No esperes más para cuidar de tu salud bucal</small>
                    <a href=""
                        className='flex items-center gap-2' >
                        <img
                            className='w-[48px]'
                            src="icons8-dental-checkup-100.png" alt="Sintonia dental icono" />
                        <small className='text-xs md:text-sm'>Vení a sonreir nuevamente!</small>
                    </a>

                    <p className='text-2xl text-teal-500 border-teal-300 border-b-2 w-max font-bold'>Odontología personalizada</p>

                </div>
                <div className='py-3'>
                    <p className='text-lg w-max font-bold inline-block border-b-2 border-teal-600 pb-1 mb-2'>
                        Vínculos útiles
                    </p>
                    <ol>

                        <li className='relative'>
                            <button
                                className='bg-transparent hover:bg-teal-100'
                                onClick={toggleDropdown}
                            >
                                Procedimientos
                            </button>
                            {isDropdownOpen && (
                                <ul className='absolute bg-white border border-slate-300 rounded-md shadow-lg mt-2 p-2 w-max'>
                                    <li>
                                        <a
                                            href="#armonizacion-facial"
                                            className='block px-2 py-1 hover:bg-teal-100'
                                        >
                                            Armonización facial
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#ortodoncia"
                                            className='block px-2 py-1 hover:bg-teal-100'
                                        >
                                            Ortodoncia
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#limpiezas"
                                            className='block px-2 py-1 hover:bg-teal-100'
                                        >
                                            Limpiezas
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#implantes"
                                            className='block px-2 py-1 hover:bg-teal-100'
                                        >
                                            Implantes
                                        </a>
                                    </li>
                                </ul>
                            )}
                        </li>

                        <a href="">
                            <li className='hover:bg-teal-100 w-max p-2'>Pacientes</li>
                        </a>
                        <a href="">
                            <li className='hover:bg-teal-100 w-max p-2'>Contacto</li>
                        </a>
                        <a href="">
                            <li className='hover:bg-teal-100 w-max p-2'>Inicio</li>
                        </a>
                    </ol>
                </div>
                <div className='py-3'>
                    <p className='text-lg font-bold inline-block border-b-2 border-teal-600 pb-1 mb-2'>
                        Información de contacto
                    </p>
                    <section className='flex items-center py-2 gap-3'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 50 50">
                            <path fill="none" stroke="#306cfe" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M43.75 31.25v8.187a4.166 4.166 0 0 1-4.77 4.167A37.5 37.5 0 0 1 6.541 11.021a4.167 4.167 0 0 1 4.146-4.771h8.062a2.083 2.083 0 0 1 2.083 1.854c.207 2.73.913 5.4 2.084 7.875a2.083 2.083 0 0 1-.875 2.625l-1.792 1.02a2.085 2.085 0 0 0-.687 3.043a29.3 29.3 0 0 0 7.687 7.687a2.083 2.083 0 0 0 3.042-.687l1.02-1.792a2.083 2.083 0 0 1 2.709-.792a22.4 22.4 0 0 0 7.875 2.084a2.083 2.083 0 0 1 1.854 2.083" />
                        </svg>
                        <p>+87 887 7778</p>
                    </section>
                    <section className='flex items-center py-2 gap-2'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 72 72">
                            <circle cx="36.446" cy="28.864" r="7.225" fill="#fff" />
                            <path fill="#d22f27" d="M52.573 29.11c0-9.315-7.133-16.892-15.903-16.892s-15.903 7.577-15.903 16.896c.002.465.223 11.609 12.96 31.245a3.46 3.46 0 0 0 2.818 1.934c1.84 0 3.094-2.026 3.216-2.232C52.58 40.414 52.58 29.553 52.573 29.11M36.67 35.914a7.083 7.083 0 1 1 7.083-7.083a7.09 7.09 0 0 1-7.083 7.083" />
                            <path fill="#ea5a47" d="M52.573 29.11c0-9.315-7.133-16.892-15.903-16.892a15 15 0 0 0-3.865.525c8.395.45 15.1 7.823 15.1 16.85c.006.443.006 11.303-12.813 30.95a6 6 0 0 1-.586.797c.52.584 1.257.928 2.04.954c1.839 0 3.093-2.027 3.215-2.233C52.58 40.414 52.58 29.553 52.573 29.11" />
                            <g fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                                <path d="M36.545 62.294a3.46 3.46 0 0 1-2.817-1.935C20.99 40.723 20.769 29.58 20.766 29.114c0-9.32 7.134-16.896 15.904-16.896s15.903 7.577 15.903 16.892c.007.444.007 11.304-12.812 30.95c-.122.207-1.377 2.234-3.216 2.234" />
                                <path d="M36.67 35.914a7.083 7.083 0 1 1 7.083-7.083a7.09 7.09 0 0 1-7.083 7.083" />
                            </g>
                        </svg>
                        <p>Main 123 esq. Calle Falsa, New York</p>
                    </section>
                </div>


            </footer>
            <hr />
            <div className='text-slate-100 bg-teal-600 py-4 text-center'><small>Odontología personalizada &copy; {year.getFullYear()}</small></div>
        </>
    )
}

export default Footer