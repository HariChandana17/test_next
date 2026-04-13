import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronRight, MapPin, Mail, Phone } from 'lucide-react';

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Industries', path: '/industries' },
    { name: 'Buy / Sell', path: '/buy-sell' },
    { name: 'Contact Us', path: '/contact' },
  ];

  const isActive = (path: string) => {
    return location.pathname === path || (path !== '/' && location.pathname.startsWith(path));
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 font-sans">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-40">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link to="/" className="flex flex-col">
              <span className="text-2xl font-bold text-blue-900 tracking-tight">V NEXT</span>
              <span className="text-[10px] text-slate-500 tracking-wider uppercase">Professional Services</span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-sm font-medium transition-colors hover:text-blue-600 ${
                    isActive(link.path) ? 'text-blue-900 border-b-2 border-amber-500' : 'text-slate-600'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-slate-700 hover:text-blue-900"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-slate-100 px-4 py-4 space-y-4 shadow-lg absolute w-full left-0 z-50">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`block py-2 text-base font-medium ${
                   isActive(link.path) ? 'text-blue-900 bg-blue-50 px-3 rounded' : 'text-slate-600'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300">
        <div className="container mx-auto px-4 md:px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Brand */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">V NEXT</h3>
              <p className="text-sm leading-relaxed mb-4 text-slate-400">
                Optimizing Accuracy | Empowering People | Driving Growth
              </p>
              <p className="text-xs text-slate-500">
                A team of professionals providing People, Product, and Process Assurance Services.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><Link to="/services" className="hover:text-amber-500 transition-colors">Our Services</Link></li>
                <li><Link to="/industries" className="hover:text-amber-500 transition-colors">Industries</Link></li>
                <li><Link to="/buy-sell" className="hover:text-amber-500 transition-colors">Buy / Sell Inventory</Link></li>
                <li><Link to="/contact" className="hover:text-amber-500 transition-colors">Contact Us</Link></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-white font-semibold mb-4">Contact</h4>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-3">
                  <MapPin size={16} className="mt-1 text-amber-500" />
                  <span>#829, 8th Floor, Manjeera Majestic Commercial<br/>Kukatpally, Hyderabad</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail size={16} className="text-amber-500" />
                  <a href="mailto:vnextassociates@gmail.com" className="hover:text-white">vnextassociates@gmail.com</a>
                </li>
                <li className="flex items-center gap-3">
                  <Phone size={16} className="text-amber-500" />
                  <a href="tel:+918074010081" className="hover:text-white">+91 80740 10081</a>
                </li>
              </ul>
            </div>

            {/* Disclaimer */}
            <div>
              <h4 className="text-white font-semibold mb-4">Disclaimer</h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                The AI assistant on this site provides informational guidance only. 
                All pricing, compliance, and operational decisions are handled exclusively 
                by our human professionals.
              </p>
            </div>
          </div>
          
          <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
            <p>&copy; {new Date().getFullYear()} V NEXT Services. All rights reserved.</p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <span className="cursor-pointer hover:text-white">Privacy Policy</span>
              <span className="cursor-pointer hover:text-white">Terms of Service</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};