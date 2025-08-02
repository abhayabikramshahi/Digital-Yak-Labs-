import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import {
  User,
  Mail,
  Phone,
  MessageSquare,
} from 'lucide-react';
import { motion } from 'framer-motion';

export default function Contact() {
  const form = useRef();
  const [status, setStatus] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus('Sending...');

    emailjs
      .sendForm(
        'service_ve5qksj',
        'template_soatdte',
        form.current,
        'C0x5YF-j7XdF6JJS-'
      )
      .then(
        () => {
          setStatus('Message sent! ✅ Please call us to follow up.');
          form.current.reset();
        },
        (error) => {
          console.error(error.text);
          setStatus('Failed to send. Please try again later.');
        }
      );
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-12 grid md:grid-cols-2 gap-10 items-center">
      {/* LHS: Intro / Info */}
      <motion.div
        className="space-y-6"
        initial={{ opacity: 0, x: -60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        <h2 className="text-4xl font-bold text-gray-800">Let’s Get in Touch</h2>
        <p className="text-gray-600 text-lg">
          We’d love to hear from you. Fill out the form and we’ll get back as soon as possible. For urgent matters, call us directly.
        </p>

        <div className="space-y-3">
          <div className="flex items-center text-gray-700">
            <Mail className="w-5 h-5 mr-3 text-blue-600" />
            abhayabikramshahiofficial@gmail.com
          </div>
          <div className="flex items-center text-gray-700">
            <Phone className="w-5 h-5 mr-3 text-blue-600" />
            +977-9808370638
          </div>
        </div>
      </motion.div>

      {/* RHS: Form */}
      <motion.div
        className="bg-white shadow-lg rounded-lg p-8 border border-gray-200"
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        <form ref={form} onSubmit={sendEmail} className="space-y-5">
          {/* Name */}
          <div className="relative">
            <User className="w-5 h-5 text-gray-400 absolute left-3 top-3.5" />
            <input
              type="text"
              name="user_name"
              placeholder="Your Full Name"
              required
              className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Email */}
          <div className="relative">
            <Mail className="w-5 h-5 text-gray-400 absolute left-3 top-3.5" />
            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              required
              className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Phone */}
          <div className="relative">
            <Phone className="w-5 h-5 text-gray-400 absolute left-3 top-3.5" />
            <input
              type="tel"
              name="user_phone"
              placeholder="Your Phone Number"
              required
              className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Message */}
          <div className="relative">
            <MessageSquare className="w-5 h-5 text-gray-400 absolute left-3 top-3.5" />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              required
              className="pl-10 pr-4 pt-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-medium py-2 rounded-md hover:bg-blue-700 transition"
          >
            Send Message
          </button>

          {/* Status Message */}
          {status && (
            <p className="text-sm text-gray-600 mt-2 text-center">{status}</p>
          )}
        </form>

        {/* Call Us Note */}
        <div className="mt-6 text-center text-sm text-gray-500 border-t pt-4">
          <p>
            Once submitted, please <strong>call us</strong> to confirm:
            <br />
            <span className="text-blue-600 font-medium">+977-9808370638</span>
          </p>
        </div>
      </motion.div>
    </div>
  );
}
