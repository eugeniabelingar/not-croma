import React from 'react';
import { Link } from 'react-router-dom';
import { Painting } from '../types';
import { motion } from 'motion/react';

interface ProductCardProps {
  painting: Painting;
  hoverScale?: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({ painting, hoverScale = false }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={hoverScale ? { scale: 1.03 } : {}}
      viewport={{ once: true }}
      transition={{ 
        duration: 0.6, 
        type: 'spring', 
        stiffness: 300, 
        damping: 20,
        // Disable animations if user prefers reduced motion
        ...(typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches ? { type: 'tween', duration: 0 } : {})
      }}
      className="group cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-luxury-ink focus-visible:ring-offset-[3px]"
    >
      <Link to={`/producto/${painting.id}`}>
        <div className="aspect-[3/4] overflow-hidden rounded-2xl bg-gray-50 relative">
          <img
            src={painting.imageUrl}
            alt={painting.title}
            className={`w-full h-full object-cover transition-transform duration-700 ${
              !hoverScale ? 'group-hover:scale-[1.03]' : ''
            }`}
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
        </div>
        <div className="mt-6 space-y-1">
          <p className="text-[10px] uppercase tracking-[0.2em] text-luxury-ink/50 font-medium">
            {painting.artist}
          </p>
          <h3 className="text-lg font-highlight tracking-wide">{painting.title}</h3>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProductCard;
