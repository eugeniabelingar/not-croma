import React from 'react';
import { Link } from 'react-router-dom';
import { PAINTINGS } from '../constants';
import ProductCard from '../components/ProductCard';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

const Home = () => {
  const featuredPaintings = PAINTINGS.slice(0, 3);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden px-6">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?auto=format&fit=crop&q=80&w=2000"
            alt="Hero Art"
            className="w-full h-full object-cover opacity-20"
            referrerPolicy="no-referrer"
          />
        </div>
        
        <div className="relative z-10 text-center max-w-4xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-[10px] uppercase tracking-[0.4em] mb-6 font-medium"
          >
            Curaduría Exclusiva
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-6xl md:text-8xl font-serif mb-12 leading-tight"
          >
            Tu espacio. <br /> Tu identidad. <br /> <span className="italic text-luxury-accent">Tu obra.</span>
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <Link
              to="/coleccion"
              className="inline-flex items-center space-x-4 border border-luxury-ink px-10 py-4 text-xs uppercase tracking-widest hover:bg-luxury-ink hover:text-luxury-bg transition-colors duration-500 rounded-full"
            >
              <span>Explorar Colección</span>
              <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Featured Section */}
      <section className="max-w-7xl mx-auto px-6 py-32">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-xl">
            <h2 className="text-4xl font-serif mb-6">Obras Destacadas</h2>
            <p className="text-sm font-light leading-relaxed text-luxury-ink/70">
              Una selección meticulosa de piezas contemporáneas que desafían la percepción y celebran la maestría técnica. Cada obra es una ventana a una nueva realidad.
            </p>
          </div>
          <Link to="/coleccion" className="text-xs uppercase tracking-widest luxury-link pb-1">
            Ver todo
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {featuredPaintings.map(painting => (
            <ProductCard key={painting.id} painting={painting} hoverScale={true} showPrice={false} />
          ))}
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="bg-white py-32 border-y border-luxury-ink/5">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-serif italic mb-12">"El arte no reproduce lo visible, sino que hace visible lo que no siempre lo es."</h2>
          <div className="w-12 h-px bg-luxury-ink/20 mx-auto mb-12" />
          <p className="text-sm font-light tracking-wide uppercase text-luxury-ink/60"><span className="lowercase">not</span> croma — Est. 2024</p>
        </div>
      </section>
    </div>
  );
};

export default Home;
