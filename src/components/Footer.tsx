import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-luxury-ink text-luxury-bg py-24 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-16">
        <div className="md:col-span-2">
          <Link to="/" className="text-2xl md:text-3xl font-serif tracking-[0.15em] uppercase mb-8 inline-block">
            Allier <span className="font-sans text-xs tracking-[0.3em] font-light block mt-1 text-luxury-bg/70">Art Studio</span>
          </Link>
          <p className="text-sm font-light leading-relaxed max-w-sm text-luxury-bg/60">
            Curaduría de autor para espacios que no se conforman. Seleccionamos piezas únicas que conectan tu mirada con la vanguardia del arte contemporáneo.
            <br /><br />
            <span className="font-bold text-luxury-bg uppercase">TU PARED, TU MANIFIESTO.</span>
          </p>
        </div>
        
        <div>
          <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold mb-8 text-luxury-bg/40">Navegación</h4>
          <ul className="space-y-4">
            <li><Link to="/" className="text-xs uppercase tracking-widest hover:text-luxury-accent transition-colors">Inicio</Link></li>
            <li><Link to="/coleccion" className="text-xs uppercase tracking-widest hover:text-luxury-accent transition-colors">Colección</Link></li>
            <li><Link to="/proyectos" className="text-xs uppercase tracking-widest hover:text-luxury-accent transition-colors">Proyectos</Link></li>
            <li><Link to="/sobre-nosotros" className="text-xs uppercase tracking-widest hover:text-luxury-accent transition-colors">Nosotros</Link></li>
            <li><Link to="/sumate" className="text-xs uppercase tracking-widest hover:text-luxury-accent transition-colors">Contactanos</Link></li>
            <li><Link to="/faq" className="text-xs uppercase tracking-widest hover:text-luxury-accent transition-colors">Preguntas Frecuentes</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold mb-8 text-luxury-bg/40">Contacto</h4>
          <ul className="space-y-4">
            <li className="text-xs uppercase tracking-widest text-luxury-bg/60">Buenos Aires, Argentina</li>
            <li className="text-xs uppercase tracking-widest text-luxury-bg/60">
              <a href="mailto:allierartstudio@gmail.com" className="hover:text-luxury-bg transition-colors">
                allierartstudio@gmail.com
              </a>
            </li>
            <li className="text-xs uppercase tracking-widest text-luxury-bg/60">1127790627</li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-24 pt-8 border-t border-luxury-bg/10 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-[10px] uppercase tracking-widest text-luxury-bg/30">
          © BUENOS AIRES 2026 Allier Art Studio. Todos los derechos reservados.
        </p>
        <div className="flex space-x-8">
          <span className="text-[10px] uppercase tracking-widest text-luxury-bg/30 cursor-pointer hover:text-luxury-bg transition-colors">Privacidad</span>
          <span className="text-[10px] uppercase tracking-widest text-luxury-bg/30 cursor-pointer hover:text-luxury-bg transition-colors">Términos</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
