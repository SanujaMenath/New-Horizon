import React from 'react'
import '../index.css';

function Footer() {
  return (
    <div>
       <footer className='bg-footer-blue text-black pt-10 bg-slate-600'>
      <div className='max-w-7xl mx-auto px-5 grid grid-cols-1 md:grid-cols-3 gap-8'>
        <div>
          <h1 className="text-xl font-bold mb-4">New Horizon</h1>
          <p>At New Horizon, we are dedicated to simplifying your international education journey.</p>
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
            <a href="/blogs">Blogs</a>
            <a href="/contact_us">Contact Us</a>
          </nav>
        </div>
      </div>
      <div className="text-white text-center mt-8 bg-slate-700 py-3">
        <p>© 2024 | Powered By Apexify Technologies</p>
      </div>
    </footer>
    </div>
  )
}

export default Footer
