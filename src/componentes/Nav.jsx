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
        <header className={`relative flex text-slate-50 justify-evenly items-center p-3 bg-teal-600 ${isMenuOpen ? 'fixed left-0 z-[770]' : ''}`}>
                <div className="flex gap-2 items-center">
                    <h1 className="text-center sm:text-sm md:text-xl lg:text-2xl">Sintonía Dental by Virginia Silveira</h1>
                    <img
                        className="px-1"
                        src="data:image/png;base64,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"
                        alt="dental-checkup"
                    />
                </div>
                <div
                    onClick={toggleMenu}
                    className="flex md:hidden w-max">
                    <AnimatedHamburgerButton />
                </div>
                <ul className="hidden md:flex gap-4">
                    <a href="#">
                        <li>Procedimientos</li>
                    </a>
                    <a href="#">
                        <li>La oficina</li>
                    </a>
                    <a href="#">
                        <li>Contacto</li>
                    </a>
                </ul>
            </header>
            <hr />
            <div
        className={`fixed left-0 w-full h-screen bg-gray-900 z-[700] text-white transform ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300`}
      >
        <ul className="flex flex-col gap-6 p-6">
          <li>
            <button onClick={toggleDropdown} className="w-full text-left">
              Procedimientos
            </button>
            {isDropdownOpen && (
              <ul className="mt-2 pl-4">
                <a href="">

                <li>Limpiezas</li>
                </a>
                <a href="">
                <li>Implantes</li>

                </a>
                <a href="">
                <li>Ortodoncia</li>

                </a>
              </ul>
            )}
          </li>
          <a href="">
          <li>La oficina</li>

          </a>
          <a href="">
          <li>Contacto</li>

          </a>
        </ul>
      </div>
        </>
    );
};

export default Nav;
