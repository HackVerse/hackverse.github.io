import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { IconBrandFacebook, IconBrandInstagram, IconBrandLinkedin, IconBrandTwitter } from '@tabler/icons-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 768);

  useEffect(() => {
    const handleResize = () => setIsLargeScreen(window.innerWidth >= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleScroll = (id) => {
    if (id === 'home' || id === 'gallery' || id === 'team') {
      navigate(`/${id === 'home' ? '' : id}`);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      if (window.location.pathname !== '/') {
        navigate(`/#${id}`);
      } else {
        const element = document.getElementById(id);
        if (element) {
          const offset = 64;
          const bodyRect = document.body.getBoundingClientRect().top;
          const elementRect = element.getBoundingClientRect().top;
          const elementPosition = elementRect - bodyRect;
          const offsetPosition = elementPosition - offset - parseFloat(getComputedStyle(document.documentElement).fontSize) * 4;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth',
          });
        }
      }
    }
    setIsOpen(false);
  };

  const toggleMenu = () => setIsOpen(!isOpen);

  const navList = (
    <ul className="mx-5 mt-4 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <li className="p-1 font-normal hover:text-red-900">
        {isLargeScreen ? (
          <Link to="/" onClick={() => handleScroll('home')} className="flex items-center">HOME</Link>
        ) : (
          <a href="#home" onClick={() => handleScroll('home')} className="flex items-center">HOME</a>
        )}
      </li>
      <li className="p-1 font-normal hover:text-red-900">
        {isLargeScreen ? (
          <Link to="/#about" onClick={() => handleScroll('about')} className="flex items-center">ABOUT</Link>
        ) : (
          <a href="#about" onClick={() => handleScroll('about')} className="flex items-center">ABOUT</a>
        )}
      </li>
      <li className="p-1 font-normal hover:text-red-900">
        {isLargeScreen ? (
          <Link to="/#prizes" onClick={() => handleScroll('prizes')} className="flex items-center">PRIZES</Link>
        ) : (
          <a href="#prizes" onClick={() => handleScroll('prizes')} className="flex items-center">PRIZES</a>
        )}
      </li>
      <li className="p-1 font-normal hover:text-red-900">
        {isLargeScreen ? (
          <Link to="/#speakers-judges" onClick={() => handleScroll('speakers-judges')} className="flex items-center">JUDGES & SPEAKERS</Link>
        ) : (
          <a href="#speakers-judges" onClick={() => handleScroll('speakers-judges')} className="flex items-center">JUDGES & SPEAKERS</a>
        )}
      </li>
      <li className="p-1 font-normal hover:text-red-900">
        {isLargeScreen ? (
          <Link to="/#tracks" onClick={() => handleScroll('tracks')} className="flex items-center">TRACKS</Link>
        ) : (
          <a href="#tracks" onClick={() => handleScroll('tracks')} className="flex items-center">TRACKS</a>
        )}
      </li>
      <li className="p-1 font-normal hover:text-red-900">
        {isLargeScreen ? (
          <Link to="/#timeline" onClick={() => handleScroll('timeline')} className="flex items-center">TIMELINE</Link>
        ) : (
          <a href="#timeline" onClick={() => handleScroll('timeline')} className="flex items-center">TIMELINE</a>
        )}
      </li>
      <li className="p-1 font-normal hover:text-red-900">
        {isLargeScreen ? (
          <Link to="/#sponsors" onClick={() => handleScroll('sponsors')} className="flex items-center">SPONSORS</Link>
        ) : (
          <a href="#sponsors" onClick={() => handleScroll('sponsors')} className="flex items-center">SPONSORS</a>
        )}
      </li>
      <li className="p-1 font-normal hover:text-red-900">
        {isLargeScreen ? (
          <Link to="/#faq" onClick={() => handleScroll('faq')} className="flex items-center">FAQS</Link>
        ) : (
          <a href="#faq" onClick={() => handleScroll('faq')} className="flex items-center">FAQS</a>
        )}
      </li>
      <li className="p-1 font-normal hover:text-red-900 ">
        <Link to="/gallery" onClick={() => handleScroll('gallery')} className="flex items-center">GALLERY</Link>
      </li>
      <li className="p-1 font-normal hover:text-red-900">
        <Link to="/team" onClick={() => handleScroll('team')} className="flex items-center">TEAM</Link>
      </li>
      <div className="flex items-center gap-4 p-1 md:hidden">
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
          <IconBrandLinkedin strokeWidth={1.2} className="hover:text-red-900" />
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <IconBrandInstagram strokeWidth={1.2} className="hover:text-red-900" />
        </a>
        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
          <IconBrandTwitter strokeWidth={1.2} className="hover:text-red-900" />
        </a>
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <IconBrandFacebook strokeWidth={1.2} className="hover:text-red-900" />
        </a>
      </div>
    </ul>
  );

  return (
    <nav className="fixed bg-black border-black bg-opacity-100 backdrop-blur-xl top-0 z-50 h-max w-full rounded-none px-4 py-2 lg:px-8 lg:py-4 shadow-md shadow-[#7b181da5]">
      <div className="flex justify-between items-center text-white">
        <a href="/" className="text-2xl font-bold">
          <img src="/logo.png" alt="Logo" className="h-10 w-auto ml-5" />
        </a>
        <div className="hidden lg:block">{navList}</div>
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            {isOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" className="h-6 w-6" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-black text-white"
          >
            {navList}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
