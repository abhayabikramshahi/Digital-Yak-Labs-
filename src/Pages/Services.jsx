import React from 'react';
import { motion } from 'framer-motion';

const services = [
  {
    title: 'Web Development',
    description: 'Custom, scalable, and high-performance web applications tailored to your business needs.',
    icon: '🌐',
  },
  {
    title: 'Mobile Apps',
    description: 'Beautiful, fast, and reliable mobile apps for iOS and Android platforms.',
    icon: '📱',
  },
  {
    title: 'AI Solutions',
    description: 'Integrate AI and machine learning to automate, analyze, and innovate.',
    icon: '🤖',
  },
  {
    title: 'UI/UX Design',
    description: 'Stunning, user-centric designs that delight and engage your audience.',
    icon: '🎨',
  },
  {
    title: 'Cloud Services',
    description: 'Secure, scalable, and cost-effective cloud solutions for modern businesses.',
    icon: '☁️',
  },
  {
    title: 'E-Commerce',
    description: 'Robust online stores with seamless shopping experiences and payment integrations.',
    icon: '🛒',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 80 } },
};

const Services = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4" style={{ backgroundColor: '#000', color: '#fff' }}>
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-4xl md:text-6xl font-extrabold text-center mb-8"
      >
        Our <span style={{ color: '#3b82f6' }}>Services</span>
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.7 }}
        className="text-lg md:text-2xl text-center mb-12 max-w-2xl"
        style={{ color: '#fff' }}
      >
        We deliver a wide range of digital solutions to help your business grow, innovate, and succeed in the digital era.
      </motion.p>
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {services.map((service, idx) => (
          <motion.div
            key={service.title}
            className="bg-[#111] rounded-2xl p-8 shadow-lg flex flex-col items-center text-center border border-[#222] hover:scale-105 hover:shadow-2xl transition-transform duration-300"
            variants={cardVariants}
            whileHover={{ scale: 1.08, boxShadow: '0 8px 32px #3b82f6' }}
          >
            <motion.div
              className="text-5xl mb-4"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2 * idx, type: 'spring', stiffness: 120 }}
            >
              {service.icon}
            </motion.div>
            <h2 className="text-2xl font-bold mb-2" style={{ color: '#fff' }}>{service.title}</h2>
            <p className="text-gray-300 mb-4">{service.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Services;
