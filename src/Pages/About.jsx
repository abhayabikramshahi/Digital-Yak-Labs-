import { motion } from 'framer-motion';
import SEO from "../components/SEO";

const About = () => {
  return (
    <div className="min-h-screen bg-white pt-16 overflow-x-hidden">
      <SEO
        title="About Digital Yak Labs"
        description="Learn more about Digital Yak Labs, our mission, vision, and the team behind the innovation."
        keywords="About Digital Yak Labs, company, mission, vision, team"
        author="Digital Yak Labs"
      />
      {/* Our Story Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 md:mb-16"
          >
            <div className="flex items-center justify-center mb-4"> 
              <div className="w-16 h-px bg-gray-300"></div>
              <p className="text-gray-600 text-sm uppercase mx-4 tracking-wide">Our Story</p>
              <div className="w-16 h-px bg-gray-300"></div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-black leading-tight">About Us</h2>
          </motion.div>

          {/* Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              {/* Replace with your image */}
              <img
                src="/images/about-story.jpg" // Replace with actual image path
                alt="Our Story"
                className="rounded-lg shadow-lg w-full h-auto"
              />
              {/* Optional: Add some decorative elements */}
            </motion.div>

            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-6"
            >
              <h3 className="text-3xl font-semibold text-black">Nepal Coding House</h3>
              <p className="text-gray-700 leading-relaxed text-lg">
              Nepal Coding House is a social enterprise run by a group of young and passionate individuals that works to create
                platforms and opportunities especially for, but not limited to, youth and teenagers. We are a team of enthusiastic
                individuals who believe in making the best opportunities for those seeking the platforms to grow or show their
                capabilities. Nepal Coding House organizes academic and non-academic events, workshops, and programs to nurture and promote
                their capabilities and talents.
              </p>
              {/* Add more paragraphs if needed */}
              <p className="text-gray-700 leading-relaxed text-lg">
                 Our focus is on providing enriching experiences that contribute to personal and professional development,
                 fostering a community of learners and doers.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 md:mb-16"
          >
             <div className="flex items-center justify-center mb-4">
              <div className="w-16 h-px bg-gray-300"></div>
              <p className="text-gray-600 text-sm uppercase mx-4 tracking-wide">Our Purpose</p>
              <div className="w-16 h-px bg-gray-300"></div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-black leading-tight">Our Mission</h2>
          </motion.div>

          {/* Content - Reversed Order */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
             {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              <h3 className="text-3xl font-semibold text-black">Empowering Growth</h3>
              <p className="text-gray-700 leading-relaxed text-lg">
                Our mission is to improve the level of opportunities for the
                learners and opportunity seekers in both quantitative and
                qualitative manner to empower the individual with enough
                experience and knowledge in the field of their interest to reach
                their true potential.
              </p>
               {/* Add more paragraphs if needed */}
              <p className="text-gray-700 leading-relaxed text-lg">
                 We strive to be a catalyst for positive change, providing resources and support that enable
                 individuals to achieve their goals and contribute meaningfully to their communities.
              </p>
            </motion.div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative"
            >
               {/* Replace with your image */}
              <img
                src="/images/about-mission.jpg" // Replace with actual image path
                alt="Our Mission"
                className="rounded-lg shadow-lg w-full h-auto"
              />
              {/* Optional: Add some decorative elements */}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 md:mb-16"
          >
            <div className="flex items-center justify-center mb-4">
              <div className="w-16 h-px bg-gray-300"></div>
              <p className="text-gray-600 text-sm uppercase mx-4 tracking-wide">Our Team</p>
              <div className="w-16 h-px bg-gray-300"></div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-black leading-tight">Meet Our Team</h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            {/* Example team members, replace with real data as needed */}
            <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center hover:shadow-2xl transition-shadow duration-300">
              <img src="/src/images/aashish.jpg" alt="Aashish" className="w-28 h-28 rounded-full object-cover mb-4 border-4 border-blue-100 shadow" />
              <h3 className="text-xl font-bold text-blue-700 mb-1">Aashish Shrestha</h3>
              <p className="text-gray-600 mb-2">Founder & CEO</p>
              <p className="text-gray-500 text-sm">Visionary leader with a passion for technology and innovation.</p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center hover:shadow-2xl transition-shadow duration-300">
              <img src="/src/images/hero.png" alt="Team Member" className="w-28 h-28 rounded-full object-cover mb-4 border-4 border-blue-100 shadow" />
              <h3 className="text-xl font-bold text-blue-700 mb-1">Sita Lama</h3>
              <p className="text-gray-600 mb-2">Lead Developer</p>
              <p className="text-gray-500 text-sm">Expert in full-stack development and project management.</p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center hover:shadow-2xl transition-shadow duration-300">
              <img src="/src/images/hero.png" alt="Team Member" className="w-28 h-28 rounded-full object-cover mb-4 border-4 border-blue-100 shadow" />
              <h3 className="text-xl font-bold text-blue-700 mb-1">Ram Karki</h3>
              <p className="text-gray-600 mb-2">UI/UX Designer</p>
              <p className="text-gray-500 text-sm">Designs intuitive and beautiful user experiences.</p>
            </div>
          </div>
        </div>
      </section>

      {/* You can add more sections here following the same pattern */}

    </div>
  );
};

export default About;