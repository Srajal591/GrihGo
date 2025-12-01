import { motion } from 'framer-motion';
import { FaUsers, FaRocket, FaHeart, FaLaptopCode, FaBullhorn, FaChartLine } from 'react-icons/fa';
import { MdWork } from 'react-icons/md';

const Careers = () => {
  const values = [
    {
      icon: <FaHeart className="text-4xl text-primary" />,
      title: 'People First',
      description: 'We believe in creating a supportive and inclusive work environment'
    },
    {
      icon: <FaRocket className="text-4xl text-primary" />,
      title: 'Innovation',
      description: 'We encourage creative thinking and new ideas'
    },
    {
      icon: <FaUsers className="text-4xl text-primary" />,
      title: 'Collaboration',
      description: 'We work together to achieve common goals'
    }
  ];

  const openRoles = [
  {
    icon: <FaUsers className="text-3xl text-primary" />,
    title: 'Restaurant Onboarding Manager',
    department: 'Partnerships',
    location: 'Darbhanga / Patna',
    type: 'Full-time'
  },
  {
    icon: <MdWork className="text-3xl text-primary" />,
    title: 'Delivery Operations Supervisor',
    department: 'Operations',
    location: 'Darbhanga',
    type: 'Full-time'
  },
  {
    icon: <FaBullhorn className="text-3xl text-primary" />,
    title: 'Food Photography & Menu Specialist',
    department: 'Content',
    location: 'Patna / Flexible',
    type: 'Part-time'
  },
  {
    icon: <FaChartLine className="text-3xl text-primary" />,
    title: 'City Growth Manager',
    department: 'Marketing & Expansion',
    location: 'Patna / Muzaffarpur',
    type: 'Full-time'
  },
  {
    icon: <FaLaptopCode className="text-3xl text-primary" />,
    title: 'Food Tech Product Manager',
    department: 'Product',
    location: 'Remote / Patna',
    type: 'Full-time'
  },
  {
    icon: <FaUsers className="text-3xl text-primary" />,
    title: 'Customer Support Executive (Food & Delivery)',
    department: 'Support',
    location: 'Patna / Darbhanga',
    type: 'Full-time'
  },
  {
    icon: <MdWork className="text-3xl text-primary" />,
    title: 'Quality Assurance & Hygiene Inspector',
    department: 'Quality',
    location: 'Field Role (All Cities)',
    type: 'Full-time'
  },
  {
    icon: <FaUsers className="text-3xl text-primary" />,
    title: 'Delivery Partner Trainer',
    department: 'Training & Fleet',
    location: 'Patna',
    type: 'Full-time'
  },
  {
    icon: <FaBullhorn className="text-3xl text-primary" />,
    title: 'Local Food Influencer Coordinator',
    department: 'Marketing',
    location: 'Darbhanga / Patna',
    type: 'Contract'
  }
];


  const perks = [
    'Competitive salary',
    'Health insurance',
    'Flexible work hours',
    'Remote work options',
    'Learning & development',
    'Team outings',
    'Performance bonuses',
    'Career growth opportunities'
  ];

  return (
    <div>
      {/* Hero Section */}
     {/* Hero Section */}
<section className="relative text-white py-20 overflow-hidden">

  {/* CLEAN FULL IMAGE — NO GRADIENT, NO OPACITY */}
  <div className="absolute inset-0 z-0">
    <img 
      src="https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg"   
      alt="Careers"
      className="w-full h-full object-cover"
    />
  </div>

  {/* ❌ Removed green overlay */}
  {/* <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primaryDark/80"></div> */}

  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-center"
    >
      <h1 className="text-5xl font-bold mb-6 drop-shadow-xl">Join Our Team</h1>
      <p className="text-xl max-w-3xl mx-auto drop-shadow-md">
        Be part of Bihar's fastest-growing food delivery platform and make a real impact
      </p>
    </motion.div>
  </div>

</section>


      {/* Why Work With Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Work With GrihGO?</h2>
            <p className="text-xl text-gray-600">Our culture and values</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-softGrey rounded-2xl p-8 text-center shadow-card hover:shadow-card-hover transition-all duration-300"
              >
                <div className="flex justify-center mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Perks */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-softGrey rounded-2xl p-8"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Perks & Benefits</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {perks.map((perk, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-white rounded-lg p-4 text-center shadow-sm"
                >
                  <span className="text-gray-700 font-medium">{perk}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Open Roles */}
      <section className="py-20 bg-softGrey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Open Positions</h2>
            <p className="text-xl text-gray-600">Find your perfect role</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {openRoles.map((role, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="bg-softGrey p-3 rounded-xl">{role.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{role.title}</h3>
                    <div className="space-y-1 text-sm text-gray-600 mb-4">
                      <p>{role.department}</p>
                      <p>{role.location}</p>
                      <p className="text-primary font-semibold">{role.type}</p>
                    </div>
                    <button className="bg-primary text-white px-6 py-2 rounded-lg font-semibold hover:bg-primaryDark transition-colors">
                      Apply Now
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Section */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Don't See Your Role?</h2>
            <p className="text-xl text-gray-600">Send us your resume and we'll keep you in mind for future opportunities</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-softGrey rounded-2xl p-8"
          >
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="First Name"
                  className="px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:outline-none"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:outline-none"
                />
              </div>
              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:outline-none"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:outline-none"
              />
              <input
                type="text"
                placeholder="Position Interested In"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:outline-none"
              />
              <textarea
                placeholder="Tell us about yourself"
                rows="4"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:outline-none"
              ></textarea>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                <p className="text-gray-600 mb-2">Upload Resume (PDF, DOC)</p>
                <button type="button" className="text-primary font-semibold hover:underline">
                  Choose File
                </button>
              </div>
              <button
                type="submit"
                className="w-full bg-primary text-white py-3 rounded-lg font-bold hover:bg-primaryDark transition-colors"
              >
                Submit Application
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Careers;
