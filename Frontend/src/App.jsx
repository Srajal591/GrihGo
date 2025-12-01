import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import HowItWorks from './pages/HowItWorks.jsx';
import Restaurants from './pages/Restaurants.jsx';
import PartnerWithUs from './pages/PartnerWithUs.jsx';
import Drivers from './pages/Drivers.jsx';
import Careers from './pages/Careers.jsx';
import Blog from './pages/Blog.jsx';
import Contact from './pages/Contact.jsx';
import Cities from './pages/Cities.jsx';
import PriceTransparency from './pages/PriceTransparency.jsx';
import LocalPride from './pages/LocalPride.jsx';
import SignIn from './pages/SignIn.jsx';
import SignUp from './pages/SignUp.jsx';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/restaurants" element={<Restaurants />} />
          <Route path="/partner" element={<PartnerWithUs />} />
          <Route path="/drivers" element={<Drivers />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cities" element={<Cities />} />
          <Route path="/price-transparency" element={<PriceTransparency />} />
          <Route path="/local-pride" element={<LocalPride />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />

        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
