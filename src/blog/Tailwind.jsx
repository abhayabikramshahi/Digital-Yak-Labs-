// src/pages/Tailwind.jsx
import React from "react";
import BlogImg from "../assets/blog1.png";

export default function Tailwind() {
  return (
    <main className="min-h-screen bg-gray-50 p-8 md:p-16">
      {/* Blog Header */}
      <header className="mb-8 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-600 mb-2">
          How to Setup TailwindCSS in React.js
        </h1>
        <p className="text-gray-600 text-lg">
          A step-by-step guide to adding TailwindCSS to your React projects
        </p>
      </header>

      {/* Blog Image */}
      <div className="mb-8 flex justify-center">
        <img
          src={BlogImg}
          alt="Tailwind CSS Setup"
          className="w-full max-w-3xl rounded-lg shadow-lg"
        />
      </div>

      {/* Blog Content */}
      <article className="max-w-4xl mx-auto space-y-6 text-gray-800">
        <section>
          <h2 className="text-2xl font-semibold mb-2">Step 1: Create React App</h2>
          <p>
            First, create a React app using Create React App or Vite. Example with CRA:
          </p>
          <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
            <code>npm create vite@latest .{'\n'}cd my-app</code>
          </pre>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">Step 2: Install TailwindCSS</h2>
          <p>Install TailwindCSS and its dependencies via npm:</p>
          <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
            <code>
              npm install tailwindcss @tailwindcss/vite{'\n'}
            </code>
          </pre>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">Step 3: Configure Tailwind</h2>
          <p>
            Open <code>vite.config.js</code> and add paths to your React files:
          </p>
          <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
            <code>
{`import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
})
`}
            </code>
          </pre>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">Step 4: Add Tailwind Directives</h2>
          <p>
            In <code>src/index.css</code>, add the following:
          </p>
          <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
            <code>
{`@import 'tailwind';`}
            </code>
          </pre>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">Step 5: Start Using Tailwind</h2>
          <p>
            Now you can use Tailwind classes in your React components:
          </p>
          <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
            <code>
{`function App() {
  return (
    <div className="text-center p-10">
      <h1 className="text-3xl font-bold text-red-600">Hello Tailwind!</h1>
      <p className="mt-4 text-gray-700">Your React app is ready with TailwindCSS</p>
    </div>
  );
}`}
            </code>
          </pre>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">Conclusion</h2>
          <p>
            That’s it! Your React app now supports TailwindCSS. You can now build beautiful UI faster with utility-first CSS. 🎉
          </p>
        </section>
      </article>
    </main>
  );
}
