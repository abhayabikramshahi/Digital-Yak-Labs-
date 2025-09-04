import { motion } from 'framer-motion';
import { useState } from 'react';
import SEO from "../components/SEO";

const Blogs = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Sample blog data
  return (
    <>
      <SEO
        title="Blogs | Digital Yak Labs"
        description="Read the latest blogs and articles from Digital Yak Labs on technology, innovation, and more."
        keywords="Digital Yak Labs blogs, articles, technology, innovation"
        author="Digital Yak Labs"
      />
      {/* ...existing code... */}
    </>
  );
  // Sample blog data
  const blogPosts = [
    {
      id: 1,
      title: "Getting Started with React Development",
      excerpt: "Learn the fundamentals of React and build your first application...",
      category: "web",
      date: "March 15, 2024",
      readTime: "5 min read",
      image: "https://via.placeholder.com/800x400",
      featured: true
    },
    {
      id: 2,
      title: "Mobile App Development Best Practices",
      excerpt: "Essential tips and tricks for building better mobile applications...",
      category: "mobile",
      date: "March 14, 2024",
      readTime: "7 min read",
      image: "https://via.placeholder.com/800x400"
    },
    {
      id: 3,
      title: "UI/UX Design Principles",
      excerpt: "Understanding the core principles of user interface and experience design...",
      category: "design",
      date: "March 13, 2024",
      readTime: "6 min read",
      image: "https://via.placeholder.com/800x400"
    },
    // Add more blog posts as needed
  ];

  const categories = [
    { id: 'all', name: 'All Posts' },
    { id: 'web', name: 'Web Development' },
    { id: 'mobile', name: 'Mobile Development' },
    { id: 'design', name: 'Design' }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredPost = blogPosts.find(post => post.featured);

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-6 tracking-tight">Our Blog</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Insights, tutorials, and updates from our team
          </p>
        </motion.div>

        {/* Search and Filter Section */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
            {/* Search Bar */}
            <div className="w-full md:w-96">
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            {/* Categories */}
            <div className="flex flex-wrap gap-2">
              {categories.map(category => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors
                    ${selectedCategory === category.id 
                      ? 'bg-blue-600 text-white' 
                      : 'bg-white text-gray-600 hover:bg-gray-100'}`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Featured Post */}
        {featuredPost && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8 md:w-1/2">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">
                      Featured
                    </span>
                    <span className="text-gray-500 text-sm">{featuredPost.date}</span>
                  </div>
                  <h2 className="text-3xl font-bold text-black mb-4">{featuredPost.title}</h2>
                  <p className="text-gray-600 mb-6">{featuredPost.excerpt}</p>
                  <button className="text-blue-600 font-medium hover:text-blue-700">
                    Read More →
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">
                    {post.category}
                  </span>
                  <span className="text-gray-500 text-sm">{post.readTime}</span>
                </div>
                <h3 className="text-xl font-bold text-black mb-2">{post.title}</h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="text-gray-500 text-sm">{post.date}</span>
                  <button className="text-blue-600 font-medium hover:text-blue-700">
                    Read More →
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* No Results Message */}
        {filteredPosts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">No posts found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Blog; 