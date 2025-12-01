import { motion } from 'framer-motion';
import { FaUtensils, FaStore, FaUsers, FaHeart } from 'react-icons/fa';
import { MdRestaurant } from 'react-icons/md';
import { BiSolidFoodMenu } from 'react-icons/bi';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      category: 'Food Stories',
      icon: <FaUtensils className="text-2xl" />,
      title: 'The Rich Heritage of Mithila Cuisine',
      excerpt: 'Discover the traditional flavors and cooking techniques that make Mithila cuisine unique and beloved across Bihar.',
      image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=500',
      date: 'Nov 20, 2024',
      readTime: '5 min read'
    },
    {
      id: 2,
      category: 'Restaurant Spotlight',
      icon: <MdRestaurant className="text-2xl" />,
      title: 'Meet the Chef: Bihari Rasoi\'s Success Story',
      excerpt: 'How a small family restaurant became one of Darbhanga\'s most loved dining destinations.',
      image: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=500',
      date: 'Nov 18, 2024',
      readTime: '4 min read'
    },
    {
      id: 3,
      category: 'Customer Stories',
      icon: <FaUsers className="text-2xl" />,
      title: 'How GrihGO Changed My Food Ordering Experience',
      excerpt: 'Real stories from customers who discovered the joy of transparent pricing and local restaurant support.',
      image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=500',
      date: 'Nov 15, 2024',
      readTime: '3 min read'
    },
    {
      id: 4,
      category: 'Behind the Scenes',
      icon: <FaStore className="text-2xl" />,
      title: 'A Day in the Life of a GrihGO Delivery Partner',
      excerpt: 'Follow our delivery heroes as they navigate the streets bringing joy to customers.',
      image: 'https://images.unsplash.com/photo-1526367790999-0150786686a2?w=500',
      date: 'Nov 12, 2024',
      readTime: '6 min read'
    },
    {
      id: 5,
      category: 'Mithila Culture',
      icon: <FaHeart className="text-2xl" />,
      title: 'Celebrating Chhath Puja: Food and Traditions',
      excerpt: 'Exploring the special dishes and cultural significance of Bihar\'s most important festival.',
      image: 'https://images.unsplash.com/photo-1604999565976-8913ad2ddb7c?w=500',
      date: 'Nov 10, 2024',
      readTime: '5 min read'
    },
    {
      id: 6,
      category: 'Food Stories',
      icon: <BiSolidFoodMenu className="text-2xl" />,
      title: 'The Art of Making Perfect Litti Chokha',
      excerpt: 'A deep dive into Bihar\'s most iconic dish and the secrets behind its authentic taste.',
      image: 'https://images.unsplash.com/photo-1596797038530-2c107229654b?w=500',
      date: 'Nov 8, 2024',
      readTime: '4 min read'
    }
  ];

  const categories = ['All', 'Food Stories', 'Restaurant Spotlight', 'Customer Stories', 'Behind the Scenes', 'Mithila Culture'];
  const [activeCategory, setActiveCategory] = React.useState('All');

  const filteredPosts = activeCategory === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary to-primaryDark text-white py-20 overflow-hidden">
        {/* Background Image - Replace /blog-bg.jpg with your image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/blog-bg.jpg" 
            alt="Blog" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primaryDark/80"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-5xl font-bold mb-6">Stories & Blog</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Discover food stories, restaurant spotlights, and the culture that makes Bihar special
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white sticky top-16 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full font-semibold transition-all duration-200 ${
                  activeCategory === category
                    ? 'bg-primary text-white shadow-lg'
                    : 'bg-softGrey text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-12 bg-softGrey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 cursor-pointer"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-primary text-white px-3 py-1 rounded-full flex items-center space-x-2 text-sm font-semibold">
                    {post.icon}
                    <span>{post.category}</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>{post.date}</span>
                    <span>{post.readTime}</span>
                  </div>
                  <button className="mt-4 text-primary font-semibold hover:underline">
                    Read More →
                  </button>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-primary to-primaryDark text-white rounded-3xl p-12 text-center"
          >
            <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
            <p className="text-lg mb-8">
              Get the latest food stories, restaurant updates, and exclusive offers delivered to your inbox
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 rounded-lg text-gray-900 focus:outline-none"
              />
              <button className="bg-white text-primary px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
