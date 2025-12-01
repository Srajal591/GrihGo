import { motion } from 'framer-motion';
import { FaStore, FaCamera, FaRocket, FaChartLine, FaHandshake, FaHeadset } from 'react-icons/fa';
import { MdRestaurantMenu } from 'react-icons/md';
import { IoMdCheckmarkCircle } from 'react-icons/io';

const PartnerWithUs = () => {
  const benefits = [
    {
      icon: <FaStore className="text-4xl text-primary" />,
      title: 'Free Listing',
      description: 'Get your restaurant listed on GrihGO at zero cost. No setup fees, no monthly charges.'
    },
    {
      icon: <FaCamera className="text-4xl text-primary" />,
      title: 'Free Menu Shoot',
      description: 'Professional food photography for your menu items completely free of charge.'
    },
    {
      icon: <FaRocket className="text-4xl text-primary" />,
      title: 'Instant Onboarding',
      description: 'Quick and easy registration process. Start receiving orders within 24 hours.'
    },
    {
      icon: <FaChartLine className="text-4xl text-primary" />,
      title: 'Grow Your Business',
      description: 'Reach more customers and increase your revenue with our growing user base.'
    },
    {
      icon: <MdRestaurantMenu className="text-4xl text-primary" />,
      title: 'Easy Menu Management',
      description: 'Update your menu, prices, and availability anytime through our partner dashboard.'
    },
    {
      icon: <FaHeadset className="text-4xl text-primary" />,
      title: '24/7 Support',
      description: 'Dedicated support team to help you with any queries or issues.'
    }
  ];

  const features = [
    'Zero commission on first 100 orders',
    'Lowest commission rates in the industry',
    'No hidden charges or platform fees',
    'Weekly payouts directly to your account',
    'Real-time order tracking and analytics',
    'Marketing support and promotions',
    'Free delivery partner network',
    'Customer feedback and ratings'
  ];

  return (
    <div>
      {/* Hero Section */}
     {/* Hero Section */}
<section className="relative text-white py-20 overflow-hidden">

  {/* CLEAN FULL IMAGE — NO GRADIENT, NO OPACITY */}
  <div className="absolute inset-0 z-0">
    <img 
      src="https://images.pexels.com/photos/1482803/pexels-photo-1482803.jpeg"  // ← Replace with your own hero image
      alt="Partner With GrihGO"
      className="w-full h-full object-cover"
    />
  </div>

  {/* ❌ Removed green gradient overlay */}
  {/* <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primaryDark/80"></div> */}

  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-center"
    >
      <h1 className="text-5xl font-bold mb-6 drop-shadow-xl">
        Partner With GrihGO
      </h1>

      <p className="text-xl max-w-3xl mx-auto mb-8 drop-shadow-md">
        Join Bihar's fastest-growing food delivery platform and grow your restaurant business
      </p>

      <button className="bg-white text-primary px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg">
        Become a Partner
      </button>
    </motion.div>
  </div>

</section>


      {/* Why Join Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Join GrihGO?</h2>
            <p className="text-xl text-gray-600">Benefits that help your restaurant thrive</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-softGrey rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300"
              >
                <div className="flex justify-center mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 text-center">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-softGrey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Everything You Need to Succeed
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                We provide all the tools and support to help your restaurant grow and reach more customers.
              </p>
              <div className="space-y-4">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="flex items-center space-x-3"
                  >
                    <IoMdCheckmarkCircle className="text-2xl text-primary flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-8 shadow-card"
            >
              <div className="text-center mb-6">
                <FaHandshake className="text-6xl text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Ready to Partner?</h3>
                <p className="text-gray-600">Fill out the form and we'll get back to you within 24 hours</p>
              </div>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Restaurant Name"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:outline-none"
                />
                <input
                  type="text"
                  placeholder="Owner Name"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:outline-none"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:outline-none"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:outline-none"
                />
                <input
                  type="text"
                  placeholder="City"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:outline-none"
                />
                <textarea
                  placeholder="Tell us about your restaurant"
                  rows="4"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:outline-none"
                ></textarea>
                <button
                  type="submit"
                  className="w-full bg-primary text-white py-3 rounded-lg font-bold hover:bg-primaryDark transition-colors"
                >
                  Submit Application
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PartnerWithUs;
