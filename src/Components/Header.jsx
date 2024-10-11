import React from 'react';

import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="fixed w-full top-0 z-10 bg-customBlue grid grid-cols-5 items-center ">
    
    <div className="col-span-1 flex justify-center">
      <img className="max-h-32 object-cover w-full" src="/assets/logo.jpg" alt="Logo" />
    </div>
  
   
    <nav className="col-span-4">
      <ul className="grid grid-cols-4 text-center">
        <li className="">
          <Link className='py-10 px-16 text-white w-full h-full font-bold border-2 border-transparent transition-colors duration-300 text-lg rounded-md hover:border-slate-600 hover:bg-white hover:text-black' to="/">Home</Link>
        </li>
        <li className="">
          <Link className='py-10 px-16 text-white w-full h-full font-bold border-2 border-transparent transition-colors duration-300 text-lg rounded-md hover:border-slate-600 hover:bg-white hover:text-black' to="/About">About Us</Link>
        </li>
        <li className="">
          <Link className='py-10 px-16 text-white w-full h-full font-bold border-2 border-transparent transition-colors duration-300 text-lg rounded-md hover:border-slate-600 hover:bg-white hover:text-black' to="/Services">Services</Link>
        </li>
        <li className="">
          <Link className='py-10 px-16 text-white w-full h-full font-bold border-2 border-transparent transition-colors duration-300 text-lg rounded-md hover:border-slate-600 hover:bg-white hover:text-black' to="/Contact">Contact Us</Link>
        </li>
      </ul>
    </nav>
  </header>
  
  );
};

export default Header;
