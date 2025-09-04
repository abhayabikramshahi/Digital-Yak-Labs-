import { motion } from 'framer-motion';
import heroImage from '../images/hero.png';
import { Helmet } from 'react-helmet';
import SEO from "../components/SEO";

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
        {/* SEO */}
      <Helmet>
        <title>Nepal Coding House Pvt.Ltd</title>
        <meta name="description" content="Empowering businesses worldwide with smart, scalable software and digital solutions." />
        <meta name="keywords" content="abhaya, web development, software, innovation, services" />
        <meta name="author" content="Abhaya Bikram Shahi" />
      </Helmet>
      <SEO
        title="Home | Digital Yak Labs"
        description="Welcome to Digital Yak Labs, your hub for digital innovation, blogs, and more."
        keywords="Digital Yak Labs, digital, innovation, blogs, technology"
        author="Digital Yak Labs"
      />
      {/* Hero Section */}
      <section className="relative h-screen w-full flex items-center justify-center">
        {/* Background Image */}
        <div 
          className="absolute top-0 left-0 w-full h-full"
          style={{ 
            background: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${heroImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            width: '100vw',
            height: '100vh',
            position: 'fixed',
            top: 0,
            left: 0
          }}
        />

        <div className="container mx-auto px-6 lg:px-8 relative z-10 text-center pt-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto space-y-8"
          >
            <div className="space-y-6">
              <motion.h1 
                className="text-5xl md:text-7xl font-bold text-white leading-tight tracking-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Digital Solutions for the Modern World
              </motion.h1>
              <motion.p 
                className="text-xl md:text-2xl text-gray-200 leading-relaxed max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                We create innovative digital experiences that transform businesses and delight users.
              </motion.p>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <motion.button
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="bg-white text-black px-8 py-4 rounded-lg text-lg font-medium hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl"
              >
                Get Started
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-white hover:text-black transition-all"
              >
                Learn More
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6 tracking-tight">Why Choose Us</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">Innovative solutions tailored to your digital needs</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {[
              {
                title: "Innovation",
                description: "Cutting-edge solutions that push boundaries and drive growth",
                icon: "🚀"
              },
              {
                title: "Excellence",
                description: "Uncompromising quality and attention to detail in every project",
                icon: "⭐"
              },
              {
                title: "Technology",
                description: "Modern tech stack optimized for performance and scalability",
                icon: "💻"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all"
              >
                <div className="text-5xl mb-6 transform hover:scale-110 transition-transform duration-300">{item.icon}</div>
                <h3 className="text-2xl font-semibold mb-4 text-black tracking-tight">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-black text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-10"></div>
        <div className="container mx-auto px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Ready to Transform Your Business?</h2>
            <p className="text-xl mb-12 text-gray-300 leading-relaxed">Let's create something amazing together. Start your journey with us today.</p>
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-black px-10 py-5 rounded-lg text-lg font-medium hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl"
            >
              Contact Us
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;