import React from "react";
import { GraduationCap, TrendingUp, Clock } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    title: "Digital School System",
    description:
      "Empowering schools with smart attendance, online results, fee tracking, and modern learning tools—all in one place.",
    icon: <GraduationCap size={40} className="text-red-500" />,
  },
  {
    title: "Boost Your Business Sales",
    description:
      "We create growth-driven strategies using SEO, analytics, and targeted marketing to skyrocket your revenue.",
    icon: <TrendingUp size={40} className="text-red-500" />,
  },
  {
    title: "On-Time Software Delivery",
    description:
      "Reliable, scalable software delivered with precision and speed—so you never miss a deadline.",
    icon: <Clock size={40} className="text-red-500" />,
  },
];

const Service = () => {
  return (
    <div className="min-h-screen px-6 py-16 bg-white text-black font-sans">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4 tracking-tight">Our Core Services</h2>
        <p className="text-gray-600 mb-12 text-lg">
          We don’t just deliver solutions — we deliver results.
        </p>

        <div className="grid md:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6, ease: "easeOut" }}
              className="bg-white border border-gray-200 p-8 rounded-2xl shadow-xl hover:shadow-red-400/30 transition-all duration-300"
            >
              <div className="flex items-center justify-center mb-6">
                {service.icon}
              </div>
              <h3 className="text-2xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service;
