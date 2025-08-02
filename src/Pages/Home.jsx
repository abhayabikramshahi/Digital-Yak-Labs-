import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const Home = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans transition-all duration-300 ease-in-out">
      {/* SEO */}
      <Helmet>
        <title>Nepal Coding House Pvt.Ltd</title>
        <meta name="description" content="Empowering businesses worldwide with smart, scalable software and digital solutions." />
        <meta name="keywords" content="abhaya, web development, software, innovation, services" />
        <meta name="author" content="Abhaya Bikram Shahi" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative bg-gray-100">
        <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center justify-between py-20 px-6 lg:px-16">
          {/* Left Text */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
              Empower Your <span className="text-blue-600">Ideas</span><br />
              With <span className="text-blue-600">Innovation</span>
            </h1>
            <p className="text-lg text-gray-700 mb-8">
              Building cutting-edge digital solutions that drive growth and success. Let’s shape the future — smart and scalable.
            </p>
            <Link
              to="/services"
              className="inline-block px-6 py-3 bg-blue-600 text-white font-medium rounded-full shadow-lg hover:bg-blue-500 transition duration-300"
            >
              Explore Services
            </Link>

            {/* Services Preview as Tick Bullets */}
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
              {[
                "Custom Web Development",
                "UI/UX Design",
                "Mobile App Solutions",
                "SEO & Digital Growth"
              ].map((service, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-sm">
                    ✓
                  </div>
                  <span className="text-gray-800 font-medium">{service}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Hero Image */}
          <div className="lg:w-1/2 flex justify-center lg:justify-end mb-10 lg:mb-0">
            <img
              src="uploads/hero.svg"
              alt="Hero Illustration"
              className="w-4/5 lg:w-full drop-shadow-xl animate-fade-in-up"
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
