import { motion } from 'framer-motion';
import CityVoting from '../components/CityVoting.jsx';
import { FaMapMarkerAlt, FaCheckCircle } from 'react-icons/fa';
import { MdRestaurant } from 'react-icons/md';

const Cities = () => {
  const launchingSoon = [
    {
      name: 'Darbhanga',
      description: 'The cultural capital of Mithila',
      restaurants: '50+ restaurants',
      status: 'Launching Soon'
    },
    {
      name: 'Patna',
      description: 'The capital city of Bihar',
      restaurants: '100+ restaurants',
      status: 'Launching Soon'
    }
  ];

  const features = [
    'Zero platform fees',
    'No surge pricing',
    'Support local restaurants',
    'Fast delivery',
    'Real-time tracking',
    'Multiple payment options'
  ];

  return (
    <div>
   
     {/* Hero Section */}
<section className="relative text-white py-20 overflow-hidden">

  {/* CLEAN IMAGE PLACEHOLDER – No Opacity, No Gradient */}
  <div className="absolute inset-0 z-0">
    <img 
      src="https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg"  
      alt="Cities"
      className="w-full h-full object-cover"
    />
  </div>


  {/* ❌ Removed opacity filter */}

  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-center"
    >
      <FaMapMarkerAlt className="text-6xl mx-auto mb-6 drop-shadow-lg" />
      <h1 className="text-5xl font-bold mb-6 drop-shadow-lg">Our Cities</h1>
      <p className="text-xl max-w-3xl mx-auto drop-shadow-md">
        GrihGO is expanding across Bihar. Check if we're in your city or vote to bring us there!
      </p>
    </motion.div>
  </div>
</section>


      {/* Launching Soon Cities */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Launching Soon</h2>
            <p className="text-xl text-gray-600">Get ready for the best food delivery experience</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {launchingSoon.map((city, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-br from-primary to-primaryDark text-white rounded-3xl p-8 shadow-card-hover"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-3xl font-bold mb-2">{city.name}</h3>
                    <p className="text-white/90 mb-4">{city.description}</p>
                  </div>
                  <FaCheckCircle className="text-3xl" />
                </div>
                <div className="flex items-center space-x-2 mb-6">
                  <MdRestaurant className="text-2xl" />
                  <span className="font-semibold">{city.restaurants}</span>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-xl px-4 py-2 inline-block">
                  <span className="font-bold">{city.status}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* City Voting Section */}
      <CityVoting />

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What You Get With GrihGO
            </h2>
            <p className="text-xl text-gray-600">
              The same great experience in every city
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-softGrey rounded-xl p-6 text-center shadow-card"
              >
                <FaCheckCircle className="text-3xl text-primary mx-auto mb-3" />
                <p className="font-semibold text-gray-900">{feature}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-softGrey">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Don't See Your City?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Vote for your city above and help us prioritize our expansion. The top 3 cities with the most votes will be next!
            </p>
            <button className="bg-primary text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-primaryDark transition-colors shadow-lg">
              Vote for Your City
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Cities;
