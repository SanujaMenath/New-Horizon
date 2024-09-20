import React from 'react';

import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="fixed w-full top-0 z-10 bg-customBlue grid grid-cols-5 items-center ">
    
    <div className="col-span-1 flex justify-center">
      <img className="max-h-32 w-72" src="/assets/logo.jpg" alt="Logo" />
    </div>
  
   
    <nav className="col-span-4">
      <ul className="grid grid-cols-4 text-center">
        <li className="text-white font-bold border-2 border-transparent transition-colors duration-300 text-lg py-10 rounded-md hover:border-slate-600 hover:bg-white hover:text-black">
          <Link to="/">Home</Link>
        </li>
        <li className="text-white font-bold border-2 border-transparent transition-colors duration-300 text-lg py-10 rounded-md hover:border-slate-600 hover:bg-white hover:text-black">
          <Link to="/About">About Us</Link>
        </li>
        <li className="text-white font-bold border-2 border-transparent transition-colors duration-300 text-lg py-10 rounded-md hover:border-slate-600 hover:bg-white hover:text-black">
          <Link to="/services">Services</Link>
        </li>
        <li className="text-white font-bold border-2 border-transparent transition-colors duration-300 text-lg py-10 rounded-md hover:border-slate-600 hover:bg-white hover:text-black">
          <Link to="/contact_Us">Contact Us</Link>
        </li>
      </ul>
    </nav>
  </header>
  
  );
};

export default Header;
