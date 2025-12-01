import { motion } from 'framer-motion';
import { FaHeart, FaHandshake, FaUsers, FaStore } from 'react-icons/fa';
import { GiIndianPalace } from 'react-icons/gi';
import { MdRestaurant } from 'react-icons/md';

const LocalPride = () => {
  const culturalElements = [
    {
      icon: <GiIndianPalace className="text-6xl text-primary" />,
      title: 'Mithila Heritage',
      description: 'Celebrating the rich cultural heritage of Mithila region through food and traditions'
    },
    {
      icon: <MdRestaurant className="text-6xl text-primary" />,
      title: 'Traditional Cuisine',
      description: 'Preserving and promoting authentic Bihari and Mithila recipes passed down through generations'
    },
    {
      icon: <FaStore className="text-6xl text-primary" />,
      title: 'Local Businesses',
      description: 'Supporting local restaurant owners and helping them grow their businesses'
    },
    {
      icon: <FaUsers className="text-6xl text-primary" />,
      title: 'Community First',
      description: 'Creating employment opportunities and strengthening our local communities'
    }
  ];

  const traditionalDishes = [
    {
      name: 'Litti Chokha',
      description: 'Bihar\'s iconic dish made with roasted wheat balls and mashed vegetables',
      image: 'https://images.unsplash.com/photo-1596797038530-2c107229654b?w=500'
    },
    {
      name: 'Sattu Paratha',
      description: 'Nutritious flatbread stuffed with roasted gram flour',
      image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=500'
    },
    {
      name: 'Khaja',
      description: 'Traditional Mithila sweet, crispy and layered with sugar syrup',
      image: 'https://images.unsplash.com/photo-1559054663-e8b0c0c2f0f4?w=500'
    },
    {
      name: 'Dal Puri',
      description: 'Deep-fried bread stuffed with spiced lentils',
      image: 'https://images.unsplash.com/photo-1626132647523-66f5bf380027?w=500'
    }
  ];

  const stats = [
    { number: '100+', label: 'Local Restaurants' },
    { number: '500+', label: 'Jobs Created' },
    { number: '10,000+', label: 'Happy Customers' },
    { number: '₹0', label: 'Hidden Charges' }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary to-primaryDark text-white py-20 overflow-hidden">
        {/* Background Image - Replace /local-pride-bg.jpg with your image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/local-pride-bg.jpg" 
            alt="Local Pride" 
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
            <FaHeart className="text-7xl mx-auto mb-6" />
            <h1 className="text-5xl font-bold mb-6">Bihar Ka Apna Food Delivery App</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Built with pride for Bihar, celebrating our culture, supporting our people, and serving our communities
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Cultural Elements */}
      <section className="py-20 bg-softGrey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Cultural Pride</h2>
            <p className="text-xl text-gray-600">What makes us uniquely Bihari</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {culturalElements.map((element, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-all duration-300"
              >
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0">{element.icon}</div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{element.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{element.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Traditional Dishes */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Traditional Flavors</h2>
            <p className="text-xl text-gray-600">Authentic dishes that define our cuisine</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {traditionalDishes.map((dish, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-softGrey rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={dish.image}
                    alt={dish.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{dish.name}</h3>
                  <p className="text-gray-600 text-sm">{dish.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Impact */}
      <section className="py-20 bg-softGrey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Impact on Bihar</h2>
            <p className="text-xl text-gray-600">How we're making a difference</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <FaHandshake className="text-5xl text-primary" />,
                title: 'Fair Partnership',
                description: 'Lower commission rates mean restaurants keep more of what they earn, helping local businesses thrive'
              },
              {
                icon: <FaUsers className="text-5xl text-primary" />,
                title: 'Job Creation',
                description: 'Creating employment opportunities for delivery partners, restaurant staff, and support teams'
              },
              {
                icon: <FaHeart className="text-5xl text-primary" />,
                title: 'Community Growth',
                description: 'Reinvesting in local communities and supporting Bihar\'s economic development'
              }
            ].map((impact, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 text-center shadow-card"
              >
                <div className="flex justify-center mb-4">{impact.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{impact.title}</h3>
                <p className="text-gray-600">{impact.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primaryDark text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">Join the Movement</h2>
            <p className="text-xl mb-8">
              Be part of Bihar's food revolution. Support local, eat local, grow local.
            </p>
            <button className="bg-white text-primary px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg">
              Download GrihGO App
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default LocalPride;
