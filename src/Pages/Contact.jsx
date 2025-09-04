import { motion } from 'framer-motion';
import { useState } from 'react';
import SEO from "../components/SEO";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <>
      <SEO
        title="Contact Digital Yak Labs"
        description="Contact Digital Yak Labs for inquiries, support, or collaboration opportunities."
        keywords="Contact Digital Yak Labs, support, inquiries, collaboration"
        author="Digital Yak Labs"
      />
      <div className="min-h-screen bg-white">
      <div className="container mx-auto px-6 lg:px-8 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-6 tracking-tight">Get in Touch</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Have a question or want to work together? We'd love to hear from you.
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white rounded-2xl shadow-xl p-8 md:p-12"
          >
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="space-y-2">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-black focus:ring-2 focus:ring-black/10 outline-none transition-all"
                  required
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-black focus:ring-2 focus:ring-black/10 outline-none transition-all"
                  required
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message here..."
                  rows="6"
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-black focus:ring-2 focus:ring-black/10 outline-none transition-all resize-none"
                  required
                ></textarea>
              </div>

              <motion.button
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-black text-white py-4 px-8 rounded-lg text-lg font-medium hover:bg-gray-800 transition-all shadow-lg hover:shadow-xl"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-12 text-center"
          >
            <p className="text-gray-600">
              Or reach out directly at{' '}
              <a href="mailto:contact@digitalyak.com" className="text-black font-medium hover:underline">
                contact@digitalyak.com
              </a>
            </p>
          </motion.div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Contact; 