import React from 'react'

function Contact() {
  return (
    <>
    
    {/* Contact Section */}
      <section className="bg-white text-gray-900 py-24 px-6 text-center">
        <h2 className="text-4xl font-bold mb-6">Get In Touch</h2>
        <p className="mb-8">Have questions or want to join our courses? Fill the form below or email us directly!</p>
        <form className="max-w-xl mx-auto flex flex-col gap-4">
          <input
            type="text"
            placeholder="Your Name"
            className="px-4 py-3 rounded-lg border border-gray-300"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="px-4 py-3 rounded-lg border border-gray-300"
          />
          <textarea
            placeholder="Your Message"
            rows="4"
            className="px-4 py-3 rounded-lg border border-gray-300"
          ></textarea>
          <button
            type="submit"
            className="bg-gray-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition"
          >
            Send Message
          </button>
        </form>
      </section>
    </>
  )
}

export default Contact