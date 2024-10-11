import React from "react";
import "../index.css";
import Header from "./Header";
import Footer from "./Footer";

const About = () => {
  return (
    <div>
      <Header />

      <div className="about-us w-full bg-white text-gray-900 mt-32">
        {/* Section for Image and Title */}
        <div className="flex">
          <section className="relative">
            <img
              className="max-w-72 h-full object-cover"
              src="/assets/Graduation.jpg"
              alt="Graduation"
            />
            <div className="absolute top-0 left-0 h-full w-full flex flex-col justify-center items-start p-10">
              <h1 className="text-white text-6xl font-bold leading-tight">
                Who
              </h1>
              <h1 className="text-white text-6xl font-bold leading-tight">
                We
              </h1>
              <h1 className="text-white text-6xl font-bold leading-tight">
                Are?
              </h1>
            </div>
          </section>

          {/* Vision and Mission Section */}
          <section className="gap-10 px-10 py-3 mb-20 my-4">
            {/* Vision Box */}

            <div className="flex mb-20">
              <div className="bg-navy max-h-16 py-4 rounded-lg shadow-lg">
                <h2 className="text-2xl text-white font-bold mx-10">Vision</h2>
              </div>

              <div className="bg-blue-200 p-4 rounded-lg shadow-lg -translate-x-12 translate-y-12 max-w-3xl">
                <p className="text-gray-700">
                  To become the leading education migration consultancy,
                  empowering students worldwide to achieve their academic and
                  career aspirations through seamless international education
                  opportunities.
                </p>
              </div>
            </div>

            {/* Mission Box */}
            <div className="flex xl:translate-x-52 translate-x-12">
              <div className="bg-navy p-2 max-h-16 rounded-lg shadow-lg ">
                <h2 className="text-2xl text-white font-bold my-1 mx-6">
                  Mission
                </h2>
              </div>

              <div className="bg-blue-200 rounded-lg p-2 shadow-lg -translate-x-12 translate-y-12 max-w-3xl">
                <p className="text-gray-700">
                  We provide students with expert guidance and personalized
                  solutions for studying abroad. Our goal is to simplify the
                  migration process through comprehensive support in university
                  selection, visa applications, and international transitions,
                  ensuring each student’s success.
                </p>
              </div>
            </div>

            {/* Description Box */}
            <div className="bg-teal-300  p-6 rounded-3xl mt-20 ml-24 text-center max-w-4xl">
              <p className="text-xl text-gray-800">
                ABC Education Migration Consultants is a dedicated team of
                professionals specializing in education migration services. We
                are passionate about helping students pursue their academic
                dreams abroad, providing expert advice and tailored support
                throughout the entire process. Our team consists of experienced
                education consultants who understand the complexities of
                international study applications, visa procedures, and
                university admissions.
              </p>
            </div>

            {/* Next Button */}
            <div className="flex justify-center m-6">
              <div className="bg-navy hover:bg-blue-950-700 text-white font-bold py-4 px-16 rounded-md shadow-lg transition-colors duration-300">
                <button>Next {" >>>"}</button>
              </div>
            </div>
            <hr className="bg-red-800 h-1"/>

          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
