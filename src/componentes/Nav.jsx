import React, { useState } from 'react';
import { AnimatedHamburgerButton } from './HamburgerButton';

const Nav = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <>
            <header className={`fixed flex text-slate-50 justify-between w-full items-center md:p-5 p-3 left-0 z-[770] bg-teal-600`}>
                <div className="flex gap-2 max-w-72 md:max-w-full items-center">
                    <h1 className="text-center monts uppercase sm:text-sm md:text-xl font-black lg:text-2xl">Odontología personalizada</h1>
                    <img
                        className="px-1"
                        src="data:image/png;base64,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"
                        alt="dental-checkup"
                    />
                </div>
                <div
                    onClick={toggleMenu}
                    className="flex relative md:hidden mr-5">
                    <AnimatedHamburgerButton />
                </div>
                <ul className="hidden md:flex gap-4 relative">
                    
                        <li className=''> <button 
                        className='p-2 rounded-lg'
                        onClick={toggleDropdown}>
                            Procedimientos
                            </button>
                            {isDropdownOpen && (
                            <ul className="absolute top-full left-0 bg-teal-600 mt-2 p-2 rounded shadow-lg z-50">
                                <a href="">

                                    <li className='p-2 rounded-lg'>Limpiezas</li>
                                </a>
                                <a href="">
                                    <li className='p-2 rounded-lg'>Implantes</li>

                                </a>
                                <a href="">
                                    <li className='p-2 rounded-lg'>Ortodoncia</li>

                                </a>
                                <a href="">
                                    <li className='p-2 rounded-lg'>Bruxismo</li>

                                </a>
                            </ul>
                        )}
                            </li>
                   
                    <a href="#">
                        <li className='p-2 rounded-lg'>La oficina</li>
                    </a>
                    <a href="#">
                        <li className='p-2 rounded-lg'>Contacto</li>
                    </a>
                </ul>
            </header>
            <hr />
            <div
                className={`fixed left-0 w-full h-screen pt-24 flex flex-col justify-around bg-gray-900 z-[700] text-white transform ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'
                    } transition-transform duration-300`}
            >
                <ul className="respons-menu flex flex-col gap-6 p-6">
                    <li className=''>
                        <button onClick={toggleDropdown} className="text-left rounded-lg p-2">
                            Procedimientos
                        </button>
                        {isDropdownOpen && (
                            <ul className="mt-2 pl-4">
                                <a href="#">

                                    <li className='p-2 rounded-lg'>Limpiezas</li>
                                </a>
                                <a href="#">
                                    <li className='p-2 rounded-lg'>Implantes</li>

                                </a>
                                <a href="#">
                                    <li className='p-2 rounded-lg'>Ortodoncia</li>

                                </a>
                                <a href="#">
                                    <li className='p-2 rounded-lg'>Bruxismo</li>

                                </a>
                            </ul>
                        )}
                    </li>
                    <a  href="#">
                        <li className="p-2 rounded-lg">Pacientes</li>
                    </a>
                    <a  href="#">
                        <li className="p-2 rounded-lg">La oficina</li>

                    </a>
                    <a  href="#">
                        <li className="p-2 rounded-lg">Contacto</li>

                    </a>
                </ul>
                <div className='flex h-auto flex-col justify-center'>
                <section className='mt-4 px-7 flex items-center justify-start w-full'>
                    <a href="tel:+477427872">
                        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24">
                            <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                                <path strokeDasharray="64" strokeDashoffset="64" d="M8 3c0.5 0 2.5 4.5 2.5 5c0 1 -1.5 2 -2 3c-0.5 1 0.5 2 1.5 3c0.39 0.39 2 2 3 1.5c1 -0.5 2 -2 3 -2c0.5 0 5 2 5 2.5c0 2 -1.5 3.5 -3 4c-1.5 0.5 -2.5 0.5 -4.5 0c-2 -0.5 -3.5 -1 -6 -3.5c-2.5 -2.5 -3 -4 -3.5 -6c-0.5 -2 -0.5 -3 0 -4.5c0.5 -1.5 2 -3 4 -3Z">
                                    <animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0" />
                                    <animateTransform id="lineMdPhoneCallLoop0" fill="freeze" attributeName="transform" begin="0.6s;lineMdPhoneCallLoop0.begin+2.7s" dur="0.5s" type="rotate" values="0 12 12;15 12 12;0 12 12;-12 12 12;0 12 12;12 12 12;0 12 12;-15 12 12;0 12 12" />
                                </path>
                                <path strokeDasharray="4" strokeDashoffset="4" d="M15.76 8.28c-0.5 -0.51 -1.1 -0.93 -1.76 -1.24M15.76 8.28c0.49 0.49 0.9 1.08 1.2 1.72">
                                    <animate fill="freeze" attributeName="strokeDashoffset" begin="lineMdPhoneCallLoop0.begin+0s" dur="2.7s" keyTimes="0;0.111;0.259;0.37;1" values="4;0;0;4;4" />
                                </path>
                                <path strokeDasharray="6" strokeDashoffset="6" d="M18.67 5.35c-1 -1 -2.26 -1.73 -3.67 -2.1M18.67 5.35c0.99 1 1.72 2.25 2.08 3.65">
                                    <animate fill="freeze" attributeName="strokeDashoffset" begin="lineMdPhoneCallLoop0.begin+0.2s" dur="2.7s" keyTimes="0;0.074;0.185;0.333;0.444;1" values="6;6;0;0;6;6" />
                                </path>
                            </g>
                        </svg>
                    </a>

                    <div className='px-4 flex items-start flex-col w-max'>
                    <p>+87 887 7778</p>
                    <p>Llámanos hoy!</p>
                    </div>

                </section>
                <section className='mt-4 px-7 flex items-center justify-start w-full'>
                    <a target='_blank' href="https://www.google.com/maps?sca_esv=204cf606c36776c7&output=search&q=sintonia+dental&source=lnms&fbs=AEQNm0CbCVgAZ5mWEJDg6aoPVcBgWizR0-0aFOH11Sb5tlNhdwiPJWZFf-MdNGF5cE7ER6mV0KqtwDrg4ZaNCnH8qTtEgSN8HSf8Df0wHS5-7uxYEgXGyhvjRfFWbsnu0Qqk4Eya93dCvrRVLkBW71t2etOumiIdxsoM1JeZFVdKqgtZ6HCWM5b1YX142Ra5kRyzg5cwo8nj&entry=mc&ved=1t:200715&ictx=111">
                        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 100 100">
                            <path fill="#f61110" d="M50.001 0C33.65 0 20.25 13.36 20.25 29.666c0 6.318 2.018 12.19 5.433 17.016L46.37 82.445c2.897 3.785 4.823 3.066 7.232-.2l22.818-38.83c.46-.834.822-1.722 1.137-2.629a29.3 29.3 0 0 0 2.192-11.12C79.75 13.36 66.354 0 50.001 0m0 13.9c8.806 0 15.808 6.986 15.808 15.766S58.807 45.43 50.001 45.43c-8.805 0-15.81-6.982-15.81-15.763S41.196 13.901 50 13.901" />
                            <path fill="currentColor" d="m68.913 48.908l-.048.126l.042-.115zM34.006 69.057C19.88 71.053 10 75.828 10 82.857C10 92.325 26.508 100 50 100s40-7.675 40-17.143c0-7.029-9.879-11.804-24.004-13.8l-1.957 3.332C74.685 73.866 82 76.97 82 80.572c0 5.05-14.327 9.143-32 9.143s-32-4.093-32-9.143c-.001-3.59 7.266-6.691 17.945-8.174z" color="currentColor" />
                        </svg>
                    </a>

                    <p className='px-4'>Main 123 esq. Calle Falsa, New York</p>
                </section>
                </div>
            </div>
        </>
    );
};

export default Nav;
