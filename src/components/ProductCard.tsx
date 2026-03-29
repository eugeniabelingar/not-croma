import React from 'react';
import { Link } from 'react-router-dom';
import { Painting } from '../types';
import { motion } from 'motion/react';

interface ProductCardProps {
  painting: Painting;
  hoverScale?: boolean;
  showPrice?: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({ painting, hoverScale = false, showPrice = true }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={hoverScale ? { scale: 1.15 } : {}}
      viewport={{ once: true }}
      transition={{ duration: 0.6, type: 'spring', stiffness: 300, damping: 20 }}
      className="group cursor-pointer"
    >
      <Link to={`/producto/${painting.id}`}>
        <div className="aspect-[3/4] overflow-hidden bg-gray-50 relative flex items-center justify-center">
          <img
            src={painting.imageUrl}
            alt={painting.title}
            className={`max-w-full max-h-full object-contain transition-transform duration-700 ${
              !hoverScale ? 'group-hover:scale-105' : ''
            }`}
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
        </div>
        <div className="mt-6 space-y-1">
          <p className="text-[10px] uppercase tracking-[0.2em] text-luxury-ink/50 font-medium">
            {painting.artist}
          </p>
          <h3 className="text-lg font-serif italic tracking-wide">{painting.title}</h3>
          {showPrice && (
            <p className="text-sm font-light text-luxury-ink/80">
              {new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'EUR' }).format(painting.price)}
            </p>
          )}
        </div>
      </Link>
    </motion.div>
  );
};

export default ProductCard;
