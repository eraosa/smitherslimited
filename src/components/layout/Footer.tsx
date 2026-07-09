import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, ArrowRight, Instagram } from 'lucide-react';

const services = [
  { to: '/services/oil-gas', label: 'Oil & Gas Services' },
  { to: '/services/construction', label: 'Construction Services' },
  { to: '/services/marine', label: 'Marine Services' },
];

const quickLinks = [
  { to: '/about', label: 'About Us' },
  { to: '/achievements', label: 'Key Achievements' },
  { to: '/certifications', label: 'Certifications' },
  { to: '/clients', label: 'Our Clients' },
  { to: '/contact', label: 'Contact Us' },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-green-950 text-white">
      {/* CTA Band */}
      <div className="bg-amber-500">
        <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="text-green-900 font-bold text-xl font-serif">Ready to Work With Us?</h3>
            <p className="text-green-900/80 text-sm mt-1">Partner with Nigeria's trusted indigenous oil servicing company.</p>
          </div>
          <Link to="/contact" className="btn-green shrink-0">
            Start a Conversation <ArrowRight size={16} />
          </Link>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <img src="/smithers_limited_logo.png" alt="Smithers Limited" className="h-14 object-contain mb-5 brightness-200 contrast-75" />
            <p className="text-gray-400 text-sm leading-relaxed">
              A leading indigenous oil servicing, construction, and marine servicing company in Nigeria, delivering excellence across the Niger Delta and beyond.
            </p>
            <p className="text-gray-500 text-xs mt-4">RC: 618843</p>
            <div className="flex items-center gap-3 mt-5">
              <a
                href="https://www.instagram.com/smitherslimited/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Smithers Limited on Instagram"
                className="w-8 h-8 rounded-full bg-green-800 hover:bg-amber-500 flex items-center justify-center transition-colors"
              >
                <Instagram size={14} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold text-sm tracking-wider uppercase mb-5 pb-3 border-b border-green-800">
              Our Services
            </h4>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s.to}>
                  <Link to={s.to} className="flex items-center gap-2 text-gray-400 hover:text-amber-400 text-sm transition-colors group">
                    <ArrowRight size={12} className="text-amber-500 group-hover:translate-x-1 transition-transform" />
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-sm tracking-wider uppercase mb-5 pb-3 border-b border-green-800">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="flex items-center gap-2 text-gray-400 hover:text-amber-400 text-sm transition-colors group">
                    <ArrowRight size={12} className="text-amber-500 group-hover:translate-x-1 transition-transform" />
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold text-sm tracking-wider uppercase mb-5 pb-3 border-b border-green-800">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={14} className="text-amber-400 mt-0.5 shrink-0" />
                <span className="text-gray-400 text-sm">26 Aggrey Road, Port Harcourt, Rivers State, Nigeria</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={14} className="text-amber-400 mt-0.5 shrink-0" />
                <span className="text-gray-400 text-sm">25 School Close, Eastville, Bristol BS5 6EB, United Kingdom</span>
              </li>
              <li>
                <a href="tel:+2348038352745" className="flex items-center gap-3 text-gray-400 hover:text-amber-400 text-sm transition-colors">
                  <Phone size={14} className="text-amber-400 shrink-0" />
                  +234 803 835 2745
                </a>
              </li>
              <li>
                <a href="tel:+2348038246379" className="flex items-center gap-3 text-gray-400 hover:text-amber-400 text-sm transition-colors">
                  <Phone size={14} className="text-amber-400 shrink-0" />
                  +234 803 824 6379
                </a>
              </li>
              <li>
                <a href="tel:+447901150322" className="flex items-center gap-3 text-gray-400 hover:text-amber-400 text-sm transition-colors">
                  <Phone size={14} className="text-amber-400 shrink-0" />
                  +44 790 115 0322 (UK)
                </a>
              </li>
              <li>
                <a href="mailto:info@smitherslimited.com" className="flex items-center gap-3 text-gray-400 hover:text-amber-400 text-sm transition-colors">
                  <Mail size={14} className="text-amber-400 shrink-0" />
                  info@smitherslimited.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Compliance Trust Bar */}
      <div className="border-t border-green-900/60 bg-green-950/50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
            <span className="text-gray-600 text-xs font-medium uppercase tracking-wider">Regulatory Standing:</span>
            {[
              'NUPRC Compliant',
              'NCDMB Registered',
              'NCEC Certified',
              'NMDPRA Licensed',
              'BPP Listed',
              'SCUML Compliant',
              'NITDA Registered',
              'ITF Compliant',
              'D-U-N-S® Registered',
              'ISO 9001:2015',
            ].map((item, i, arr) => (
              <span key={item} className="flex items-center gap-x-5">
                <span className="text-gray-500 text-xs">{item}</span>
                {i < arr.length - 1 && <span className="text-green-800 text-xs select-none">·</span>}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-green-900">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-gray-500 text-xs">
            &copy; {year} Smithers Limited Oil & Gas Services. All rights reserved.
          </p>
          <p className="text-gray-600 text-xs">
            Founder & Director: Comr. Minabo Asechemie
          </p>
          <p className="text-gray-600 text-xs">
            Designed by{' '}
            <a
              href="https://eraosa.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-amber-400 transition-colors font-medium"
            >
              #eraosaWorks
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
