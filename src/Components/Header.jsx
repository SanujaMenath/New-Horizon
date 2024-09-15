import React from 'react';
import '../index.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="fixed w-full top-0 z-10 bg-transparent flex justify-between items-center py-8 px-10 transition-all">
      <img className="h-12" src="/images/logo.png" alt="Bright Achievers Logo" />
      <nav>
        <ul className="flex space-x-4 text-lg">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about_us">About Us</Link></li>
          <li><Link to="/collegevisa">College Visa</Link></li>
          <li><Link to="/schoolingvisa">Schooling Visa</Link></li>
          <li><Link to="/blogs">Blogs</Link></li>
        </ul>
      </nav>
      <div className="hidden md:block">
        <Link to="/contact" className="h-btn bg-blue-500 text-white px-4 py-2 rounded">Contact Us</Link>
      </div>
      <div className="md:hidden text-2xl">
        <ion-icon name="menu"></ion-icon>
      </div>
    </header>
  );
};

export default Header;
