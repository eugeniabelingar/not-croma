import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';
import StaggeredMenu from './StaggeredMenu';

const Navbar = () => {
  const { itemCount } = useCart();
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
    { label: 'Nosotros', link: '/sobre-nosotros' },
    { label: 'Súmate a not', link: '/sumate' },
    { label: 'FAQ', link: '/faq' },
  ];

  const socialItems = [
    { label: 'Instagram', link: 'https://instagram.com' },
    { label: 'Pinterest', link: 'https://pinterest.com' },
  ];

  const Logo = (
    <Link to="/" className={`text-2xl font-black tracking-tighter uppercase transition-colors duration-300 ${useWhiteText ? 'text-white' : 'text-luxury-ink'}`}>
      <span className="lowercase">not</span> croma
    </Link>
  );

  const CartIcon = (
    <Link to="/carrito" className={`relative group transition-colors duration-300 ${useWhiteText ? 'text-white' : 'text-luxury-ink'}`}>
      <ShoppingBag size={20} strokeWidth={1.5} />
      {itemCount > 0 && (
        <span className={`absolute -top-2 -right-2 text-luxury-bg text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold transition-colors duration-300 ${useWhiteText ? 'bg-white text-luxury-ink' : 'bg-luxury-ink text-luxury-bg'}`}>
          {itemCount}
        </span>
      )}
    </Link>
  );

  return (
    <StaggeredMenu
      items={navLinks}
      socialItems={socialItems}
      logoComponent={Logo}
      extraHeaderContent={CartIcon}
      colors={['#E4E3E0', '#141414']}
      accentColor="#141414"
      menuButtonColor={useWhiteText ? '#FFFFFF' : '#141414'}
      openMenuButtonColor="#141414"
      displayItemNumbering={false}
    />
  );
};

export default Navbar;
