import React from 'react';
import '../index.css';

const Banner = () => {
  return (
    <section className="banner h-screen flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: "url('/images/banner.jpg')" }}>
      <div className="text-center">
        <h1 className="text-5xl font-bold text-white">Bright Achievers</h1>
        <h3 className="text-2xl text-white mt-2">Migration Consultant</h3>
        <p className="text-white mt-4">Embark Your Study Abroad Dream With Us</p>
      </div>
    </section>
  );
};

export default Banner;
