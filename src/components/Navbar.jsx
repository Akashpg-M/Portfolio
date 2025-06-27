import { useState, useEffect, useCallback } from 'react';
import { useTheme } from '../context/ThemeContext';
import { FaBars, FaTimes, FaSun, FaMoon } from 'react-icons/fa';

const sections = [
  { id: 'home', name: 'Home' },
  { id: 'about', name: 'About' },
  { id: 'technologies', name: 'Skills' },
  { id: 'projects', name: 'Projects' },
  { id: 'contact', name: 'Contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const themeContext = useTheme?.();
  const { isDarkMode, toggleTheme } = themeContext || {
    isDarkMode: false,
    toggleTheme: () => {},
  };

  const handleThemeToggle = useCallback(() => {
    try {
      toggleTheme();
    } catch (error) {
      console.error('Theme toggle error:', error);
    }
  }, [toggleTheme]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 120;
      for (const section of sections) {
        const el = document.getElementById(section.id);
        if (el) {
          const top = el.offsetTop;
          const bottom = top + el.offsetHeight;
          if (scrollPos >= top && scrollPos < bottom) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    // <nav className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-grey shadow-md transition-colors">
    <nav className="fixed top-0 left-0 right-0 z-50 shadow-md transition-colors bg-[var(--light-background)] dark:bg-[var(--dark-background)]">
      <div className="container mx-auto px-4 flex justify-between items-center py-3">
        {/* Logo */}
        <button
          onClick={() => scrollToSection('home')}
          className="text-light-textl font-bold text-light-textight-text dark:text-dark-text"
        >
          Akash M
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-4">
          {sections.map(({ id, name }) => (
            <button
              key={id}
              onClick={() => scrollToSection(id)}
              className={`relative text-sm font-medium px-3 py-2 transition-colors group
                ${
                  activeSection === id
                    ? 'text-blue-700 dark:text-blue-400 font-semibold'
                    : 'text-[var(--light-text-light-textlt)] dark:text-[var(--dark-text-light-textlt)] hover:text-blue-700 dark:hover:text-blue-400'
                }`}
            >
              {name}
              <span
                className={`absolute left-0 -bottom-1 h-[2px] w-full bg-blue-600 dark:bg-blue-400 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left
                  ${activeSection === id ? 'scale-x-100' : ''}`}
              />
            </button>
          ))}

          {/* Theme Toggle */}
          <button
            onClick={handleThemeToggle}
            className="p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-600"
            aria-label="Toggle theme"
          >
            {isDarkMode ? (
              <FaSun className="w-5 h-5 text-yellow-400 hover:text-yellow-300" />
            ) : (
              <FaMoon className="w-5 h-5 text-light-text hover:text-light-textray-900" />
            )}
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center gap-4">
          <button
            onClick={handleThemeToggle}
            className="p-1 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-600"
            aria-label="Toggle theme"
          >
            {isDarkMode ? (
              <FaSun className="w-5 h-5 text-yellow-400 hover:text-yellow-300"/>
            ) : (
              <FaMoon className="w-5 h-5 text-light-text hover:text-light-textray-900"/>
            )}
          </button>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-light-text dark:dark:text-dark-text"
          >
            {isOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2">
          {sections.map(({ id, name }) => (
            <button
              key={id}
              onClick={() => scrollToSection(id)}
              className={`block w-full text-light-texteft px-4 py-2 rounded-md font-medium ${
                activeSection === id
                  ? 'bg-blue-100 dark:bg-blue-800/30 text-blue-700 dark:text-blue-300'
                  : 'text-light-text dark:text-[var(--dark-text-light-textlt)] hover:bg-blue-50 dark:hover:bg-blue-900/20'
              }`}
            >
              {name}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;


