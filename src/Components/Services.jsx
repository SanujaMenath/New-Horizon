import React from 'react';
import '../index.css';

const Services = () => {
  return (
    <section className="services py-20">
      <div className="flex justify-center space-x-10">
        <a className=" text-center border border-gray-300 p-10 hover:bg-blue-50" href="/collegevisa">
          <h2 className="text-2xl font-bold">College Visa</h2>
          <p className="mt-4">Study In Australia With New Horizon</p>
        </a>
        <a className=" text-center border border-gray-300 p-10 hover:bg-blue-50" href="/schoolingvisa">
          <h2 className="text-2xl font-bold">Schooling Visa</h2>
          <p className="mt-4">Study In Australia With New Horizon</p>
        </a>
      </div>
    </section>
  );
};

export default Services;
