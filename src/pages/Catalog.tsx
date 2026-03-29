import React, { useState } from 'react';
import { PAINTINGS } from '../constants';
import ProductCard from '../components/ProductCard';
import { motion } from 'motion/react';

const Catalog = () => {
  const [activeCategory, setActiveCategory] = useState('Todos');
  const categories = ['Todos', 'Abstracto', 'Figurativo'];

  const filteredPaintings = activeCategory === 'Todos' 
    ? PAINTINGS 
    : PAINTINGS.filter(p => p.category === activeCategory);

  return (
    <div className="pt-32 pb-32 px-6 max-w-7xl mx-auto">
      <header className="mb-20">
        <h1 className="text-5xl font-serif mb-8">Colección Completa</h1>
        
        {/* Category Filter */}
        <div className="flex flex-wrap gap-8 border-b border-luxury-ink/10 pb-6">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`text-[10px] uppercase tracking-[0.3em] transition-colors duration-300 ${
                activeCategory === category 
                  ? 'text-luxury-ink font-bold' 
                  : 'text-luxury-ink/40 hover:text-luxury-ink'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-20">
        {filteredPaintings.map(painting => (
          <ProductCard key={painting.id} painting={painting} />
        ))}
      </div>

      {filteredPaintings.length === 0 && (
        <div className="py-20 text-center">
          <p className="font-light text-luxury-ink/50 italic">No se encontraron obras en esta categoría.</p>
        </div>
      )}
    </div>
  );
};

export default Catalog;
