import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { href: '#home', label: 'Inicio' },
    { href: '#about', label: 'Nosotros' },
    { href: '#destinations', label: 'Destinos' },
    { href: '#contact', label: 'Contáctanos' },
  ];

  return (
    <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-[#2E5A4E] shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          <a href="#home" className="text-white text-2xl font-bold">Go<span className="text-[#F8BABA]">Tours</span></a>
          
          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map(link => (
              <a key={link.href} href={link.href} className="text-white hover:text-[#F8BABA] transition-colors">{link.label}</a>
            ))}
            <div className="flex items-center space-x-4">
              <button className="text-white hover:text-[#F8BABA]"><i className="fas fa-search"></i></button>
              <button className="text-white hover:text-[#F8BABA]"><i className="far fa-user"></i></button>
              <button className="text-white hover:text-[#F8BABA]"><i className="far fa-heart"></i></button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white focus:outline-none">
              <i className="fas fa-bars fa-lg"></i>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 bg-[#2E5A4E] rounded-lg p-4">
            {navLinks.map(link => (
              <a key={link.href} href={link.href} onClick={() => setIsMenuOpen(false)} className="block text-white py-2 hover:text-[#F8BABA]">{link.label}</a>
            ))}
             <div className="flex items-center space-x-4 mt-4 pt-4 border-t border-white/20">
              <button className="text-white hover:text-[#F8BABA]"><i className="fas fa-search"></i></button>
              <button className="text-white hover:text-[#F8BABA]"><i className="far fa-user"></i></button>
              <button className="text-white hover:text-[#F8BABA]"><i className="far fa-heart"></i></button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;