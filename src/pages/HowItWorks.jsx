import { motion } from 'framer-motion';
import { FiMapPin, FiSearch, FiShoppingBag } from 'react-icons/fi';
import { MdDeliveryDining } from 'react-icons/md';

const HowItWorks = () => {
  const steps = [
    {
      icon: <FiMapPin className="text-6xl text-primary" />,
      title: 'Choose Your Location',
      description: 'Enter your delivery address or let us detect your location automatically. We\'ll show you all available restaurants in your area.',
      step: '01'
    },
    {
      icon: <FiSearch className="text-6xl text-primary" />,
      title: 'Find Nearby Restaurants',
      description: 'Browse through local favorites and new restaurants. Filter by cuisine, ratings, delivery time, or explore extended zones for more options.',
      step: '02'
    },
    {
      icon: <FiShoppingBag className="text-6xl text-primary" />,
      title: 'Order with Transparent Pricing',
      description: 'Add items to cart and see the exact price breakdown. No hidden charges, no platform fees, no surge pricing. What you see is what you pay.',
      step: '03'
    },
    {
      icon: <MdDeliveryDining className="text-6xl text-primary" />,
      title: 'Fast Delivery',
      description: 'Track your order in real-time. Our delivery partners ensure your food arrives fresh and hot at your doorstep.',
      step: '04'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary to-primaryDark text-white py-20 overflow-hidden">
        {/* Background Image - Replace /how-it-works-bg.jpg with your image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/how-it-works-bg.jpg" 
            alt="How It Works" 
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
            <h1 className="text-5xl font-bold mb-6">How It Works</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Ordering food has never been easier. Follow these simple steps to get your favorite meals delivered.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`flex flex-col ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } items-center gap-12`}
              >
                {/* Icon Side */}
                <div className="flex-1 flex justify-center">
                  <div className="relative">
                    <div className="bg-softGrey rounded-3xl p-12 shadow-card">
                      {step.icon}
                    </div>
                    <div className="absolute -top-6 -right-6 bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold shadow-lg">
                      {step.step}
                    </div>
                  </div>
                </div>

                {/* Content Side */}
                <div className="flex-1">
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">{step.title}</h3>
                  <p className="text-lg text-gray-600 leading-relaxed">{step.description}</p>
                </div>
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
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Ready to Order?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Download the GrihGO app and start exploring local restaurants today!
            </p>
            <button className="bg-primary text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-primaryDark transition-colors shadow-lg">
              Download App
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;
