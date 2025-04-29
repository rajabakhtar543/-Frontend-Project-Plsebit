import React, { useState } from 'react';
import { FaTimes, FaBars } from 'react-icons/fa';
import { Link } from 'react-scroll';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navItems = [
    { link: 'Home', path: 'hero' },
    { link: 'About', path: 'about' },
    { link: 'Services', path: 'services' },
    { link: 'Plans', path: 'plans' },
    { link: 'Testimonials', path: 'Clients' },
    { link: 'Contact', path: 'contact' },
  ];

  const handleClick = (path) => {
    const section = document.getElementById(path);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' }); // Smooth scrolling to the section
    }
    closeMenu(); // Close the menu after clicking
  };

  return (
    <nav className="w-full flex bg-black justify-between items-center gap-1 lg:px-16 px-6 py-4 sticky top-0 z-50">
      <h1 className="text-white md:text-[1.7rem] text-[2.3rem] font-bold font-ubuntu">
        Web <span className="text-limegreen italic">Pulse</span>
      </h1>
      <ul className="lg:flex justify-center items-center gap-8 hidden">
        {navItems.map(({ link, path }) => (
          <Link
            key={path}
            className="text-white uppercase font-semibold cursor-pointer p-3 rounded-lg hover:bg-limegreen hover:text-black font-ubuntu text-[15px]"
            to={path}
            spy={true}
            offset={-100}
            smooth={true}
            onClick={closeMenu} // Close menu on link click
          >
            {link}
          </Link>
        ))}
      </ul>
      <div className="lg:hidden flex items-center">
        <button onClick={toggleMenu} className="text-white">
          {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>
      {isMenuOpen && (
        <ul className="absolute top-full left-0 w-full bg-black flex flex-col items-center gap-4 py-4 lg:hidden">
          {navItems.map(({ link, path }) => (
            <li key={path}>
              <Link
                className="text-white uppercase font-semibold cursor-pointer p-3 rounded-lg hover:bg-limegreen hover:text-black font-ubuntu text-[15px]"
                to={path}
                spy={true}
                offset={-100}
                smooth={true}
                onClick={handleClick.bind(null, path)} // Use handleClick here
              >
                {link}
              </Link>
            </li>
          ))}
          <li>
            <button
              onClick={() => handleClick('contact')} // Directly using the path for contact
              className="p-3 bg-limegreen text-white rounded hover:bg-black transition font-ubuntu text-[15px]"
            >
              Contact
            </button>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Header;
