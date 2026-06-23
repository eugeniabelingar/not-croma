import React from 'react';
import { Link } from 'react-router-dom';
import { PAINTINGS } from '../constants';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import FeaturedCarousel from '../components/FeaturedCarousel';
import TextType from '../components/TextType';
import heroImage from '../hero_1.jpg';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden px-6">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt="Hero Art"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        
        <div className="relative z-10 text-center max-w-4xl text-white">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-[10px] uppercase tracking-[0.4em] mb-6 font-medium text-white/80"
          >
            Curaduría Exclusiva
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-6xl md:text-8xl font-black mb-12 leading-tight min-h-[1.2em]"
          >
            <TextType
              text={['Tu obra.', 'Tu espacio.', 'Tu identidad.']}
              typingSpeed={80}
              deletingSpeed={50}
              pauseDuration={2000}
              cursorCharacter="|"
              cursorClassName="text-luxury-accent font-light"
              className=""
            />
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <Link
              to="/coleccion"
              className="inline-flex items-center space-x-4 border border-white px-10 py-4 text-xs uppercase tracking-widest hover:bg-white hover:text-luxury-ink transition-colors duration-500 rounded-full outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2"
            >
              <span>Explorar Colección</span>
              <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Featured Section */}
      <section className="py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 mb-20">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8">
            <div className="max-w-xl">
              <h2 className="text-4xl mb-6">Obras Destacadas</h2>
              <p className="text-sm font-light leading-relaxed text-luxury-ink/70">
                Elegimos arte contemporáneo que te desafía y celebra el talento real. Cada obra es una invitación a ver el mundo con otros ojos, pensada para acompañar tu forma de sentir tu casa y habitar tus espacios.
              </p>
            </div>
            <Link to="/coleccion" className="text-xs uppercase tracking-widest luxury-link pb-1 outline-none focus-visible:ring-2 focus-visible:ring-luxury-ink focus-visible:ring-offset-2">
              Ver todo
            </Link>
          </div>
        </div>

        <FeaturedCarousel paintings={PAINTINGS} />
      </section>

      {/* Philosophy Section */}
      <section className="bg-white py-32 border-y border-luxury-ink/5">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-6xl mb-12">TU ESPACIO. TU IDENTIDAD</h2>
          <div className="w-12 h-px bg-luxury-ink/20 mx-auto mb-12" />
          <p className="text-sm font-light tracking-wide uppercase text-luxury-ink/60"><span className="lowercase">not</span> croma — Est. 2024</p>
        </div>
      </section>
    </div>
  );
};

export default Home;
