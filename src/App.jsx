import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import About from './pages/About';
import Horaires from './pages/Horaires';
import Evenements from './pages/Evenements';
import Dons from './pages/Dons';
import Contact from './pages/Contact';
import { FaHardHat } from 'react-icons/fa';

export default function App() {
  return (
    <>
      {/* Construction Banner */}
      <div className="construction-banner">
        <FaHardHat className="icon" />
        Paroisse en construction — Merci pour votre soutien et vos prières !
      </div>

      <ScrollToTop />
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/a-propos" element={<About />} />
          <Route path="/horaires" element={<Horaires />} />
          <Route path="/evenements" element={<Evenements />} />
          <Route path="/dons" element={<Dons />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
}
