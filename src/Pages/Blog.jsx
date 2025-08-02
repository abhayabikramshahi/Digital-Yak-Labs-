import React from 'react';

const blogPosts = [
  {
    id: 1,
    title: "Revolutionizing Conversations with AI",
    description: "Explore how AI is transforming the way we communicate, making interactions more efficient and personalized.",
    link: "/blog/revolutionizing-conversations-with-ai",
    author: "Abhaya",
    date: new Date().toLocaleDateString(),
  },
];

function Blog() {
  return (
    <main>
      <div className="container mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold mb-6">🧠 Blog</h1>
        <p className="text-gray-700 mb-4">
          Welcome to our blog! Here, we share insights, updates, and stories related to our services and the tech industry.
        </p>
        <p className="text-gray-700 mb-8">Stay tuned for our latest posts!</p>

        {/* {blogPosts.map((post) => (
          <div key={post.id} className="mb-6 border-b pb-4 border px-3 py-2 rounded-lg border-gray-400">
            <h2 className="text-2xl font-semibold">{post.title}</h2>
            <p className="text-gray-600 text-sm mb-2">
              Posted on {post.date} by {post.author}
            </p>
            <p className="text-gray-700 mb-2">{post.description}</p>
            <a href={post.link} className="text-blue-600 hover:underline">
              Read More →
            </a>
          </div>
        ))} */}
      </div>
    </main>
  );
}

export default Blog;
