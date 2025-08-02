import React from 'react';

const About = () => {
  return (
    <section className="bg-white py-16 px-6 md:px-12 lg:px-24 text-gray-900 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-extrabold mb-8 tracking-tight">
          About Nepal Coding House Pvt. Ltd.
        </h1>

        {/* Intro */}
        <p className="text-lg md:text-xl text-gray-700 max-w-3xl mb-12 leading-relaxed">
          Nepal Coding House Pvt. Ltd. is a next-gen digital solutions company based in Nepal,
          driven by a passion for innovation and precision. We specialize in delivering
          high-performance software, compelling content strategies, and data-backed digital
          marketing services that fuel brand growth in the digital age.
        </p>

        {/* Services */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Software Development */}
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-blue-600">🚀 Software Development</h2>
            <p className="text-gray-700 leading-relaxed">
              We engineer scalable, secure, and smart software — from mobile apps and websites to
              enterprise-level platforms. Our agile dev team ensures rapid development cycles
              without compromising quality.
            </p>
          </div>

          {/* Content Creation */}
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-blue-600">✍️ Content Creation</h2>
            <p className="text-gray-700 leading-relaxed">
              Content is king — and we treat it like royalty. From blogs and scripts to branded
              social media content and video production, our creative team helps brands tell
              stories that stick.
            </p>
          </div>

          {/* Digital Marketing */}
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-blue-600">📣 Digital Marketing</h2>
            <p className="text-gray-700 leading-relaxed">
              We don’t guess — we analyze, strategize, and optimize. Our data-driven digital
              marketing services (SEO, social ads, email marketing, analytics) are designed to
              deliver real ROI.
            </p>
          </div>
        </div>

        {/* Why Us */}
        <div className="mt-16 max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-6">Why Choose Nepal Coding House?</h3>
          <ul className="list-disc list-inside text-left px-[210px]  text-gray-700 space-y-2 text-lg">
            <li>Result-Oriented Approach</li>
            <li>Creative + Tech-Driven Team</li>
            <li>Client-Centric Processes</li>
            <li>Affordable Global Standards</li>
          </ul>
        </div>

        {/* Contact */}
        <div className="mt-16 text-center text-gray-800 text-lg font-medium">
          <p>
            We’re not just a tech company — we’re your <span className="font-bold">digital growth partner</span>.
          </p>
          <p className="mt-2">
            Let’s build the future — one pixel, one line of code, and one campaign at a time.
          </p>
          <p className="mt-4">
            📧 <a href="mailto:abhayabikramshahiofficial@gmail.com" className="text-blue-600 hover:underline">abhayabikramshahiofficial@gmail.com</a> | 📞 +977 9808370638
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
