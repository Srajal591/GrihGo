import { motion } from 'framer-motion';
import { FaHeart, FaHandshake, FaAward, FaUsers } from 'react-icons/fa';
import { MdRestaurantMenu } from 'react-icons/md';
import { IoShieldCheckmark } from 'react-icons/io5';

const About = () => {
  const sections = [
    {
      icon: <FaUsers className="text-5xl text-primary" />,
      title: 'Who We Are',
      description: 'GrihGO is Bihar\'s own food delivery platform, built with love for our local communities. We connect food lovers with their favorite local restaurants, making delicious food accessible to everyone.'
    },
    {
      icon: <FaHeart className="text-5xl text-primary" />,
      title: 'Our Mission',
      description: 'To empower local restaurants and provide customers with transparent, affordable food delivery services. We believe in supporting local businesses and creating opportunities in our communities.'
    },
    {
      icon: <MdRestaurantMenu className="text-5xl text-primary" />,
      title: 'Why We Exist',
      description: 'We saw local restaurants struggling with high commission fees and customers paying hidden charges. GrihGO was born to change this - offering fair pricing for restaurants and transparent costs for customers.'
    },
    {
      icon: <IoShieldCheckmark className="text-5xl text-primary" />,
      title: 'Our Promise',
      description: 'Zero hidden charges, no platform fees, no surge pricing. What you see is what you pay. We\'re committed to building trust through transparency and supporting the growth of local food businesses.'
    }
  ];

  return (
    <div>
   
      {/* Hero Section */}
<section className="relative text-white py-20 overflow-hidden">
  
  {/* FULL CLEAR IMAGE – NO OPACITY, NO TINT */}
  <div className="absolute inset-0 z-0">
    <img 
      src="https://images.pexels.com/photos/718742/pexels-photo-718742.jpeg" 
      alt="About GrihGO" 
      className="w-full h-full object-cover"
    />
  </div>

  {/* ❌ Removed Gradient Overlay completely */}
  {/* <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primaryDark/80"></div> */}

  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-center"
    >
      <h1 className="text-5xl font-bold mb-6 drop-shadow-lg">About GrihGO</h1>
      <p className="text-xl max-w-3xl mx-auto drop-shadow-md">
        Bihar ka apna food delivery app - Built for the people, by the people
      </p>
    </motion.div>
  </div>
</section>


      {/* Sections */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {sections.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-softGrey rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-all duration-300"
              >
                <div className="flex justify-center mb-6">{section.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                  {section.title}
                </h3>
                <p className="text-gray-600 text-center leading-relaxed">
                  {section.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-softGrey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600">What drives us every day</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: <FaHandshake />, title: 'Transparency', desc: 'Honest pricing, no hidden fees' },
              { icon: <FaHeart />, title: 'Community First', desc: 'Supporting local businesses' },
              { icon: <FaAward />, title: 'Quality Service', desc: 'Excellence in every delivery' }
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 text-center shadow-card"
              >
                <div className="text-5xl text-primary mb-4 flex justify-center">{value.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
