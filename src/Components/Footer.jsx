import React from 'react';
import '../index.css';

const Footer = () => {
  return (
    <footer className="bg-footer-blue text-white py-10">
      <div className="max-w-7xl mx-auto px-5 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h1 className="text-xl font-bold mb-4">Bright Achievers</h1>
          <p>At Bright Achievers, we are dedicated to simplifying your international education journey.</p>
        </div>
        <div>
          <h1 className="text-xl font-bold mb-4">Contact Info</h1>
          <p><strong>Phone:</strong> +94760986068 / +94760986065</p>
          <p><strong>Email:</strong> migration@brightachiever.com</p>
          <p><strong>Address:</strong> Unit 02, Veyangoda Rd, Nittabuwa, Sri Lanka</p>
        </div>
        <div>
          <h1 className="text-xl font-bold mb-4">Quick Links</h1>
          <nav className="flex flex-col space-y-2">
            <a href="/">Home</a>
            <a href="/about_us">About Us</a>
            <a href="/collegevisa">College Visa</a>
            <a href="/schoolingvisa">Schooling Visa</a>
            <a href="/blogs">Blogs</a>
            <a href="/contact_us">Contact Us</a>
          </nav>
        </div>
      </div>
      <div className="text-center mt-8">
        <p>© 2024 | Powered By Apexify Technologies</p>
      </div>
    </footer>
  );
};

export default Footer;
