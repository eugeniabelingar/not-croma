import React, { useState } from 'react';
import { motion } from 'motion/react';
import { PROYECTOS } from '../data/proyectos';

const Projects = () => {
  // Mobile tap-to-reveal state for interactive touch
  const [activeMobileId, setActiveMobileId] = useState<string | null>(null);

  const toggleMobileOverlay = (id: string) => {
    setActiveMobileId(prev => (prev === id ? null : id));
  };

  return (
    <div className="pt-32 pb-32 px-6 max-w-7xl mx-auto">
      {/* Cabezal Editorial Minimalista */}
      <header className="mb-16 md:mb-24 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-[10px] uppercase tracking-[0.3em] text-luxury-ink/45 font-medium block mb-3">
            Allier Art Studio
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif tracking-tight text-luxury-ink font-normal uppercase mb-6">
            PROYECTOS
          </h1>
          <p className="text-base sm:text-lg font-light text-luxury-ink/75 leading-relaxed max-w-2xl">
            Casos de estudio y obras en contexto residencial y comercial. Piezas a medida integradas a la arquitectura y el diseño contemporáneo.
          </p>
        </motion.div>
      </header>

      {/* Grid de Galería Editorial (1 col mobile, 2 col desktop con generoso whitespace) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 xl:gap-20">
        {PROYECTOS.map((proyecto, index) => {
          const isMobileActive = activeMobileId === proyecto.id;

          return (
            <motion.article
              key={proyecto.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              className="group flex flex-col"
              onClick={() => toggleMobileOverlay(proyecto.id)}
            >
              {/* Contenedor de Fotografía */}
              <div className="relative aspect-[4/3] sm:aspect-[16/11] overflow-hidden rounded-2xl bg-luxury-ink/5 select-none cursor-pointer">
                <img
                  src={proyecto.imagen}
                  alt={proyecto.titulo}
                  className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />

                {/* Overlay en Desktop (Hover Effect con oscurecimiento suave e información editorial) */}
                <div className="hidden md:flex absolute inset-0 bg-black/65 backdrop-blur-[1px] opacity-0 group-hover:opacity-100 transition-all duration-500 flex-col justify-end p-8 lg:p-10 text-white">
                  {proyecto.estado && (
                    <div className="mb-auto">
                      <span className="inline-block text-[9px] uppercase tracking-[0.25em] text-white/70 font-medium bg-white/10 px-3 py-1 rounded-full border border-white/15">
                        {proyecto.estado}
                      </span>
                    </div>
                  )}

                  <div className="space-y-3 transform translate-y-3 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                    <div className="text-[10px] uppercase tracking-[0.25em] text-white/60 font-medium">
                      {proyecto.ubicacion} · {proyecto.año}
                    </div>

                    <h2 className="text-2xl lg:text-3xl font-serif text-white font-normal leading-tight">
                      {proyecto.titulo}
                    </h2>

                    <div className="w-8 h-px bg-white/30 my-3" />

                    <p className="text-xs sm:text-sm font-light text-white/85 leading-relaxed max-w-lg">
                      {proyecto.descripcion}
                    </p>
                  </div>
                </div>

                {/* Overlay táctil interactivo en Mobile (si el usuario pulsa sobre la imagen) */}
                <div
                  className={`md:hidden absolute inset-0 bg-black/70 backdrop-blur-[2px] p-6 text-white flex flex-col justify-end transition-opacity duration-300 ${
                    isMobileActive ? 'opacity-100' : 'opacity-0 pointer-events-none'
                  }`}
                >
                  {proyecto.estado && (
                    <span className="text-[9px] uppercase tracking-widest text-white/70 mb-2">
                      {proyecto.estado}
                    </span>
                  )}
                  <div className="text-[10px] uppercase tracking-widest text-white/60 mb-1">
                    {proyecto.ubicacion} · {proyecto.año}
                  </div>
                  <h2 className="text-xl font-serif text-white font-normal mb-2">
                    {proyecto.titulo}
                  </h2>
                  <p className="text-xs font-light text-white/80 leading-relaxed">
                    {proyecto.descripcion}
                  </p>
                </div>
              </div>

              {/* Información visible debajo de la foto en Mobile (Discreto y elegante sin necesidad de hover) */}
              <div className="block md:hidden mt-4 space-y-1.5">
                <div className="flex items-baseline justify-between gap-2">
                  <h2 className="text-lg font-serif text-luxury-ink font-normal">
                    {proyecto.titulo}
                  </h2>
                  <span className="text-[10px] uppercase tracking-widest text-luxury-ink/45 shrink-0">
                    {proyecto.año}
                  </span>
                </div>

                <div className="text-[11px] uppercase tracking-widest text-luxury-ink/50 font-medium">
                  {proyecto.ubicacion}
                </div>

                <p className="text-xs font-light text-luxury-ink/75 leading-relaxed pt-1">
                  {proyecto.descripcion}
                </p>

                {proyecto.estado && (
                  <span className="inline-block text-[9px] uppercase tracking-wider text-luxury-ink/40 pt-1 font-medium">
                    {proyecto.estado}
                  </span>
                )}
              </div>
            </motion.article>
          );
        })}
      </div>

      {/* Cierre Editorial / Nota al pie */}
      <motion.footer
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mt-28 md:mt-36 pt-12 border-t border-luxury-ink/10 flex flex-col sm:flex-row items-baseline justify-between gap-6"
      >
        <p className="text-xs font-light text-luxury-ink/60 uppercase tracking-[0.2em]">
          Buenos Aires — Curaduría & Intervenciones
        </p>
        <a
          href="/sumate"
          className="text-xs uppercase tracking-[0.2em] font-medium text-luxury-ink border-b border-luxury-ink/30 pb-0.5 hover:border-luxury-ink transition-colors"
        >
          Consultar por un proyecto a medida →
        </a>
      </motion.footer>
    </div>
  );
};

export default Projects;
