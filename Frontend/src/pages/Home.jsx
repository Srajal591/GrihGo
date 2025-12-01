import { useState } from "react";
import { motion } from "framer-motion";
import { FiSearch, FiMapPin } from "react-icons/fi";
import { MdRestaurant } from "react-icons/md";
import { BiSolidFoodMenu } from "react-icons/bi";
import { IoLocationSharp } from "react-icons/io5";

import TiltedCard from "../components/TiltedCard";
import CityVoting from "../components/CityVoting";
import AppPopup from "../components/AppPopup";

const Home = () => {
  const [showAppPopup, setShowAppPopup] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [location, setLocation] = useState("");

  return (
    <div className="bg-offWhite">

      {/* HERO SECTION */}
    {/* HERO SECTION */}
<section className="relative h-screen w-full overflow-hidden">
  <video
    autoPlay
    loop
    muted
    playsInline
    className="absolute inset-0 w-full h-full object-cover brightness-[0.75]"
  >
    <source src="/hero.mp4" type="video/mp4" />
  </video>

  <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/40"></div>

  <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
    
    {/* BRAND NAME */}
    <motion.h1
      initial={{ opacity: 0, y: 35 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-white font-bold text-5xl md:text-6xl drop-shadow-xl"
    >
      GrihGO
    </motion.h1>

    {/* TAGLINE */}
    <motion.h2
      initial={{ opacity: 0, y: 35 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="mt-3 text-white font-semibold text-3xl md:text-5xl"
    >
      Bihar’s #1 food delivery app
    </motion.h2>

    {/* SUB TEXT */}
    <motion.p
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.35 }}
      className="mt-4 text-white/90 text-lg md:text-xl max-w-xl"
    >
      Order locally. Eat fresh. Save more.
    </motion.p>

    {/* ⭐ RESTORED PLAY STORE + APP STORE BUTTONS */}
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.5 }}
      className="mt-8 flex gap-4"
    >
      <img
        src="https://b.zmtcdn.com/data/o2_assets/aad864bd17860b27634fe621001c32db1739350431.png"
        className="h-14 cursor-pointer"
        onClick={() => setShowAppPopup(true)}
      />

      <img
        src="https://b.zmtcdn.com/data/o2_assets/df6464de32f4a09262cee301f65aaa661739351256.png"
        className="h-14 cursor-pointer"
        onClick={() => setShowAppPopup(true)}
      />
    </motion.div>

  </div>
</section>


      {/* SEARCH SECTION */}
      <section className="bg-offWhite py-12 -mt-20 relative z-20">
        <div className="max-w-5xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="bg-white rounded-2xl shadow-xl p-6 border border-sage"
          >
            <h3 className="text-center text-2xl font-bold mb-6 text-primary">
              Search restaurants near you
            </h3>

            <div className="flex flex-col md:flex-row gap-4">
              
              {/* SEARCH */}
              <div className="flex-1 flex items-center bg-softGreen/20 rounded-xl px-4 py-3 shadow-sm">
                <FiSearch className="text-2xl text-primary mr-3" />
                <input
                  type="text"
                  placeholder="Search restaurant or dish"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="flex-1 bg-transparent outline-none text-primary placeholder-primary/70"
                />
              </div>

              {/* LOCATION */}
              <div className="flex-1 flex items-center bg-softGreen/20 rounded-xl px-4 py-3 shadow-sm">
                <FiMapPin className="text-2xl text-primary mr-3" />
                <input
                  type="text"
                  placeholder="Enter your location"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="flex-1 bg-transparent outline-none text-primary placeholder-primary/70"
                />
              </div>

              {/* BUTTON */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.93 }}
                className="bg-primary hover:bg-[#2e5535] text-white px-8 py-3 rounded-xl font-bold shadow-md"
              >
                Search
              </motion.button>

            </div>
          </motion.div>
        </div>
      </section>


    <section className="py-20 bg-offWhite">
        <div className="max-w-7xl mx-auto px-4">

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl font-bold text-primary mb-10 text-center"
          >
            Order food in just a tap
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 place-items-center">

            {/* Biryani */}
            <TiltedCard
              imageSrc="https://as2.ftcdn.net/v2/jpg/05/51/07/25/1000_F_551072558_rENux9fqlec5GPBJSaToT69xjcYiGxje.jpg"
              altText="Biryani"
              captionText="Biryani"
              containerHeight="260px"
              containerWidth="260px"
              imageHeight="260px"
              imageWidth="260px"
              rotateAmplitude={12}
              scaleOnHover={1.15}
              showMobileWarning={false}
              showTooltip={true}
              displayOverlayContent={true}
              overlayContent={
                <div className="text-white font-semibold text-lg bg-black/40 px-3 py-1 rounded-md absolute bottom-3 left-3">
                  Biryani
                </div>
              }
            />

            {/* Pizza */}
            <TiltedCard
              imageSrc="https://static.vecteezy.com/system/resources/previews/023/631/130/non_2x/pizza-with-salami-and-mozzarella-on-a-black-background-ai-generative-image-free-photo.jpg"
              altText="Pizza"
              captionText="Pizza"
              containerHeight="260px"
              containerWidth="260px"
              imageHeight="260px"
              imageWidth="260px"
              rotateAmplitude={12}
              scaleOnHover={1.15}
              showMobileWarning={false}
              showTooltip={true}
              displayOverlayContent={true}
              overlayContent={
                <div className="text-white font-semibold text-lg bg-black/40 px-3 py-1 rounded-md absolute bottom-3 left-3">
                  Pizza
                </div>
              }
            />

            {/* Burgers */}
            <TiltedCard
              imageSrc="https://static.vecteezy.com/system/resources/previews/030/683/548/non_2x/burgers-high-quality-4k-hdr-free-photo.jpg"
              altText="Burgers"
              captionText="Burgers"
              containerHeight="260px"
              containerWidth="260px"
              imageHeight="260px"
              imageWidth="260px"
              rotateAmplitude={12}
              scaleOnHover={1.15}
              showMobileWarning={false}
              showTooltip={true}
              displayOverlayContent={true}
              overlayContent={
                <div className="text-white font-semibold text-lg bg-black/40 px-3 py-1 rounded-md absolute bottom-3 left-3">
                  Burgers
                </div>
              }
            />

            {/* Sweets */}
            <TiltedCard
              imageSrc="https://wallpapercave.com/wp/wp6667837.jpg"
              altText="Sweets"
              captionText="Sweets"
              containerHeight="260px"
              containerWidth="260px"
              imageHeight="260px"
              imageWidth="260px"
              rotateAmplitude={12}
              scaleOnHover={1.15}
              showMobileWarning={false}
              showTooltip={true}
              displayOverlayContent={true}
              overlayContent={
                <div className="text-white font-semibold text-lg bg-black/40 px-3 py-1 rounded-md absolute bottom-3 left-3">
                  Sweets
                </div>
              }
            />

          </div>
        </div>
      </section>

      {/* CITY VOTING */}
      <CityVoting />

      {/* WHY CHOOSE SECTION */}
      <section className="py-20 bg-offWhite">
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold text-primary mb-14 text-center"
          >
            Why Choose GrihGO?
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                icon: <MdRestaurant className="text-6xl text-primary" />,
                title: "Local Restaurants",
                desc: "Support local businesses and discover hidden gems.",
              },
              {
                icon: <BiSolidFoodMenu className="text-6xl text-primary" />,
                title: "Zero Hidden Charges",
                desc: "No platform fees. No surprises.",
              },
              {
                icon: <IoLocationSharp className="text-6xl text-primary" />,
                title: "Fast Delivery",
                desc: "Quick service from your nearest outlets.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05, y: -8 }}
                className="bg-softGreen/20 p-8 rounded-2xl shadow-lg text-center border border-sage"
              >
                <div className="flex justify-center mb-6">{item.icon}</div>
                <h3 className="text-2xl font-bold mb-2 text-primary">
                  {item.title}
                </h3>
                <p className="text-primary/80">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TOP CATEGORIES WITH TILTED CARDS */}
  
      {/* POPUP */}
      <AppPopup isOpen={showAppPopup} onClose={() => setShowAppPopup(false)} />

    </div>
  );
};

export default Home;
