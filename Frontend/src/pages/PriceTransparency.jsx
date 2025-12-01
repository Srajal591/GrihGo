import { motion } from 'framer-motion';
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';
import { MdAttachMoney } from 'react-icons/md';
import { IoShieldCheckmark } from 'react-icons/io5';

const PriceTransparency = () => {
  const comparison = [
    {
      feature: 'Platform Fee',
      grihgo: { value: '₹0', status: true },
      zomato: { value: '₹5-10', status: false },
      swiggy: { value: '₹5-10', status: false }
    },
    {
      feature: 'Surge Pricing',
      grihgo: { value: 'Never', status: true },
      zomato: { value: 'During Peak Hours', status: false },
      swiggy: { value: 'During Peak Hours', status: false }
    },
    {
      feature: 'Delivery Fee',
      grihgo: { value: 'Transparent', status: true },
      zomato: { value: 'Variable', status: false },
      swiggy: { value: 'Variable', status: false }
    },
    {
      feature: 'Hidden Charges',
      grihgo: { value: 'Zero', status: true },
      zomato: { value: 'Multiple', status: false },
      swiggy: { value: 'Multiple', status: false }
    },
    {
      feature: 'Restaurant Commission',
      grihgo: { value: '10-15%', status: true },
      zomato: { value: '20-30%', status: false },
      swiggy: { value: '20-30%', status: false }
    },
    {
      feature: 'Price Breakdown',
      grihgo: { value: 'Detailed', status: true },
      zomato: { value: 'Basic', status: false },
      swiggy: { value: 'Basic', status: false }
    }
  ];

  const priceExample = {
    itemPrice: 250,
    taxes: 25,
    deliveryFee: 30,
    platformFee: 0,
    surgeFee: 0,
    total: 305
  };

  const competitorExample = {
    itemPrice: 250,
    taxes: 25,
    deliveryFee: 40,
    platformFee: 8,
    surgeFee: 15,
    total: 338
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary to-primaryDark text-white py-20 overflow-hidden">
        {/* Background Image - Replace /price-transparency-bg.jpg with your image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/price-transparency-bg.jpg" 
            alt="Price Transparency" 
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
            <IoShieldCheckmark className="text-7xl mx-auto mb-6" />
            <h1 className="text-5xl font-bold mb-6">Price Transparency</h1>
            <p className="text-xl max-w-3xl mx-auto">
              No hidden charges. No surprises. What you see is what you pay.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              How We Compare
            </h2>
            <p className="text-xl text-gray-600">
              See the difference for yourself
            </p>
          </motion.div>

          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-2xl overflow-hidden shadow-card">
              <thead className="bg-softGrey">
                <tr>
                  <th className="px-6 py-4 text-left text-lg font-bold text-gray-900">Feature</th>
                  <th className="px-6 py-4 text-center text-lg font-bold text-primary">GrihGO</th>
                  <th className="px-6 py-4 text-center text-lg font-bold text-gray-600">Zomato</th>
                  <th className="px-6 py-4 text-center text-lg font-bold text-gray-600">Swiggy</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((item, index) => (
                  <motion.tr
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="border-t border-gray-200"
                  >
                    <td className="px-6 py-4 font-semibold text-gray-900">{item.feature}</td>
                    <td className="px-6 py-4 text-center">
                      <div className="flex items-center justify-center space-x-2">
                        <FaCheckCircle className="text-primary text-xl" />
                        <span className="font-semibold text-primary">{item.grihgo.value}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <div className="flex items-center justify-center space-x-2">
                        <FaTimesCircle className="text-red-500 text-xl" />
                        <span className="text-gray-600">{item.zomato.value}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <div className="flex items-center justify-center space-x-2">
                        <FaTimesCircle className="text-red-500 text-xl" />
                        <span className="text-gray-600">{item.swiggy.value}</span>
                      </div>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Price Breakdown Example */}
      <section className="py-20 bg-softGrey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Real Price Example
            </h2>
            <p className="text-xl text-gray-600">
              Same order, different platforms
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* GrihGO Price */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-8 shadow-card-hover border-4 border-primary"
            >
              <div className="text-center mb-6">
                <div className="text-2xl font-bold text-primary mb-2">GrihGO</div>
                <MdAttachMoney className="text-5xl text-primary mx-auto" />
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center pb-2 border-b border-gray-200">
                  <span className="text-gray-700">Item Price</span>
                  <span className="font-semibold">₹{priceExample.itemPrice}</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-gray-200">
                  <span className="text-gray-700">Taxes & Charges</span>
                  <span className="font-semibold">₹{priceExample.taxes}</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-gray-200">
                  <span className="text-gray-700">Delivery Fee</span>
                  <span className="font-semibold">₹{priceExample.deliveryFee}</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-gray-200">
                  <span className="text-gray-700">Platform Fee</span>
                  <span className="font-semibold text-primary">₹{priceExample.platformFee}</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-gray-200">
                  <span className="text-gray-700">Surge Fee</span>
                  <span className="font-semibold text-primary">₹{priceExample.surgeFee}</span>
                </div>
                <div className="flex justify-between items-center pt-4">
                  <span className="text-xl font-bold text-gray-900">Total</span>
                  <span className="text-3xl font-bold text-primary">₹{priceExample.total}</span>
                </div>
              </div>
            </motion.div>

            {/* Competitor Price */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-8 shadow-card"
            >
              <div className="text-center mb-6">
                <div className="text-2xl font-bold text-gray-600 mb-2">Other Platforms</div>
                <MdAttachMoney className="text-5xl text-gray-400 mx-auto" />
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center pb-2 border-b border-gray-200">
                  <span className="text-gray-700">Item Price</span>
                  <span className="font-semibold">₹{competitorExample.itemPrice}</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-gray-200">
                  <span className="text-gray-700">Taxes & Charges</span>
                  <span className="font-semibold">₹{competitorExample.taxes}</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-gray-200">
                  <span className="text-gray-700">Delivery Fee</span>
                  <span className="font-semibold">₹{competitorExample.deliveryFee}</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-gray-200">
                  <span className="text-gray-700">Platform Fee</span>
                  <span className="font-semibold text-red-500">₹{competitorExample.platformFee}</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-gray-200">
                  <span className="text-gray-700">Surge Fee</span>
                  <span className="font-semibold text-red-500">₹{competitorExample.surgeFee}</span>
                </div>
                <div className="flex justify-between items-center pt-4">
                  <span className="text-xl font-bold text-gray-900">Total</span>
                  <span className="text-3xl font-bold text-gray-900">₹{competitorExample.total}</span>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <div className="bg-primary text-white rounded-2xl p-8 max-w-2xl mx-auto">
              <h3 className="text-3xl font-bold mb-4">You Save ₹{competitorExample.total - priceExample.total}</h3>
              <p className="text-lg">On every order with GrihGO!</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Promise */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-8">Our Promise to You</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { title: 'No Platform Fee', desc: 'Ever' },
                { title: 'No Surge Pricing', desc: 'Even during peak hours' },
                { title: 'Transparent Pricing', desc: 'Always' }
              ].map((promise, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-softGrey rounded-2xl p-6 shadow-card"
                >
                  <FaCheckCircle className="text-5xl text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{promise.title}</h3>
                  <p className="text-gray-600">{promise.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default PriceTransparency;
