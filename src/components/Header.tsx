import { useState } from 'react';
import { Menu, X, Phone, Wrench } from 'lucide-react';

interface HeaderProps {
  isScrolled: boolean;
}

const Header = ({ isScrolled }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Wrench className="h-8 w-8 text-red-600 mr-2" />
            <h1 className={`font-bold text-xl md:text-2xl ${isScrolled ? 'text-gray-900' : 'text-white'}`}>
              <span className="text-red-600">Discount</span> Auto Repair & Tires
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#home" className={`font-medium hover:text-red-600 transition ${isScrolled ? 'text-gray-800' : 'text-white'}`}>Home</a>
            <a href="#services" className={`font-medium hover:text-red-600 transition ${isScrolled ? 'text-gray-800' : 'text-white'}`}>Services</a>
            <a href="#about" className={`font-medium hover:text-red-600 transition ${isScrolled ? 'text-gray-800' : 'text-white'}`}>About</a>
            <a href="#testimonials" className={`font-medium hover:text-red-600 transition ${isScrolled ? 'text-gray-800' : 'text-white'}`}>Testimonials</a>
            <a href="#contact" className={`font-medium hover:text-red-600 transition ${isScrolled ? 'text-gray-800' : 'text-white'}`}>Contact</a>
            <a href="#contact" className="bg-red-600 text-white font-medium px-4 py-2 rounded hover:bg-red-700 transition flex items-center">
              <Phone className="w-4 h-4 mr-2" />
              Book Now
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-red-600" 
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="container mx-auto px-4 py-3">
            <nav className="flex flex-col space-y-4">
              <a href="#home" className="font-medium text-gray-800 hover:text-red-600 transition" onClick={toggleMenu}>Home</a>
              <a href="#services" className="font-medium text-gray-800 hover:text-red-600 transition" onClick={toggleMenu}>Services</a>
              <a href="#about" className="font-medium text-gray-800 hover:text-red-600 transition" onClick={toggleMenu}>About</a>
              <a href="#testimonials" className="font-medium text-gray-800 hover:text-red-600 transition" onClick={toggleMenu}>Testimonials</a>
              <a href="#contact" className="font-medium text-gray-800 hover:text-red-600 transition" onClick={toggleMenu}>Contact</a>
              <a 
                href="#contact" 
                className="bg-red-600 text-white font-medium px-4 py-2 rounded hover:bg-red-700 transition text-center flex items-center justify-center"
                onClick={toggleMenu}
              >
                <Phone className="w-4 h-4 mr-2" />
                Book Now
              </a>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;