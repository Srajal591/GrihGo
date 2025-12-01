import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX, FiUser } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import PillNav from "./PillNav";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Cities", href: "/cities" },
    { label: "Careers", href: "/careers" },
    { label: "Partner", href: "/partner" },
    { label: "Help", href: "/contact" }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">

        {/* MAIN NAVBAR */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{
            y: 0,
            opacity: 1,
            scale: isScrolled ? 0.97 : 1
          }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className={`
            flex items-center justify-between
            px-8 py-4 rounded-3xl 
            transition-all duration-300
            backdrop-blur-xl
            border border-white/20
            shadow-[0_8px_32px_rgba(0,0,0,0.15)]
            ${isScrolled ? "bg-white/40" : "bg-white/30"}
          `}
        >

          {/* ⭐ HERO.PNG LOGO */}
          <Link to="/" className="flex items-center select-none">
            <motion.img
              src="/hero.png"
              alt="Logo"
              className="w-16 h-16 object-contain drop-shadow-lg"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 200 }}
            />
          </Link>

          {/* ⭐ PILLNAV (DESKTOP) */}
          <div className="hidden lg:block">
            <PillNav
              items={menuItems}
              baseColor="#0FA958"
              pillColor="#ffffff"
              hoveredPillTextColor="#ffffff"
              pillTextColor="#374151"
            />
          </div>

     
<div className="hidden lg:flex items-center space-x-3">

  <Link
    to="/signin"
    className="
      flex items-center space-x-2 px-5 py-2.5
      text-gray-700 rounded-full font-medium text-sm
      hover:text-primary hover:bg-gray-100 transition-all
    "
  >
    <FiUser className="text-lg" />
    <span>Sign In</span>
  </Link>

  <Link
    to="/signup"
    className="
      px-6 py-2.5 rounded-full font-medium text-sm text-white
      bg-gradient-to-r from-primary to-primaryDark
      shadow-lg hover:shadow-xl transition-all
    "
  >
    Sign Up
  </Link>

</div>


          {/* ⭐ MOBILE MENU BUTTON */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="
              lg:hidden text-3xl text-gray-800 
              p-2 rounded-full hover:bg-gray-200 transition-all
            "
          >
            {isMobileMenuOpen ? <FiX /> : <FiMenu />}
          </motion.button>
        </motion.div>
      </div>

      {/* ⭐ MOBILE MENU */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="
              lg:hidden mx-4 mt-2 rounded-2xl shadow-2xl overflow-hidden
              bg-white   /* FIXED: NO GLASS EFFECT */
              border border-gray-200
            "
          >
            <div className="px-4 py-4 space-y-2">
              {menuItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    to={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="
                      block py-3 px-4 
                      text-gray-800 font-medium
                      rounded-xl transition-all
                      hover:bg-gray-100 hover:text-primary
                    "
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}

              {/* ⭐ SIGN IN / SIGN UP — Mobile */}
              <div className="pt-3 space-y-2">
                <button className="
                  w-full py-3 rounded-xl border-2 border-gray-200 
                  text-gray-700 font-medium
                  hover:border-primary hover:text-primary transition-all
                ">
                  Sign In
                </button>

                <button className="
                  w-full py-3 rounded-xl text-white font-medium
                  bg-gradient-to-r from-primary to-primaryDark
                  hover:shadow-lg transition-all
                ">
                  Sign Up
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </nav>
  );
};

export default Navbar;
