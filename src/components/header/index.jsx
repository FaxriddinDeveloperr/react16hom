import React from 'react';
import LOGO from '../../assets/FAXA-logo-transparent.png'

const Header = () => {
  return (
    <header className="mb-10 shadow-sm">
      <div className="container mx-auto flex items-center justify-between h-[80px] px-4 sm:px-6 lg:px-8">
        <img src={LOGO} alt="Logo" className="w-[120px] sm:w-[140px] md:w-[160px] h-auto" />

        <ul className="hidden md:flex items-center gap-8">
          <li>
            <a href="#" className="text-gray-700 hover:text-black font-medium transition duration-200">Home</a>
          </li>
          <li>
            <a href="" className="text-gray-700 hover:text-black font-medium transition duration-200">Products</a>
          </li>
          <li>
            <a href="" className="text-gray-700 hover:text-black font-medium transition duration-200">About</a>
          </li>
        </ul>

        <button className="hidden sm:block w-[120px] h-[40px] bg-[#1a1b1b] text-white rounded-lg text-sm hover:bg-black transition duration-300">
          Get Started
        </button>

        <div className="md:hidden">
          <button className="text-3xl text-black"></button>
        </div>
      </div>
    </header>
  );
};

export default Header;
