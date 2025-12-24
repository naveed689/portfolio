import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Disable scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
      { name: 'About', to: 'about' },
    { name: 'Skills', to: 'skills' },
    { name: 'Projects', to: 'projects' },
    { name: 'Contact', to: 'contact' },
  ];

  return (
    <>
      {/* Backdrop Overlay - Below Navbar */}
      {isMobileMenuOpen && (
        <motion.div
          className="fixed bg-black/50 backdrop-blur-sm z-40 md:hidden"
          style={{ top: '80px', left: 0, right: 0, bottom: 0 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/90 backdrop-blur-md shadow-lg'
            : isMobileMenuOpen
            ? 'bg-white shadow-lg'
            : 'bg-transparent'
      }`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo / Name */}
          <Link
            to="home"
            spy={true}
            smooth={true}
            duration={800}
            className="cursor-pointer flex-shrink-0"
            style={{ transform: "translateX(30%)"}}
          >
            <motion.div
              className="text-2xl md:text-3xl font-bold text-gray-900"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Naveed
            </motion.div>
          </Link>

          {/* Desktop Navigation - Centered */}
          <div className="hidden md:flex items-center gap-4 lg:gap-8 absolute left-1/2 transform -translate-x-1/2">
            {navLinks.map((link, index) => (
              <Link
                key={link.to}
                to={link.to}
                spy={true}
                smooth={true}
                duration={800}
                offset={-80}
                activeClass="text-blue-600"
                className="cursor-pointer"
              >
                <motion.div
                  className="px-3 py-2 text-gray-700 font-medium rounded-lg hover:text-blue-600 hover:bg-blue-50 transition-colors duration-200"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.1 * index,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {link.name}
                </motion.div>
              </Link>
            ))}
          </div>

          {/* Resume Button - Desktop */}
          <motion.a
            href="/portfolio/Naveed_resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:block bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200 shadow-md hover:shadow-lg text-sm"
            style={{ padding: '10px 20px' }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Resume
          </motion.a>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden flex flex-col gap-1.5 p-2 flex-shrink-0"
            style={{ marginRight: '8px' }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileTap={{ scale: 0.9 }}
            aria-label="Toggle menu"
          >
            <motion.span
              className="w-6 h-0.5 bg-gray-900 rounded-full"
              animate={isMobileMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3 }}
            />
            <motion.span
              className="w-6 h-0.5 bg-gray-900 rounded-full"
              animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
            <motion.span
              className="w-6 h-0.5 bg-gray-900 rounded-full"
              animate={isMobileMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          className="md:hidden overflow-hidden"
          initial={false}
          animate={isMobileMenuOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="py-4">
            {navLinks.map((link, index) => (
              <div key={link.to} style={{ marginBottom: index < navLinks.length - 1 ? '20px' : '0' }}>
                <Link
                  to={link.to}
                  spy={true}
                  smooth={true}
                  duration={800}
                  offset={-80}
                  activeClass="text-blue-600 bg-blue-50"
                  className="cursor-pointer"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <motion.div
                    className="block px-4 py-3 text-gray-700 font-medium rounded-lg hover:text-blue-600 hover:bg-blue-50 transition-colors duration-200"
                    whileHover={{ x: 10 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {link.name}
                  </motion.div>
                </Link>
              </div>
            ))}
            
            {/* Resume Link - Mobile */}
            <div style={{ marginTop: '32px' }}>
              <motion.a
                href="/portfolio/Naveed_resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200 text-center text-sm"
                style={{ padding: '10px 16px', maxWidth: '150px', margin: '0 auto', marginBottom: '16px' }}
                onClick={() => setIsMobileMenuOpen(false)}
                whileHover={{ x: 10 }}
                whileTap={{ scale: 0.95 }}
              >
                View Resume
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.nav>
    </>
  );
};

export default Navbar;
