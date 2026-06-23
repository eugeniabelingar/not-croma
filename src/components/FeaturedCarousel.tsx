import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Painting } from '../types';

interface FeaturedCarouselProps {
  paintings: Painting[];
}

const FeaturedCarousel: React.FC<FeaturedCarouselProps> = ({ paintings }) => {
  const [currentIndex, setCurrentIndex] = useState(paintings.length);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const prefersReducedMotion = useReducedMotion();
  
  // Triple the items to simulate infinite loop
  const extendedPaintings = [...paintings, ...paintings, ...paintings];
  const totalItems = paintings.length;

  const handleNext = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev + 1);
  };

  const handlePrev = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev - 1);
  };

  const onAnimationComplete = () => {
    setIsTransitioning(false);
    if (currentIndex >= totalItems * 2) {
      setCurrentIndex(currentIndex - totalItems);
    } else if (currentIndex < totalItems) {
      setCurrentIndex(currentIndex + totalItems);
    }
  };

  const cardWidth = 360;
  const gap = 24;

  return (
    <div className="relative w-full overflow-visible py-6 -my-6">
      {/* Navigation Buttons */}
      <div className="absolute top-1/2 -translate-y-1/2 left-6 z-30">
        <button
          onClick={handlePrev}
          className="w-12 h-12 rounded-full bg-[#fdfcfb] border border-luxury-ink/10 flex items-center justify-center text-luxury-ink transition-all duration-300 hover:bg-luxury-ink hover:text-white group focus-visible:ring-2 focus-visible:ring-luxury-ink focus-visible:ring-offset-2 outline-none"
          aria-label="Anterior"
        >
          <ChevronLeft size={24} strokeWidth={1.5} />
        </button>
      </div>
      <div className="absolute top-1/2 -translate-y-1/2 right-6 z-30">
        <button
          onClick={handleNext}
          className="w-12 h-12 rounded-full bg-[#fdfcfb] border border-luxury-ink/10 flex items-center justify-center text-luxury-ink transition-all duration-300 hover:bg-luxury-ink hover:text-white group focus-visible:ring-2 focus-visible:ring-luxury-ink focus-visible:ring-offset-2 outline-none"
          aria-label="Siguiente"
        >
          <ChevronRight size={24} strokeWidth={1.5} />
        </button>
      </div>

      {/* Carousel Track */}
      <div className="pl-6 overflow-hidden">
        <motion.div
          className="flex gap-[24px]"
          animate={{
            x: -(currentIndex * (cardWidth + gap)),
          }}
          transition={{
            duration: isTransitioning ? (prefersReducedMotion ? 0 : 0.8) : 0,
            ease: [0.25, 0.1, 0.25, 1],
          }}
          onAnimationComplete={onAnimationComplete}
        >
          {extendedPaintings.map((painting, idx) => {
            const isHovered = hoveredIndex === idx;
            const isAnyHovered = hoveredIndex !== null;
            const isOtherHovered = isAnyHovered && !isHovered;

            return (
              <motion.div
                key={`${painting.id}-${idx}`}
                className="relative flex-shrink-0 w-[360px] aspect-[3/4] rounded-2xl overflow-hidden shadow-sm cursor-pointer group outline-none focus-visible:ring-2 focus-visible:ring-luxury-ink focus-visible:ring-offset-[3px]"
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
                animate={{
                  scale: isHovered ? 1.06 : 1,
                  filter: isOtherHovered ? 'blur(3px)' : 'blur(0px)',
                  opacity: isOtherHovered ? 0.6 : 1,
                }}
                transition={{
                  duration: prefersReducedMotion ? 0 : 0.4,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
              >
                <Link to={`/producto/${painting.id}`} className="block w-full h-full">
                  <img
                    src={painting.imageUrl}
                    alt={painting.title}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Overlay Gradient */}
                  <div 
                    className={`absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent transition-opacity duration-300 flex flex-col justify-end p-8 ${
                      isHovered ? 'opacity-100' : 'opacity-0'
                    }`}
                  >
                    <p className="text-[10px] uppercase tracking-[0.3em] text-gray-300 font-medium mb-2">
                      {painting.artist}
                    </p>
                    <h3 className="text-3xl font-highlight text-white leading-tight">
                      {painting.title}
                    </h3>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
};

export default FeaturedCarousel;
