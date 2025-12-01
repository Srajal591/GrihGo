import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiSmartphone } from 'react-icons/fi';
import { AiFillApple, AiFillAndroid } from 'react-icons/ai';

const AppPopup = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 z-[9998] backdrop-blur-sm flex items-center justify-center"
          />

          {/* Popup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[9999] w-[90%] max-w-md"
          >
            <div className="bg-white rounded-3xl shadow-2xl p-8 relative">
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
              >
                <FiX className="text-2xl" />
              </button>

              {/* Content */}
              <div className="text-center">
                <div className="bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <FiSmartphone className="text-4xl text-primary" />
                </div>

                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  App Coming Soon!
                </h2>
                <p className="text-gray-600 mb-8">
                  We're working hard to bring you the best food delivery experience. 
                  Our mobile app will be available soon on both platforms.
                </p>

                <div className="space-y-4">
                  <button className="w-full bg-gray-900 text-white py-4 rounded-xl font-semibold flex items-center justify-center space-x-3 hover:bg-gray-800 transition-colors">
                    <AiFillApple className="text-2xl" />
                    <div className="text-left">
                      <div className="text-xs">Download on the</div>
                      <div className="text-lg font-bold">App Store</div>
                    </div>
                  </button>

                  <button className="w-full bg-primary text-white py-4 rounded-xl font-semibold flex items-center justify-center space-x-3 hover:bg-primaryDark transition-colors">
                    <AiFillAndroid className="text-2xl" />
                    <div className="text-left">
                      <div className="text-xs">Get it on</div>
                      <div className="text-lg font-bold">Google Play</div>
                    </div>
                  </button>
                </div>

                <p className="text-sm text-gray-500 mt-6">
                  Stay tuned for updates!
                </p>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default AppPopup;
