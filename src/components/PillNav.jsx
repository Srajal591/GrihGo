import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const PillNav = ({ logo, logoAlt, items, baseColor, pillColor, hoveredPillTextColor, pillTextColor }) => {
  const location = useLocation();
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const currentIndex = items.findIndex(item => item.href === location.pathname);
    if (currentIndex !== -1) {
      setActiveIndex(currentIndex);
    }
  }, [location.pathname, items]);

  return (
    <div className="flex items-center space-x-4 bg-white/90 backdrop-blur-md rounded-full px-4 py-2 shadow-lg">
      {/* Logo */}
      {logo && (
        <Link to="/" className="flex items-center">
          <img 
            src={logo} 
            alt={logoAlt} 
            className="h-12 w-12 object-contain rounded-full"
          />
        </Link>
      )}

      {/* Menu Items */}
      <div className="flex items-center space-x-1 bg-gray-100/50 rounded-full px-2 py-1">
        {items.map((item, index) => {
          const isActive = location.pathname === item.href;
          
          return (
            <Link
              key={index}
              to={item.href}
              onClick={() => setActiveIndex(index)}
              className="relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-full"
              style={{
                color: isActive ? hoveredPillTextColor : pillTextColor,
              }}
            >
              {isActive && (
                <motion.div
                  layoutId="pill"
                  className="absolute inset-0 rounded-full"
                  style={{ backgroundColor: baseColor }}
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <span className="relative z-10">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default PillNav;
