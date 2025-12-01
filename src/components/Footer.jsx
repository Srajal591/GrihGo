import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import { IoLogoYoutube } from 'react-icons/io5';

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-14">
        {/* Top area: logo + columns */}
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-8 items-start">

          {/* Large logo (left) */}
          <div className="lg:col-span-2">
            <div className="flex items-start">
              <div className="text-4xl lg:text-5xl font-extrabold tracking-tight leading-none">
                <span className="block">GrihGO</span>
              </div>
            </div>

            <p className="mt-6 text-gray-400 max-w-sm">
              Bihar ka apna food delivery app
            </p>
          </div>

          {/* Link columns */}
          <div className="lg:col-span-4 grid grid-cols-2 md:grid-cols-4 gap-6">
            <div>
              <h4 className="text-white font-semibold mb-4">Eternal</h4>
              <ul className="space-y-3 text-gray-400">
                <li><Link to="/" className="hover:text-white transition">GrihGO</Link></li>
                <li><a href="#" className="hover:text-white transition">Blinkit</a></li>
                <li><a href="#" className="hover:text-white transition">District</a></li>
                <li><a href="#" className="hover:text-white transition">Hyperpure</a></li>
                <li><a href="#" className="hover:text-white transition">Feeding India</a></li>
                <li><a href="#" className="hover:text-white transition">Investor Relations</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">For Restaurants</h4>
              <ul className="space-y-3 text-gray-400">
                <li><Link to="/partner" className="hover:text-white transition">Partner With Us</Link></li>
                <li><a href="#" className="hover:text-white transition">Apps For You</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">For Delivery Partners</h4>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#" className="hover:text-white transition">Partner With Us</a></li>
                <li><a href="#" className="hover:text-white transition">Apps For You</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Learn More</h4>
              <ul className="space-y-3 text-gray-400">
                <li><Link to="/privacy" className="hover:text-white transition">Privacy</Link></li>
                <li><Link to="/security" className="hover:text-white transition">Security</Link></li>
                <li><Link to="/terms" className="hover:text-white transition">Terms of Service</Link></li>
                <li><Link to="/help" className="hover:text-white transition">Help & Support</Link></li>
                <li><a href="#" className="hover:text-white transition">Report a Fraud</a></li>
                <li><Link to="/blog" className="hover:text-white transition">Blog</Link></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Social + app badges area */}
        <div className="mt-10 border-t border-gray-800 pt-8 flex flex-col lg:flex-row items-start justify-between gap-6">
          {/* Left: social icons */}
          <div className="flex items-center gap-3">
            <div className="mr-4 text-sm text-gray-400 hidden sm:block">Social Links</div>

            <div className="flex gap-3">
              {/* Circle icon style: subtle border, white icon inside */}
              <a aria-label="LinkedIn" href="#" className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-white hover:border-white transition">
                <FaLinkedinIn />
              </a>
              <a aria-label="Instagram" href="#" className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-white hover:border-white transition">
                <FaInstagram />
              </a>
              <a aria-label="YouTube" href="#" className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-white hover:border-white transition">
                <IoLogoYoutube />
              </a>
              <a aria-label="Facebook" href="#" className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-white hover:border-white transition">
                <FaFacebookF />
              </a>
              <a aria-label="X / Twitter" href="#" className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-white hover:border-white transition">
                <FaTwitter />
              </a>
            </div>
          </div>

          {/* Right: app badges */}
          <div className="flex gap-4 items-center">
            {/* white-outline badge style */}
            <button className="flex items-center border border-gray-700 rounded-md px-3 py-2 hover:border-white transition">
              <img src="https://b.zmtcdn.com/data/o2_assets/aad864bd17860b27634fe621001c32db1739350431.png" alt="App Store" className="h-10" />
            </button>
            <button className="flex items-center border border-gray-700 rounded-md px-3 py-2 hover:border-white transition">
              <img src="https://b.zmtcdn.com/data/o2_assets/df6464de32f4a09262cee301f65aaa661739351256.png" alt="Google Play" className="h-10" />
            </button>
          </div>
        </div>

        {/* Footer small text */}
        <div className="mt-8 border-t border-gray-800 pt-6">
          <p className="text-xs text-gray-500 max-w-4xl">
            By continuing past this page, you agree to our Terms of Service, Cookie Policy,
            Privacy Policy and Content Policies. All trademarks are properties of their
            respective owners.
          </p>

          <div className="mt-6 text-sm text-gray-500">
            © {new Date().getFullYear()} GrihGO™ Ltd. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
