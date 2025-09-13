// src/pages/Home.jsx
import React from "react";
import HeroImg from "../assets/hero.png";
import { FaCheckCircle } from "react-icons/fa";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";

export default function Home() {
  return (
    <>
      {/* SEO Meta Tags */}
      <Helmet>
        <title>Nepal Coding House - Learn Web Dev, Python, AI & More</title>
        <meta
          name="description"
          content="Join Nepal’s leading coding institute and master Web Development, Python, AI, and more with expert mentors and real-world projects."
        />
        <meta
          name="keywords"
          content="Coding in Nepal, Web Development Nepal, Python Classes Nepal, AI Training Nepal, Coding Institute Nepal"
        />
        <meta name="author" content="Nepal Coding House" />
        <link
          rel="canonical"
          href="https://nepalcodinghousepvltd.netlify.app/"
        />

        {/* Open Graph (Facebook/LinkedIn) */}
        <meta property="og:title" content="Nepal Coding House - Learn To Code" />
        <meta
          property="og:description"
          content="Learn coding with expert mentors in Nepal. Build real-world projects in Web, Python, AI, and more."
        />
        <meta property="og:image" content={HeroImg} />
        <meta
          property="og:url"
          content="https://nepalcodinghousepvltd.netlify.app/"
        />
        <meta property="og:type" content="website" />

        {/* Twitter Meta */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Nepal Coding House - Learn To Code" />
        <meta
          name="twitter:description"
          content="Kickstart your coding career with Web, Python, and AI courses in Nepal."
        />
        <meta name="twitter:image" content={HeroImg} />

        {/* Schema.org Structured Data */}
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Nepal Coding House Pvt. Ltd.",
            "url": "https://nepalcodinghousepvltd.netlify.app/",
            "logo": "${HeroImg}",
            "sameAs": [
              "https://facebook.com/",
              "https://twitter.com/",
              "https://linkedin.com/"
            ],
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+977-9808370638",
              "contactType": "Customer Support",
              "areaServed": "NP",
              "availableLanguage": "Nepali, English"
            }
          }
          `}
        </script>

        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "url": "https://nepalcodinghousepvltd.netlify.app/",
            "name": "Nepal Coding House",
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://nepalcodinghousepvltd.netlify.app/search?q={search_term_string}",
              "query-input": "required name=search_term_string"
            }
          }
          `}
        </script>

        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "Course",
            "name": "Web Development Course",
            "description": "Learn HTML, CSS, JavaScript, React and build modern websites.",
            "provider": {
              "@type": "Organization",
              "name": "Nepal Coding House",
              "sameAs": "https://nepalcodinghousepvltd.netlify.app/"
            }
          }
          `}
        </script>
      </Helmet>

      {/* Hero Section */}
      <section className="relative bg-gray-50">
        <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center justify-between py-16 lg:py-24 px-6 lg:px-16 -mt-6">
          {/* Text Content */}
          <motion.div
            className="lg:w-1/2 text-center lg:text-left"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.h1
              className="text-4xl lg:text-6xl font-extrabold text-gray-800 leading-tight"
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              Learn To Code <br />
              <span className="text-blue-500">Build Your Future</span>
            </motion.h1>

            <motion.p
              className="mt-6 text-lg text-gray-600"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Join Nepal’s leading coding institute where students learn
              real-world skills in <strong>Web Development, Python, AI, and
              more</strong>. Transform your passion into a successful career in
              tech.
            </motion.p>

            {/* Tick Points */}
            <motion.ul
              className="mt-6 space-y-3 text-gray-700 text-left inline-block"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <li className="flex items-center gap-2">
                <FaCheckCircle className="text-green-500" /> Expert Mentors
              </li>
              <li className="flex items-center gap-2">
                <FaCheckCircle className="text-green-500" /> Job-Ready Courses
              </li>
              <li className="flex items-center gap-2">
                <FaCheckCircle className="text-green-500" /> Real-World Projects
              </li>
            </motion.ul>

            <motion.div
              className="mt-8 flex flex-col sm:flex-row gap-4 sm:justify-center lg:justify-start"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              viewport={{ once: true }}
            >
              <a
                href="/courses"
                className="px-6 py-3 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-400 transition"
              >
                Explore Courses
              </a>
              <a
                href="/contact"
                className="px-6 py-3 border border-blue-500 text-blue-500 rounded-full shadow hover:bg-blue-50 transition"
              >
                Join Now
              </a>
            </motion.div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            className="lg:w-1/2 flex justify-center lg:justify-end mt-10 lg:mt-0"
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <div className="w-4/5 lg:w-full relative -top-6">
              <img
                src={HeroImg}
                loading="lazy"
                alt="Students Learning to Code"
                className="drop-shadow-xl rounded-2xl"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features / Why Choose Us */}
      <section className="bg-white py-16 px-6 lg:px-16">
        <div className="container mx-auto text-center">
          <motion.h2
            className="text-3xl font-bold text-gray-800"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Why Learn With <span className="text-blue-500">Us?</span>
          </motion.h2>
          <p className="mt-4 text-gray-600">
            We provide practical, hands-on training that prepares you for the
            tech industry.
          </p>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {[
              {
                title: "👨‍💻 Expert Mentors",
                desc: "Learn from experienced developers and industry professionals guiding you step by step.",
              },
              {
                title: "📚 Career-Focused Courses",
                desc: "Courses designed to make you job-ready in fields like Web, App Development, AI, and Data Science.",
              },
              {
                title: "💼 100% Practical Learning",
                desc: "Work on real-world projects and build a strong portfolio that companies actually want to see.",
              },
            ].map((feature, i) => (
              <motion.div
                key={i}
                className="p-6 bg-gray-50 rounded-xl shadow hover:shadow-lg transition"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: i * 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-semibold text-gray-800">
                  {feature.title}
                </h3>
                <p className="mt-2 text-gray-600">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Courses Section */}
      <section className="bg-gray-50 py-16 px-6 lg:px-16">
        <div className="container mx-auto text-center">
          <motion.h2
            className="text-3xl font-bold text-gray-800"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Our <span className="text-blue-500">Popular Courses</span>
          </motion.h2>
          <p className="mt-4 text-gray-600">
            Start your coding journey with beginner-friendly to advanced level
            courses.
          </p>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {[
              {
                title: "🌐 Web Development",
                desc: "HTML, CSS, JavaScript, React – build modern websites and apps.",
              },
              {
                title: "🐍 Python Programming",
                desc: "Master Python for automation, AI, and data analysis.",
              },
              {
                title: "🤖 Artificial Intelligence",
                desc: "Learn the fundamentals of AI & ML to build the future of tech.",
              },
            ].map((course, i) => (
              <motion.div
                key={i}
                className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: i * 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-semibold text-gray-800">
                  {course.title}
                </h3>
                <p className="mt-2 text-gray-600">{course.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <motion.section
        className="bg-blue-500 py-16 px-6 lg:px-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto text-center text-white">
          <h2 className="text-3xl font-bold">
            Kickstart Your Coding Career Today 🚀
          </h2>
          <p className="mt-4 text-lg">
            Become a professional developer with our structured, hands-on
            training programs.
          </p>
          <motion.div
            className="mt-8"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <a
              href="/courses"
              className="px-6 py-3 bg-white text-blue-500 rounded-md font-semibold shadow hover:bg-gray-100 transition"
            >
              Enroll Now
            </a>
          </motion.div>
        </div>
      </motion.section>
    </>
  );
}
