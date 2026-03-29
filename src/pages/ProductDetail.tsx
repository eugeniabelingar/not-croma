import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { PAINTINGS } from '../constants';
import { useCart } from '../context/CartContext';
import { motion } from 'motion/react';
import { ArrowLeft, Plus, Check } from 'lucide-react';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [added, setAdded] = React.useState(false);

  const painting = PAINTINGS.find(p => p.id === id);

  if (!painting) {
    return (
      <div className="pt-40 text-center">
        <p>Obra no encontrada.</p>
        <button onClick={() => navigate('/coleccion')} className="mt-4 luxury-link uppercase text-xs tracking-widest">
          Volver a la colección
        </button>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(painting);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="pt-32 pb-32 px-6 max-w-7xl mx-auto">
      <button 
        onClick={() => navigate(-1)}
        className="flex items-center space-x-2 text-[10px] uppercase tracking-widest text-luxury-ink/50 hover:text-luxury-ink transition-colors mb-12"
      >
        <ArrowLeft size={14} />
        <span>Regresar</span>
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-gray-50 overflow-hidden flex items-center justify-center h-[70vh] max-h-[1200px]"
        >
          <img 
            src={painting.imageUrl} 
            alt={painting.title} 
            className="max-w-full max-h-full object-contain"
            referrerPolicy="no-referrer"
          />
        </motion.div>

        {/* Info Section */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex flex-col justify-center"
        >
          <p className="text-[10px] uppercase tracking-[0.4em] text-luxury-ink/50 mb-4 font-medium">
            {painting.artist}
          </p>
          <h1 className="text-5xl font-serif mb-8 italic">{painting.title}</h1>
          
          <p className="text-2xl font-light mb-12">
            {new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'EUR' }).format(painting.price)}
          </p>

          <div className="space-y-8 mb-12">
            <div>
              <h4 className="text-[10px] uppercase tracking-widest font-bold mb-3">Descripción</h4>
              <p className="text-sm font-light leading-relaxed text-luxury-ink/80">
                {painting.description}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8 border-t border-luxury-ink/10 pt-8">
              <div>
                <h4 className="text-[10px] uppercase tracking-widest font-bold mb-2">Dimensiones</h4>
                <p className="text-sm font-light">{painting.dimensions}</p>
              </div>
              <div>
                <h4 className="text-[10px] uppercase tracking-widest font-bold mb-2">Técnica</h4>
                <p className="text-sm font-light">{painting.medium}</p>
              </div>
              <div>
                <h4 className="text-[10px] uppercase tracking-widest font-bold mb-2">Año</h4>
                <p className="text-sm font-light">{painting.year}</p>
              </div>
              <div>
                <h4 className="text-[10px] uppercase tracking-widest font-bold mb-2">Categoría</h4>
                <p className="text-sm font-light">{painting.category}</p>
              </div>
              <div>
                <h4 className="text-[10px] uppercase tracking-widest font-bold mb-2">Autenticidad</h4>
                <p className="text-sm font-light italic">Incluye certificado</p>
              </div>
            </div>
          </div>

          <button
            onClick={handleAddToCart}
            className={`w-full py-5 text-xs uppercase tracking-[0.2em] transition-all duration-500 flex items-center justify-center space-x-3 rounded-full ${
              added 
                ? 'bg-emerald-600 text-white' 
                : 'bg-luxury-ink text-luxury-bg hover:bg-luxury-ink/90'
            }`}
          >
            {added ? (
              <>
                <Check size={16} />
                <span>Añadido con éxito</span>
              </>
            ) : (
              <>
                <Plus size={16} />
                <span>Añadir al Carrito</span>
              </>
            )}
          </button>
          
          <p className="mt-6 text-[10px] text-center text-luxury-ink/40 uppercase tracking-widest">
            Envío asegurado de grado museo incluido
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default ProductDetail;
