import { useState } from 'react';
import { motion } from 'framer-motion';
import { BiSolidUpvote } from 'react-icons/bi';
import { FaCheckCircle } from 'react-icons/fa';

const CityVoting = () => {
  const [cities, setCities] = useState([
    { name: 'Darbhanga', votes: 0, status: 'Launching Soon', canVote: false },
    { name: 'Patna', votes: 0, status: 'Launching Soon', canVote: false },
    { name: 'Madhubani', votes: 1247, status: 'Vote Now', canVote: true },
    { name: 'Muzaffarpur', votes: 982, status: 'Vote Now', canVote: true },
    { name: 'Samastipur', votes: 756, status: 'Vote Now', canVote: true },
    { name: 'Begusarai', votes: 634, status: 'Vote Now', canVote: true },
  ]);

  const [votedCities, setVotedCities] = useState([]);

  const handleVote = (cityName) => {
    if (votedCities.includes(cityName)) return;
    
    setCities(cities.map(city => 
      city.name === cityName ? { ...city, votes: city.votes + 1 } : city
    ));
    setVotedCities([...votedCities, cityName]);
  };

  return (
    <section className="py-20 bg-softGrey">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Aapka Shehar Per GrihGO kab aayega?
          </h2>
          <p className="text-xl text-gray-600 mb-2">Vote for your city</p>
          <p className="text-lg text-primary font-semibold">Top 3 cities will launch next!</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cities.map((city, index) => (
            <motion.div
              key={city.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: city.canVote ? 1.05 : 1.02 }}
              className={`bg-white rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 ${
                !city.canVote ? 'border-2 border-primary' : ''
              }`}
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold text-gray-900">{city.name}</h3>
                {!city.canVote && (
                  <span className="bg-primary text-white text-xs px-3 py-1 rounded-full font-semibold">
                    {city.status}
                  </span>
                )}
              </div>

              {city.canVote && (
                <>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-3xl font-bold text-primary">{city.votes}</span>
                    <span className="text-gray-600">votes</span>
                  </div>

                  <button
                    onClick={() => handleVote(city.name)}
                    disabled={votedCities.includes(city.name)}
                    className={`w-full py-3 rounded-xl font-semibold transition-all duration-200 flex items-center justify-center space-x-2 ${
                      votedCities.includes(city.name)
                        ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                        : 'bg-primary text-white hover:bg-primaryDark'
                    }`}
                  >
                    {votedCities.includes(city.name) ? (
                      <>
                        <FaCheckCircle />
                        <span>Voted</span>
                      </>
                    ) : (
                      <>
                        <BiSolidUpvote />
                        <span>Vote Now</span>
                      </>
                    )}
                  </button>
                </>
              )}

              {!city.canVote && (
                <div className="text-center py-4">
                  <p className="text-primary font-semibold text-lg">{city.status}</p>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CityVoting;
