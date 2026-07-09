import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import OilGasServices from './pages/OilGasServices';
import ConstructionServices from './pages/ConstructionServices';
import MarineServices from './pages/MarineServices';
import Achievements from './pages/Achievements';
import Clients from './pages/Clients';
import Contact from './pages/Contact';
import Certifications from './pages/Certifications';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);
  return null;
}

function Layout() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/oil-gas" element={<OilGasServices />} />
        <Route path="/services/construction" element={<ConstructionServices />} />
        <Route path="/services/marine" element={<MarineServices />} />
        <Route path="/achievements" element={<Achievements />} />
        <Route path="/clients" element={<Clients />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/certifications" element={<Certifications />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 pt-20">
      <div className="text-center px-6">
        <div className="text-8xl font-bold text-green-200 mb-4">404</div>
        <h1 className="text-3xl font-bold text-green-900 mb-4">Page Not Found</h1>
        <p className="text-gray-500 mb-8">The page you're looking for doesn't exist.</p>
        <a href="/" className="btn-green">Back to Home</a>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}
