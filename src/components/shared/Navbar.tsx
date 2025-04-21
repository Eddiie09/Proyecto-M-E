import React, { useState } from 'react';
import { FaBarsStaggered } from 'react-icons/fa6';
import { HiOutlineSearch, HiOutlineShoppingBag } from 'react-icons/hi';
import { Link, NavLink } from 'react-router-dom';
import { Logo } from './Logo';

export const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);

  const navbarLinks = [
    { id: 1, href: "/", title: "Inicio" },
    { id: 2, href: "/productos", title: "Productos" },
    { id: 3, href: "/nosotros", title: "Sobre Nosotros" },
  ];

  return (
    <header className="bg-white text-black py-4 flex items-center justify-between px-5 border-b border-slate-200 lg:px-12">
      <Logo />
      <Link to="/" className="text-2xl font-bold">
        Celulares<span className="text-cyan-600"> Baratos</span>
      </Link>

      {/* Menú de navegación - visible en pantallas medianas en adelante */}
      <nav className="space-x-5 hidden md:flex">
        {navbarLinks.map((link) => (
          <NavLink
            key={link.id}
            to={link.href}
            className={({ isActive }) =>
              `${isActive ? 'text-cyan-600 underline' : ''} 
               transition-all duration-300 font-medium 
               hover:text-cyan-600 hover:underline`
            }
          >
            {link.title}
          </NavLink>
        ))}
      </nav>

      {/* Iconos a la derecha */}
      <div className="flex gap-5 items-center">
        <button>
          <HiOutlineSearch size={25} />
        </button>

        <div className="relative">
          <Link
            to="/account"
            className="border-2 border-slate-700 w-9 h-9 rounded-full grid place-items-center text-lg font-bold"
          >
            R
          </Link>
        </div>

        <button className="relative">
          <span className="absolute -bottom-2 -right-2 w-5 h-5 grid place-items-center bg-black text-white text-xs rounded-full">
            0
          </span>
          <HiOutlineShoppingBag size={25} />
        </button>

        {/* Botón de menú hamburguesa (visible en móviles) */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          <FaBarsStaggered size={25} />
        </button>
      </div>

      {/* Menú móvil desplegable */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md p-5 flex flex-col items-center md:hidden">
          {navbarLinks.map((link) => (
            <NavLink
              key={link.id}
              to={link.href}
              className="block py-2 text-lg font-medium text-gray-800 hover:text-cyan-600"
              onClick={() => setIsOpen(false)}
            >
              {link.title}
            </NavLink>
          ))}
        </div>
      )}
    </header>
  );
};
