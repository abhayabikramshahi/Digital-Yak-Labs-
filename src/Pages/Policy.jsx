import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";

const Policy = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans transition-all duration-300 ease-in-out">
      {/* SEO */}
      <Helmet>
        <title>Privacy Policy - Nepal Coding House Pvt. Ltd.</title>
        <meta
          name="description"
          content="Read our privacy policy to understand how we handle your data and ensure your privacy."
        />
        <meta name="keywords" content="privacy, policy, data protection" />
        <meta name="author" content="Nepal Coding House Pvt. Ltd." />
      </Helmet>

      <main className="container mx-auto px-6 py-12 grid md:grid-cols-12 gap-6">
        {/* LHS Sticky Sidebar */}
        <motion.aside
          className="md:col-span-3 hidden md:block space-y-4 text-sm text-gray-600 font-semibold uppercase"
          style={{
            position: "sticky",
            top: "6rem",
            maxHeight: "calc(100vh - 6rem)",
            overflowY: "auto",
          }}
          initial={{ x: -80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div>On this page</div>
          <ul className="space-y-2">
            <li>
              <a href="#info" className="hover:text-blue-600 transition">
                Information Collection
              </a>
            </li>
            <li>
              <a href="#use" className="hover:text-blue-600 transition">
                Use of Data
              </a>
            </li>
            <li>
              <a href="#security" className="hover:text-blue-600 transition">
                Data Security
              </a>
            </li>
            <li>
              <a href="#changes" className="hover:text-blue-600 transition">
                Policy Changes
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-blue-600 transition">
                Contact Us
              </a>
            </li>
          </ul>
        </motion.aside>

        {/* Center Scrollable Content */}
        <motion.section
          className="md:col-span-6 max-h-[calc(100vh-6rem)] overflow-y-auto pr-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
          <p className="text-gray-700 mb-4">
            At Nepal Coding House Pvt. Ltd., we value your privacy and are
            committed to protecting your personal information. This Privacy
            Policy outlines how we collect, use, and safeguard your data.
          </p>
          <p className="text-gray-700 mb-8">
            By using our services, you agree to the collection and use of
            information in accordance with this policy.
          </p>

          <section id="info" className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Information Collection</h2>
            <p className="text-gray-700 mb-2">
              We collect various types of information for various purposes to
              provide and improve our services to you.
            </p>
            <ul className="list-disc pl-5 text-gray-700">
              <li>Personal Data: Name, email address, phone number, etc.</li>
              <li>Usage Data: Information on how you use our website and
                services.</li>
              <li>
                Cookies: We use cookies to track activity on our service and
                hold certain information.
              </li>
            </ul>
          </section>

          <section id="use" className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Use of Data</h2>
            <p className="text-gray-700 mb-2">
              Nepal Coding House Pvt. Ltd. uses the collected data for various
              purposes:
            </p>
            <ul className="list-disc pl-5 text-gray-700">
              <li>To provide and maintain our service</li>
              <li>To notify you about changes to our service</li>
              <li>
                To allow you to participate in interactive features of our service
                when you choose to do so
              </li>
              <li>To provide customer support</li>
              <li>To gather analysis to improve our service</li>
              <li>To monitor the usage of our service</li>
              <li>To detect and address technical issues</li>
            </ul>
          </section>

          <section id="security" className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Data Security</h2>
            <p className="text-gray-700 mb-2">
              The security of your data is important to us, but remember that no
              method of transmission over the internet is 100% secure. We strive
              to use commercially acceptable means to protect your personal data,
              but we cannot guarantee absolute security.
            </p>
          </section>

          <section id="changes" className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Changes to This Privacy Policy</h2>
            <p className="text-gray-700 mb-2">
              We may update our Privacy Policy from time to time. We will notify
              you of any changes by posting the new Privacy Policy on this page.
            </p>
            <p className="text-gray-700 mb-2">
              You are advised to review this Privacy Policy periodically for any
              changes. Changes are effective immediately upon posting on this
              page.
            </p>
          </section>

          <section id="contact" className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
            <p className="text-gray-700 mb-2">
              If you have any questions about this Privacy Policy, please contact
              us:
            </p>
            <p className="text-gray-700">
              📧 Email:{" "}
              <a
                href="mailto:abhayabikramshahiofficial@gmail.com"
                className="text-blue-600 hover:underline"
              >
                abhayabikramshahiofficial@gmail.com
              </a>
            </p>
          </section>
        </motion.section>

        {/* RHS Sticky Sidebar */}
        <motion.aside
          className="md:col-span-3 hidden md:flex flex-col items-start space-y-6"
          style={{
            position: "sticky",
            top: "6rem",
            maxHeight: "calc(100vh - 6rem)",
            overflowY: "auto",
          }}
          initial={{ x: 80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="p-4 bg-blue-50 border border-blue-200 rounded-xl w-full">
            <h3 className="text-lg font-semibold text-blue-800">Need Help?</h3>
            <p className="text-sm text-blue-700 mb-2">
              We're just one message away. Reach out for support!
            </p>
            <Link
              to="/contact"
              className="inline-block text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md text-sm font-medium transition"
            >
              Contact Support
            </Link>
          </div>

          <div className="p-4 bg-gray-50 border border-gray-200 rounded-xl w-full">
            <h3 className="text-lg font-semibold text-gray-800">Learn More</h3>
            <p className="text-sm text-gray-700 mb-2">
              Want to know how we handle your data?
            </p>
            <Link
              to="/terms"
              className="inline-block text-blue-600 hover:underline text-sm"
            >
              View Terms & Conditions →
            </Link>
          </div>
        </motion.aside>
      </main>
    </div>
  );
};

export default Policy;
