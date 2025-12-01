import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiClock, FiMapPin, FiStar } from 'react-icons/fi';
import { MdRestaurant } from 'react-icons/md';
import { BiSolidFoodMenu } from 'react-icons/bi';

const Restaurants = () => {
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);

  const restaurants = [
    {
      id: 1,
      name: 'Bihari Rasoi',
      cuisine: 'North Indian, Bihari',
      rating: 4.5,
      time: '30-40 mins',
      location: 'Darbhanga',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=500',
      category: 'Featured',
      description: 'Authentic Bihari cuisine with traditional flavors',
      menu: ['Litti Chokha', 'Sattu Paratha', 'Dal Puri'],
      timing: '10:00 AM - 10:00 PM'
    },
    {
      id: 2,
      name: 'Mithila Sweets',
      cuisine: 'Sweets, Snacks',
      rating: 4.7,
      time: '20-30 mins',
      location: 'Darbhanga',
      image: 'https://images.unsplash.com/photo-1559054663-e8b0c0c2f0f4?w=500',
      category: 'Local Favorites',
      description: 'Famous for traditional Mithila sweets and snacks',
      menu: ['Khaja', 'Anarsa', 'Thekua'],
      timing: '8:00 AM - 9:00 PM'
    },
    {
      id: 3,
      name: 'Patna Paratha House',
      cuisine: 'Street Food, Breakfast',
      rating: 4.3,
      time: '25-35 mins',
      location: 'Patna',
      image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=500',
      category: 'Local Favorites',
      description: 'Best parathas in town with variety of fillings',
      menu: ['Aloo Paratha', 'Paneer Paratha', 'Mix Paratha'],
      timing: '7:00 AM - 11:00 PM'
    },
    {
      id: 4,
      name: 'Spice Garden',
      cuisine: 'Multi-Cuisine',
      rating: 4.6,
      time: '35-45 mins',
      location: 'Patna',
      image: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?w=500',
      category: 'New Partners',
      description: 'Modern dining with diverse menu options',
      menu: ['Biryani', 'Chinese', 'Continental'],
      timing: '11:00 AM - 11:00 PM'
    },
    {
      id: 5,
      name: 'Desi Dhaba',
      cuisine: 'Punjabi, North Indian',
      rating: 4.4,
      time: '30-40 mins',
      location: 'Darbhanga',
      image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=500',
      category: 'Exclusive',
      description: 'Highway-style dhaba food with authentic taste',
      menu: ['Dal Makhani', 'Butter Chicken', 'Tandoori Roti'],
      timing: '12:00 PM - 11:00 PM'
    },
    {
      id: 6,
      name: 'Chai Sutta Bar',
      cuisine: 'Beverages, Snacks',
      rating: 4.2,
      time: '15-25 mins',
      location: 'Patna',
      image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=500',
      category: 'Exclusive',
      description: 'Perfect spot for tea lovers and quick bites',
      menu: ['Masala Chai', 'Samosa', 'Pakora'],
      timing: '9:00 AM - 10:00 PM'
    }
  ];

  const categories = ['All', 'Featured', 'Local Favorites', 'New Partners', 'Exclusive'];
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredRestaurants = activeCategory === 'All' 
    ? restaurants 
    : restaurants.filter(r => r.category === activeCategory);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary to-primaryDark text-white py-20 overflow-hidden">
        {/* Background Image - Replace /restaurants-bg.jpg with your image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/restaurants-bg.jpg" 
            alt="Restaurants" 
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
            <h1 className="text-5xl font-bold mb-6">Our Restaurants</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Discover amazing local restaurants and order your favorite food
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

      {/* Restaurants Grid */}
      <section className="py-12 bg-softGrey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredRestaurants.map((restaurant, index) => (
              <motion.div
                key={restaurant.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                onClick={() => setSelectedRestaurant(restaurant)}
                className="bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 cursor-pointer"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={restaurant.image}
                    alt={restaurant.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full flex items-center space-x-1">
                    <FiStar className="text-yellow-500" />
                    <span className="font-semibold">{restaurant.rating}</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{restaurant.name}</h3>
                  <p className="text-gray-600 mb-3">{restaurant.cuisine}</p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center space-x-1">
                      <FiClock />
                      <span>{restaurant.time}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <FiMapPin />
                      <span>{restaurant.location}</span>
                    </div>
                  </div>
                  <button className="w-full mt-4 bg-primary text-white py-2 rounded-lg font-semibold hover:bg-primaryDark transition-colors">
                    Order on App
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Restaurant Modal */}
      <AnimatePresence>
        {selectedRestaurant && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedRestaurant(null)}
              className="fixed inset-0 bg-black/50 z-50 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-2xl mx-4 max-h-[90vh] overflow-y-auto"
            >
              <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
                <div className="relative h-64">
                  <img
                    src={selectedRestaurant.image}
                    alt={selectedRestaurant.name}
                    className="w-full h-full object-cover"
                  />
                  <button
                    onClick={() => setSelectedRestaurant(null)}
                    className="absolute top-4 right-4 bg-white rounded-full p-2 hover:bg-gray-100 transition-colors"
                  >
                    <FiX className="text-2xl" />
                  </button>
                </div>
                <div className="p-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">{selectedRestaurant.name}</h2>
                  <p className="text-gray-600 mb-4">{selectedRestaurant.cuisine}</p>
                  <p className="text-gray-700 mb-6">{selectedRestaurant.description}</p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center space-x-2">
                      <FiStar className="text-yellow-500 text-xl" />
                      <span className="font-semibold">{selectedRestaurant.rating} Rating</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <FiClock className="text-primary text-xl" />
                      <span>{selectedRestaurant.time}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <FiMapPin className="text-primary text-xl" />
                      <span>{selectedRestaurant.location}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MdRestaurant className="text-primary text-xl" />
                      <span>{selectedRestaurant.timing}</span>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center space-x-2">
                      <BiSolidFoodMenu className="text-primary" />
                      <span>Menu Highlights</span>
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedRestaurant.menu.map((item, index) => (
                        <span key={index} className="bg-softGrey px-4 py-2 rounded-full text-gray-700">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  <button className="w-full bg-primary text-white py-4 rounded-xl font-bold text-lg hover:bg-primaryDark transition-colors">
                    Order on App
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Restaurants;
