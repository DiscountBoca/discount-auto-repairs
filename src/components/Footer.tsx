import { useState } from 'react';
import { Facebook, Twitter, Instagram, Youtube, Wrench, ArrowRight } from 'lucide-react';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setSubscribed(true);
    setEmail('');
    
    // Reset after 5 seconds
    setTimeout(() => {
      setSubscribed(false);
    }, 5000);
  };

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center mb-6">
              <Wrench className="h-8 w-8 text-red-500 mr-2" />
              <h2 className="text-xl font-bold">
                <span className="text-red-500">Discount</span> Auto Repair
              </h2>
            </div>
            <p className="text-gray-400 mb-6">
              Quality auto repair and tire services at affordable prices in Boca Raton, Florida.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition" aria-label="Facebook">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition" aria-label="Twitter">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition" aria-label="Instagram">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition" aria-label="YouTube">
                <Youtube className="h-6 w-6" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6 border-b border-gray-700 pb-2">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="text-gray-400 hover:text-white transition">Home</a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-white transition">Services</a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-white transition">About Us</a>
              </li>
              <li>
                <a href="#testimonials" className="text-gray-400 hover:text-white transition">Testimonials</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white transition">Contact</a>
              </li>
              <li>
                <a href="#blog" className="text-gray-400 hover:text-white transition">Blog</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6 border-b border-gray-700 pb-2">Contact Info</h3>
            <ul className="space-y-3">
              <li className="text-gray-400">
                5101 N Federal Hwy<br />
                Boca Raton, FL 33487
              </li>
              <li>
                <a href="tel:+1561466298" className="text-gray-400 hover:text-white transition">(561) 466-2984</a>
              </li>
              <li>
                <a href="mailto:info@discountautorepairboca.com" className="text-gray-400 hover:text-white transition">info@discountautorepairboca.com</a>
              </li>
              <li className="text-gray-400">
                Mon-Sat: 8AM-6PM<br />
                Sun & Holidays : Closed
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6 border-b border-gray-700 pb-2">Newsletter</h3>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter for tips, special offers, and updates.
            </p>
            
            {subscribed ? (
              <div className="bg-green-900/50 border border-green-800 text-green-100 px-4 py-3 rounded mb-4">
                Thanks for subscribing!
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="mb-4">
                <div className="flex">
                  <input 
                    type="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email address" 
                    className="flex-grow px-3 py-2 bg-gray-800 border border-gray-700 rounded-l-md focus:outline-none focus:ring-1 focus:ring-red-500 focus:border-transparent transition"
                    required
                  />
                  <button 
                    type="submit" 
                    className="bg-red-600 text-white px-3 py-2 rounded-r-md hover:bg-red-700 transition"
                    aria-label="Subscribe"
                  >
                    <ArrowRight className="h-5 w-5" />
                  </button>
                </div>
              </form>
            )}
            
            <p className="text-gray-500 text-sm">
              We respect your privacy. No spam, ever.
            </p>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              &copy; 2025 Discount Auto Repair & Tires of Boca Raton. All rights reserved.
            </p>
            <div className="flex space-x-4 text-sm text-gray-500">
              <a href="#" className="hover:text-white transition">Privacy Policy</a>
              <span>|</span>
              <a href="#" className="hover:text-white transition">Terms of Service</a>
              <span>|</span>
              <a href="#" className="hover:text-white transition">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;