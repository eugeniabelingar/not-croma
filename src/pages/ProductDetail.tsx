import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { PAINTINGS } from '../constants';
import { motion } from 'motion/react';
import { ArrowLeft, Mail } from 'lucide-react';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const painting = PAINTINGS.find(p => p.id === id);
  const [activeImage, setActiveImage] = React.useState<string>(painting?.imageUrl || '');

  React.useEffect(() => {
    if (painting) {
      setActiveImage(painting.imageUrl);
    }
  }, [painting]);

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

  const imagesList = painting.images && painting.images.length > 0 
    ? painting.images 
    : [painting.imageUrl];

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
        <div className="flex flex-col gap-4">
          <motion.div
            key={activeImage}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="bg-neutral-100/60 rounded-xl overflow-hidden flex items-center justify-center h-[55vh] md:h-[65vh] max-h-[900px] border border-luxury-ink/5 p-4"
          >
            <img 
              src={activeImage || painting.imageUrl} 
              alt={painting.title} 
              className="max-w-full max-h-full object-contain drop-shadow-sm transition-all duration-300"
              referrerPolicy="no-referrer"
            />
          </motion.div>

          {/* Thumbnails if multiple images exist */}
          {imagesList.length > 1 && (
            <div className="flex gap-3 justify-center pt-2">
              {imagesList.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImage(img)}
                  className={`w-20 h-20 rounded-lg overflow-hidden border-2 transition-all p-1 bg-white ${
                    activeImage === img 
                      ? 'border-luxury-ink shadow-sm' 
                      : 'border-luxury-ink/15 opacity-60 hover:opacity-100 hover:border-luxury-ink/40'
                  }`}
                  aria-label={`Ver perspectiva ${idx + 1}`}
                >
                  <img
                    src={img}
                    alt={`${painting.title} - vista ${idx + 1}`}
                    className="w-full h-full object-cover rounded"
                    referrerPolicy="no-referrer"
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Info Section */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex flex-col justify-center"
        >
          <div className="flex items-center gap-3 mb-4 flex-wrap">
            <p className="text-[10px] uppercase tracking-[0.4em] text-luxury-ink/50 font-medium">
              {painting.artist}
            </p>
            {painting.isSigned && (
              <span className="text-[9px] uppercase tracking-widest font-semibold px-2.5 py-0.5 bg-luxury-ink text-luxury-bg rounded-full">
                Obra firmada
              </span>
            )}
          </div>
          <h1 className="text-4xl md:text-5xl font-serif mb-8 font-normal">{painting.title}</h1>

          <div className="space-y-8 mb-10">
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
                <p className="text-sm font-light">{painting.authenticity || 'Incluye certificado'}</p>
              </div>
            </div>
          </div>

          <a
            href={`mailto:allierartstudio@gmail.com?subject=Consulta sobre ${encodeURIComponent(painting.title)}`}
            className="w-full py-5 text-xs uppercase tracking-[0.2em] transition-all duration-300 flex items-center justify-center space-x-3 rounded-full bg-luxury-ink text-luxury-bg hover:bg-luxury-ink/90 text-center cursor-pointer shadow-sm"
          >
            <Mail size={16} />
            <span>Consultar sobre esta obra</span>
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default ProductDetail;
