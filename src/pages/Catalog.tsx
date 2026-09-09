import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { PAINTINGS, ARTISTS } from '../constants';
import ProductCard from '../components/ProductCard';
import { motion } from 'motion/react';
import { ArrowLeft } from 'lucide-react';

const Catalog = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get('categoria') || 'Todos';
  const initialArtist = searchParams.get('artista') || null;

  const [activeCategory, setActiveCategory] = useState(initialCategory);
  const [selectedArtist, setSelectedArtist] = useState<string | null>(initialArtist);

  useEffect(() => {
    const cat = searchParams.get('categoria');
    const art = searchParams.get('artista');
    if (cat) {
      setActiveCategory(cat);
    }
    setSelectedArtist(art || null);
  }, [searchParams]);

  // Order categories cleanly: Todos, Abstracto, Florales, Artistas
  const categories = ['Todos', 'Abstracto', 'Florales', 'Artistas'];

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    setSelectedArtist(null);
    if (category === 'Todos') {
      searchParams.delete('categoria');
      searchParams.delete('artista');
      setSearchParams(searchParams);
    } else {
      setSearchParams({ categoria: category });
    }
  };

  const handleSelectArtist = (artistName: string | null) => {
    setSelectedArtist(artistName);
    if (artistName) {
      setSearchParams({ categoria: 'Artistas', artista: artistName });
    } else {
      setSearchParams({ categoria: 'Artistas' });
    }
  };

  const filteredPaintings = PAINTINGS.filter(p => {
    if (activeCategory === 'Todos') return true;
    if (activeCategory === 'Artistas') {
      const isArtist = p.category === 'Artistas' || p.isSigned;
      if (!isArtist) return false;
      if (selectedArtist) {
        return p.artist.toLowerCase() === selectedArtist.toLowerCase();
      }
      return true;
    }
    return p.category === activeCategory;
  });

  const currentArtist = ARTISTS.find(
    a => a.name.toLowerCase() === (selectedArtist || '').toLowerCase()
  );

  return (
    <div className="pt-32 pb-32 px-6 max-w-7xl mx-auto">
      <header className="mb-16">
        <h1 className="text-5xl font-serif mb-8">Colección Completa</h1>
        
        {/* Category Filter */}
        <div className="flex flex-wrap gap-8 border-b border-luxury-ink/10 pb-6">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => handleCategoryChange(category)}
              className={`text-[10px] uppercase tracking-[0.3em] transition-colors duration-300 relative py-1 ${
                activeCategory === category 
                  ? 'text-luxury-ink font-bold' 
                  : 'text-luxury-ink/40 hover:text-luxury-ink'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Subcategoría / Explicación Artistas (cuando no hay un artista específico seleccionado) */}
        {activeCategory === 'Artistas' && !selectedArtist && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-6 p-6 rounded-2xl bg-[#FAF9F7] border border-luxury-ink/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
          >
            <div className="space-y-1">
              <p className="text-xs uppercase tracking-[0.2em] font-bold text-luxury-ink">
                OBRAS FIRMADAS POR ARTISTAS
              </p>
              <p className="text-xs font-light text-luxury-ink/70 leading-relaxed">
                Piezas exclusivas firmadas por artistas previamente curados y convocados.
              </p>
            </div>
          </motion.div>
        )}
      </header>

      {/* Vista de Artistas cuando NO hay artista seleccionado */}
      {activeCategory === 'Artistas' && !selectedArtist ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-20">
          {ARTISTS.map(artist => (
            <motion.div
              key={artist.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              onClick={() => handleSelectArtist(artist.name)}
              className="group cursor-pointer block"
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-luxury-ink/5">
                <img
                  src={artist.avatarUrl}
                  alt={artist.name}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
              </div>
              <div className="mt-6 space-y-1">
                <div className="flex items-center justify-between gap-2">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-luxury-ink/50 font-medium">
                    {artist.name}
                  </p>
                  <span className="text-[8px] uppercase tracking-[0.15em] font-semibold text-luxury-ink px-2.5 py-0.5 bg-luxury-ink/5 rounded-full border border-luxury-ink/10">
                    OBRA FIRMADA
                  </span>
                </div>
                <h3 className="text-lg font-highlight tracking-wide uppercase text-luxury-ink group-hover:opacity-75 transition-opacity">
                  {artist.name}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      ) : (
        /* Vista de obras (cuando hay artista seleccionado o en otras categorías) */
        <div>
          {activeCategory === 'Artistas' && selectedArtist && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-14"
            >
              <button
                onClick={() => handleSelectArtist(null)}
                className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.25em] text-luxury-ink/60 hover:text-luxury-ink transition-colors mb-6 font-medium"
              >
                <ArrowLeft size={14} /> Volver a Artistas
              </button>

              <div className="p-6 md:p-8 rounded-2xl bg-[#FAF9F7] border border-luxury-ink/10 flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                  <div className="flex items-center gap-3 mb-2 flex-wrap">
                    <span className="text-[10px] uppercase tracking-[0.25em] text-luxury-ink/50 font-medium">
                      Obras del Artista
                    </span>
                    <span className="text-[8px] uppercase tracking-[0.15em] font-semibold text-luxury-ink px-2.5 py-0.5 bg-luxury-ink/5 rounded-full border border-luxury-ink/10">
                      OBRA FIRMADA
                    </span>
                  </div>
                  <h2 className="text-3xl font-serif text-luxury-ink uppercase">
                    {currentArtist?.name || selectedArtist}
                  </h2>
                  {currentArtist?.bio && (
                    <p className="text-xs md:text-sm font-light text-luxury-ink/70 max-w-2xl mt-2 leading-relaxed">
                      {currentArtist.bio}
                    </p>
                  )}
                </div>
                <div className="shrink-0 text-xs text-luxury-ink/50 uppercase tracking-widest font-light">
                  {filteredPaintings.length} {filteredPaintings.length === 1 ? 'obra disponible' : 'obras disponibles'}
                </div>
              </div>
            </motion.div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-20">
            {filteredPaintings.map(painting => (
              <ProductCard key={painting.id} painting={painting} />
            ))}
          </div>

          {filteredPaintings.length === 0 && (
            <div className="py-20 text-center">
              <p className="font-light text-luxury-ink/50">No se encontraron obras en esta categoría.</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Catalog;
