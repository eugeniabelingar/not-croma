import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import StaggeredMenu from './StaggeredMenu';

const Navbar = () => {
  const { pathname } = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHome = pathname === '/';
  const useWhiteText = isHome && !isScrolled;

  const navLinks = [
    { label: 'Inicio', link: '/' },
    { label: 'Colección', link: '/coleccion' },
    { label: 'Proyectos', link: '/proyectos' },
    { label: 'Nosotros', link: '/sobre-nosotros' },
    { label: 'CONTACTANOS', link: '/sumate' },
    { label: 'FAQ', link: '/faq' },
  ];

  const socialItems = [
    { label: 'Instagram', link: 'https://instagram.com' },
    { label: 'Pinterest', link: 'https://pinterest.com' },
  ];

  const Logo = (
    <Link to="/" className={`text-xl md:text-2xl font-black tracking-tight uppercase transition-colors duration-300 ${useWhiteText ? 'text-white' : 'text-luxury-ink'} flex flex-col items-start leading-none`}>
      <span>Allier</span>
      <span className="font-light tracking-[0.25em] text-[9px] md:text-[10px] opacity-75 mt-1">Art Studio</span>
    </Link>
  );

  return (
    <StaggeredMenu
      items={navLinks}
      socialItems={socialItems}
      logoComponent={Logo}
      colors={['#E4E3E0', '#141414']}
      accentColor="#141414"
      menuButtonColor={useWhiteText ? '#FFFFFF' : '#141414'}
      openMenuButtonColor="#141414"
      displayItemNumbering={false}
    />
  );
};

export default Navbar;
