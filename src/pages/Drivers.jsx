import { motion } from 'framer-motion';
import { FaMoneyBillWave, FaClock, FaCalendarAlt, FaTrophy, FaShieldAlt, FaMapMarkedAlt } from 'react-icons/fa';
import { MdDeliveryDining } from 'react-icons/md';
import { IoMdCheckmarkCircle } from 'react-icons/io';

const Drivers = () => {
  const benefits = [
    {
      icon: <FaMoneyBillWave className="text-5xl text-primary" />,
      title: 'Best Earnings',
      description: 'Earn up to ₹25,000-₹40,000 per month with transparent payment structure'
    },
    {
      icon: <FaClock className="text-5xl text-primary" />,
      title: 'Flexible Timings',
      description: 'Work on your own schedule. Choose your hours and days'
    },
    {
      icon: <FaCalendarAlt className="text-5xl text-primary" />,
      title: 'Weekly Payouts',
      description: 'Get paid every week directly to your bank account'
    },
    {
      icon: <FaTrophy className="text-5xl text-primary" />,
      title: 'Bonus on Peak Hours',
      description: 'Earn extra during lunch and dinner rush hours'
    },
    {
      icon: <FaShieldAlt className="text-5xl text-primary" />,
      title: 'Insurance Coverage',
      description: 'Comprehensive insurance for you and your vehicle'
    },
    {
      icon: <FaMapMarkedAlt className="text-5xl text-primary" />,
      title: 'Smart Routing',
      description: 'AI-powered route optimization for faster deliveries'
    }
  ];

  const requirements = [
    'Age 18 years or above',
    'Valid driving license',
    'Own vehicle (bike/scooter)',
    'Smartphone with internet',
    'Aadhaar card',
    'Bank account',
    'Good knowledge of local area',
    'Professional attitude'
  ];

  const earnings = [
    { range: '0-50 deliveries', amount: '₹30 per delivery' },
    { range: '51-100 deliveries', amount: '₹35 per delivery' },
    { range: '100+ deliveries', amount: '₹40 per delivery' },
    { range: 'Peak hours bonus', amount: '+₹10 per delivery' }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary to-primaryDark text-white py-20 overflow-hidden">
        {/* Background Image - Replace /drivers-bg.jpg with your image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/drivers-bg.jpg" 
            alt="Delivery Partners" 
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
            <MdDeliveryDining className="text-7xl mx-auto mb-6" />
            <h1 className="text-5xl font-bold mb-6">Become a Delivery Partner</h1>
            <p className="text-xl max-w-3xl mx-auto mb-8">
              Join GrihGO's delivery fleet and earn on your own terms with the best benefits in the industry
            </p>
            <button className="bg-white text-primary px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg">
              Join as Delivery Partner
            </button>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Ride With GrihGO?</h2>
            <p className="text-xl text-gray-600">Benefits that make a difference</p>
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
                className="bg-softGrey rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 text-center"
              >
                <div className="flex justify-center mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Earnings Section */}
      <section className="py-20 bg-softGrey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Transparent Earnings</h2>
            <p className="text-xl text-gray-600">Know exactly how much you'll earn</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {earnings.map((earning, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-card text-center"
              >
                <div className="text-sm text-gray-600 mb-2">{earning.range}</div>
                <div className="text-3xl font-bold text-primary">{earning.amount}</div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 bg-primary text-white rounded-2xl p-8 text-center"
          >
            <h3 className="text-2xl font-bold mb-4">Potential Monthly Earnings</h3>
            <div className="text-5xl font-bold mb-2">₹25,000 - ₹40,000</div>
            <p className="text-lg">Based on 8-10 hours daily work</p>
          </motion.div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Requirements</h2>
              <p className="text-lg text-gray-600 mb-8">
                Simple requirements to get started as a delivery partner
              </p>
              <div className="space-y-4">
                {requirements.map((req, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="flex items-center space-x-3"
                  >
                    <IoMdCheckmarkCircle className="text-2xl text-primary flex-shrink-0" />
                    <span className="text-gray-700">{req}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-softGrey rounded-3xl p-8 shadow-card"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Apply Now</h3>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Full Name"
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
                <select className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:outline-none">
                  <option>Vehicle Type</option>
                  <option>Bike</option>
                  <option>Scooter</option>
                </select>
                <input
                  type="text"
                  placeholder="Driving License Number"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:outline-none"
                />
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

export default Drivers;
