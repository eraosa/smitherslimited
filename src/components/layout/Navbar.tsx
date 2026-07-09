import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Phone, Mail } from 'lucide-react';

const serviceLinks = [
  { to: '/services/oil-gas', label: 'Oil & Gas Services' },
  { to: '/services/construction', label: 'Construction Services' },
  { to: '/services/marine', label: 'Marine Services' },
];

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About Us' },
  { to: '/services', label: 'Services', children: serviceLinks },
  { to: '/achievements', label: 'Achievements' },
  { to: '/certifications', label: 'Certifications' },
  { to: '/clients', label: 'Clients' },
  { to: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const location = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
    setMobileServicesOpen(false);
  }, [location]);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  const isActive = (to: string) => {
    if (to === '/') return location.pathname === '/';
    return location.pathname.startsWith(to);
  };

  const isHome = location.pathname === '/';
  const solidBg = scrolled || !isHome;

  return (
    <>
      {/* Top bar */}
      <div className={`hidden lg:flex bg-green-900 text-white text-xs transition-all duration-300 ${solidBg ? 'py-1.5' : 'py-2'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center w-full">
          <div className="flex items-center gap-6">
            <a href="tel:+2348038352745" className="flex items-center gap-1.5 hover:text-amber-400 transition-colors">
              <Phone size={12} />
              <span>+234 803 835 2745</span>
            </a>
            <a href="mailto:info@smitherslimited.com" className="flex items-center gap-1.5 hover:text-amber-400 transition-colors">
              <Mail size={12} />
              <span>info@smitherslimited.com</span>
            </a>
          </div>
          <div className="flex items-center gap-4 text-gray-400">
            <span>RC: 618843</span>
            <span className="w-px h-3 bg-green-700" />
            <span>26 Aggrey Road, Port Harcourt | 25 School Close, Eastville, Bristol</span>
          </div>
        </div>
      </div>

      {/* Main navbar */}
      <nav className={`fixed w-full z-50 transition-all duration-400 ${solidBg
          ? 'bg-white shadow-lg top-0'
          : 'bg-transparent top-0 lg:top-9'
        }`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className={`flex items-center justify-between transition-all duration-300 ${solidBg ? 'py-3' : 'py-4'}`}>
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <img
                src="/smithers_limited_logo.png"
                alt="Smithers Limited Logo"
                className={`transition-all duration-300 object-contain ${solidBg ? 'h-12' : 'h-14'}`}
              />
            </Link>

            {/* Desktop nav */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) =>
                link.children ? (
                  <div
                    key={link.to}
                    className="relative"
                    ref={dropdownRef}
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                  >
                    <button
                      onClick={() => setServicesOpen(!servicesOpen)}
                      className={`nav-link flex items-center gap-1 ${solidBg
                          ? isActive(link.to) ? 'text-green-800 font-semibold' : 'text-gray-700 hover:text-green-800'
                          : isActive(link.to) ? 'text-amber-400 font-semibold' : 'text-white hover:text-amber-400'
                        }`}
                    >
                      {link.label}
                      <ChevronDown size={14} className={`transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`} />
                    </button>

                    {/* Transparent bridge to cover the mt-2 gap */}
                    <div className="absolute top-full left-0 right-0 h-2" />

                    {/* Dropdown */}
                    <div
                      className={`absolute top-full left-1/2 -translate-x-1/2 mt-2 w-56 bg-white rounded shadow-xl border border-gray-100 overflow-hidden transition-all duration-200 ${servicesOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-2 pointer-events-none'
                        }`}
                    >
                      <Link
                        to="/services"
                        className="block px-5 py-3 text-sm text-gray-700 hover:bg-green-50 hover:text-green-800 font-medium border-b border-gray-100"
                      >
                        All Services
                      </Link>
                      {link.children.map((child) => (
                        <Link
                          key={child.to}
                          to={child.to}
                          className="block px-5 py-3 text-sm text-gray-600 hover:bg-green-50 hover:text-green-800"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    key={link.to}
                    to={link.to}
                    className={`nav-link ${solidBg
                        ? isActive(link.to) ? 'text-green-800 font-semibold' : 'text-gray-700 hover:text-green-800'
                        : isActive(link.to) ? 'text-amber-400 font-semibold' : 'text-white hover:text-amber-400'
                      }`}
                  >
                    {link.label}
                  </Link>
                )
              )}

              <Link to="/contact" className="btn-primary text-xs px-6 py-2.5">
                Get In Touch
              </Link>
            </div>

            {/* Mobile toggle */}
            <button
              className={`lg:hidden p-2 rounded transition-colors ${solidBg ? 'text-green-900' : 'text-white'}`}
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`lg:hidden bg-white border-t border-gray-100 shadow-lg overflow-hidden transition-all duration-400 ${mobileOpen ? 'max-h-screen' : 'max-h-0'}`}>
          <div className="px-6 py-4 space-y-1">
            {/* Mobile contact bar */}
            <div className="flex flex-col gap-2 pb-4 border-b border-gray-100 mb-2">
              <a href="tel:+2348038352745" className="flex items-center gap-2 text-sm text-green-800">
                <Phone size={14} /> +234 803 835 2745
              </a>
              <a href="mailto:info@smitherslimited.com" className="flex items-center gap-2 text-sm text-green-800">
                <Mail size={14} /> info@smitherslimited.com
              </a>
            </div>

            {navLinks.map((link) =>
              link.children ? (
                <div key={link.to}>
                  <button
                    onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                    className="flex items-center justify-between w-full py-3 text-gray-700 font-medium text-sm"
                  >
                    {link.label}
                    <ChevronDown size={16} className={`transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`} />
                  </button>
                  <div className={`overflow-hidden transition-all duration-300 ${mobileServicesOpen ? 'max-h-64' : 'max-h-0'}`}>
                    <div className="pl-4 space-y-1 pb-2">
                      <Link to="/services" className="block py-2 text-sm text-green-700 font-medium">All Services</Link>
                      {link.children.map((child) => (
                        <Link key={child.to} to={child.to} className="block py-2 text-sm text-gray-600">
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={link.to}
                  to={link.to}
                  className="block py-3 text-sm font-medium text-gray-700 border-b border-gray-50 last:border-0"
                >
                  {link.label}
                </Link>
              )
            )}

            <div className="pt-3">
              <Link to="/contact" className="btn-primary w-full justify-center text-xs py-3">
                Get In Touch
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
