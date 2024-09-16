import React from 'react';

import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="fixed w-full top-0 z-10  bg-slate-500  flex justify-between items-center py-4 px-10 transition-all">
      <img className="h-12" src="/images/logo.png" alt="New Horizon Logo" />
      <nav>
        <ul className="flex space-x-4 text-lg p-5 ">
          <li className='text-white font-bold  border-2 border-transparent transition-colors duration-300 text-lg px-2.5 py-1 rounded-md  hover:border-slate-600 hover:bg-white hover:text-black'><Link to="/">Home</Link></li>
          <li className='text-white font-bold  border-2 border-transparent transition-colors duration-300 text-lg px-2.5 py-1 rounded-md  hover:border-slate-600 hover:bg-white hover:text-black'><Link to="/about_us">About Us</Link></li>
          <li className='text-white font-bold  border-2 border-transparent transition-colors duration-300 text-lg px-2.5 py-1 rounded-md  hover:border-slate-600 hover:bg-white hover:text-black'><Link to="/collegevisa">College Visa</Link></li>
          <li className='text-white font-bold  border-2 border-transparent transition-colors duration-300 text-lg px-2.5 py-1 rounded-md  hover:border-slate-600 hover:bg-white hover:text-black'><Link to="/schoolingvisa">Schooling Visa</Link></li>
          <li className='text-white font-bold  border-2 border-transparent transition-colors duration-300 text-lg px-2.5 py-1 rounded-md  hover:border-slate-600 hover:bg-white hover:text-black'><Link to="/blogs">Blogs</Link></li>
        </ul>
      </nav>
      <div className="hidden md:block">
        <Link to="/contact" className="h-btn bg-blue-500 text-white px-4 py-2 rounded">Contact Us</Link>
      </div>
    </header>
  );
};

export default Header;
