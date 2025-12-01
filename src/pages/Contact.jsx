import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaWhatsapp, FaEnvelope, FaPhone, FaQuestionCircle } from 'react-icons/fa';
import { MdSupportAgent, MdRestaurant } from 'react-icons/md';
import { IoChevronDown } from 'react-icons/io5';

const Contact = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const contactMethods = [
    {
      icon: <FaWhatsapp className="text-5xl text-primary" />,
      title: 'WhatsApp Support',
      description: 'Chat with us instantly',
      action: '+91 98765 43210',
      link: 'https://wa.me/919876543210'
    },
    {
      icon: <FaEnvelope className="text-5xl text-primary" />,
      title: 'Email Support',
      description: 'We reply within 24 hours',
      action: 'support@grihgo.com',
      link: 'mailto:support@grihgo.com'
    },
    {
      icon: <FaPhone className="text-5xl text-primary" />,
      title: 'Phone Support',
      description: 'Mon-Sat, 9 AM - 9 PM',
      action: '1800-123-4567',
      link: 'tel:18001234567'
    }
  ];

  const faqs = [
    {
      question: 'How do I place an order?',
      answer: 'Download the GrihGO app, select your location, browse restaurants, add items to cart, and checkout. You can track your order in real-time.'
    },
    {
      question: 'Are there any hidden charges?',
      answer: 'No! GrihGO has zero hidden charges. What you see in the cart is exactly what you pay. No platform fees, no surge pricing.'
    },
    {
      question: 'What is the delivery time?',
      answer: 'Delivery time varies by restaurant and location, typically 20-45 minutes. You can see estimated delivery time before placing your order.'
    },
    {
      question: 'How can I track my order?',
      answer: 'Once your order is confirmed, you can track it in real-time through the app. You\'ll receive notifications at each stage of delivery.'
    },
    {
      question: 'What payment methods are accepted?',
      answer: 'We accept all major payment methods including UPI, credit/debit cards, net banking, and cash on delivery.'
    },
    {
      question: 'Can I cancel my order?',
      answer: 'Yes, you can cancel your order before the restaurant starts preparing it. Refunds are processed within 5-7 business days.'
    },
    {
      question: 'How do I become a restaurant partner?',
      answer: 'Visit our Partner With Us page and fill out the application form. Our team will contact you within 24 hours.'
    },
    {
      question: 'How can I join as a delivery partner?',
      answer: 'Visit our Delivery Partners page, fill out the application form with required documents. We\'ll verify and onboard you quickly.'
    }
  ];

  return (
    <div> 
      {/* Hero Section */}
     <section className="relative text-white py-20 overflow-hidden">

  {/* CLEAN FULL IMAGE — NO GRADIENT, NO OPACITY */}
  <div className="absolute inset-0 z-0">
    <img 
      src="https://images.pexels.com/photos/1583884/pexels-photo-1583884.jpeg"   // ← Your image stays same
      alt="Contact"
      className="w-full h-full object-cover"
    />
  </div>

  {/* ❌ Removed green/dark overlay */}
  {/* <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primaryDark/80"></div> */}

  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-center"
    >
      <h1 className="text-5xl font-bold mb-6 drop-shadow-xl">Help & Support</h1>

      <p className="text-xl max-w-3xl mx-auto drop-shadow-md">
        We're here to help! Reach out to us through any of these channels
      </p>
    </motion.div>
  </div>

</section>

      {/* Contact Methods */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactMethods.map((method, index) => (
              <motion.a
                key={index}
                href={method.link}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-softGrey rounded-2xl p-8 text-center shadow-card hover:shadow-card-hover transition-all duration-300"
              >
                <div className="flex justify-center mb-4">{method.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{method.title}</h3>
                <p className="text-gray-600 mb-4">{method.description}</p>
                <p className="text-primary font-semibold text-lg">{method.action}</p>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Support Categories */}
      <section className="py-20 bg-softGrey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Choose Your Support Type</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-all duration-300"
            >
              <MdSupportAgent className="text-6xl text-primary mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Customer Support</h3>
              <p className="text-gray-600 mb-6">
                Help with orders, payments, delivery, or any customer-related queries
              </p>
              <button className="w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-primaryDark transition-colors">
                Contact Customer Support
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-all duration-300"
            >
              <MdRestaurant className="text-6xl text-primary mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Restaurant Support</h3>
              <p className="text-gray-600 mb-6">
                Help for restaurant partners with menu, orders, or account management
              </p>
              <button className="w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-primaryDark transition-colors">
                Contact Restaurant Support
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <FaQuestionCircle className="text-6xl text-primary mx-auto mb-4" />
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Find quick answers to common questions</p>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-softGrey rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-200 transition-colors"
                >
                  <span className="font-semibold text-gray-900">{faq.question}</span>
                  <motion.div
                    animate={{ rotate: openFaq === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <IoChevronDown className="text-2xl text-primary" />
                  </motion.div>
                </button>
                <AnimatePresence>
                  {openFaq === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-4 text-gray-600">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-softGrey">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Still Have Questions?</h2>
            <p className="text-xl text-gray-600">Send us a message and we'll get back to you</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 shadow-card"
          >
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:outline-none"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:outline-none"
                />
              </div>
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:outline-none"
              />
              <select className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:outline-none">
                <option>Select Issue Type</option>
                <option>Order Issue</option>
                <option>Payment Issue</option>
                <option>Delivery Issue</option>
                <option>Restaurant Partner Query</option>
                <option>Delivery Partner Query</option>
                <option>Other</option>
              </select>
              <textarea
                placeholder="Describe your issue"
                rows="5"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:outline-none"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-primary text-white py-3 rounded-lg font-bold hover:bg-primaryDark transition-colors"
              >
                Submit
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
