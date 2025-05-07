import React from 'react';
import { Link } from 'react-router-dom';
import Logo from "/assets/images/logo.svg";
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin,
} from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="flex items-center text-2xl font-bold text-white mb-4">
            <img src={Logo} alt="HamtInfotech Logo" className="h-8 w-8 mr-2" />
              <span>HamtInfotech</span>
            </Link>
            <p className="mb-4 max-w-xs">
            An IT support and solutions company, providing high-quality enterprise solutions, digital transformation, and cybersecurity services for businesses of all sizes. 
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors duration-300">
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors duration-300">
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors duration-300">
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors duration-300">
                <Linkedin size={20} />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-primary-400 transition-colors duration-300">Home</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-primary-400 transition-colors duration-300">About Us</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-primary-400 transition-colors duration-300">Services</Link>
              </li>
              <li>
                <Link to="/portfolio" className="hover:text-primary-400 transition-colors duration-300">Portfolio</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-primary-400 transition-colors duration-300">Contact</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services/web-design" className="hover:text-primary-400 transition-colors duration-300">Web Design</Link>
              </li>
              <li>
                <Link to="/services/branding" className="hover:text-primary-400 transition-colors duration-300">Branding</Link>
              </li>
              <li>
                <Link to="/services/ui-ux" className="hover:text-primary-400 transition-colors duration-300">UI/UX Design</Link>
              </li>
              <li>
                <Link to="/services/development" className="hover:text-primary-400 transition-colors duration-300">Development</Link>
              </li>
              <li>
                <Link to="/services/marketing" className="hover:text-primary-400 transition-colors duration-300">Digital Marketing</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-primary-400 mr-2 mt-1 flex-shrink-0" />
                <span>Level 16, City Tower 2, Sheikh Zayed Road Post Box No. 32665, Dubai – U.A.E</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-primary-400 mr-2 flex-shrink-0" />
                <span>+971 4327 7775</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-primary-400 mr-2 flex-shrink-0" />
                <span>info@hamtinfotech.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p>&copy; {currentYear} HamtInfotech. All rights reserved.</p>
          <div className="mt-4 md:mt-0 flex space-x-8">
            <Link to="/privacy" className="hover:text-primary-400 transition-colors duration-300">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-primary-400 transition-colors duration-300">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;