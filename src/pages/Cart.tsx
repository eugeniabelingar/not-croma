import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { motion, AnimatePresence } from 'motion/react';
import { Trash2, ArrowRight, ShoppingBag } from 'lucide-react';

const Cart = () => {
  const { cart, removeFromCart, total, itemCount } = useCart();

  if (itemCount === 0) {
    return (
      <div className="pt-40 pb-40 px-6 text-center max-w-xl mx-auto">
        <div className="mb-8 flex justify-center">
          <ShoppingBag size={48} strokeWidth={1} className="text-luxury-ink/20" />
        </div>
        <h1 className="text-3xl font-serif mb-6">Su carrito está vacío</h1>
        <p className="text-sm font-light text-luxury-ink/60 mb-12">
          Explore nuestra colección y descubra obras que resuenen con su visión.
        </p>
        <Link 
          to="/coleccion" 
          className="inline-block bg-luxury-ink text-luxury-bg px-12 py-4 text-[10px] uppercase tracking-widest hover:bg-luxury-ink/90 transition-all rounded-full"
        >
          Explorar Colección
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-32 px-6 max-w-7xl mx-auto">
      <h1 className="text-5xl font-serif mb-20">Su Selección</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-20">
        {/* Items List */}
        <div className="lg:col-span-2 space-y-12">
          <AnimatePresence>
            {cart.map(item => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="flex gap-8 pb-12 border-b border-luxury-ink/5"
              >
                <div className="w-32 h-40 bg-gray-100 overflow-hidden flex-shrink-0">
                  <img 
                    src={item.imageUrl} 
                    alt={item.title} 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="flex-grow flex flex-col justify-between py-2">
                  <div>
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="text-[10px] uppercase tracking-[0.2em] text-luxury-ink/50 mb-1">
                          {item.artist}
                        </p>
                        <h3 className="text-xl font-serif font-normal">{item.title}</h3>
                      </div>
                      <button 
                        onClick={() => removeFromCart(item.id)}
                        className="text-luxury-ink/30 hover:text-red-800 transition-colors"
                      >
                        <Trash2 size={18} strokeWidth={1.5} />
                      </button>
                    </div>
                    <p className="text-xs font-light text-luxury-ink/60 mt-2">
                      {item.dimensions} • {item.medium}
                    </p>
                  </div>
                  <div className="flex justify-between items-end">
                    <p className="text-sm font-light">Cantidad: {item.quantity}</p>
                    <p className="text-lg font-serif">
                      {new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'EUR' }).format(item.price)}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Summary */}
        <div className="lg:col-span-1">
          <div className="bg-white p-10 border border-luxury-ink/5 sticky top-32">
            <h2 className="text-2xl font-serif mb-8">Resumen</h2>
            
            <div className="space-y-4 mb-8">
              <div className="flex justify-between text-sm font-light">
                <span className="text-luxury-ink/60">Subtotal</span>
                <span>{new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'EUR' }).format(total)}</span>
              </div>
              <div className="flex justify-between text-sm font-light">
                <span className="text-luxury-ink/60">Envío</span>
                <span className="uppercase text-[10px] tracking-widest font-bold text-emerald-600">Gratis</span>
              </div>
              <div className="pt-4 border-t border-luxury-ink/10 flex justify-between items-end">
                <span className="text-lg font-serif">Total</span>
                <span className="text-2xl font-serif">
                  {new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'EUR' }).format(total)}
                </span>
              </div>
            </div>

            <button className="w-full bg-luxury-ink text-luxury-bg py-5 text-[10px] uppercase tracking-[0.2em] hover:bg-luxury-ink/90 transition-all flex items-center justify-center space-x-4 rounded-full">
              <span>Proceder al Pago</span>
              <ArrowRight size={16} />
            </button>

            <div className="mt-8 space-y-4">
              <p className="text-[9px] text-luxury-ink/40 uppercase tracking-widest flex items-center gap-2">
                <span className="w-1 h-1 bg-luxury-ink/40 rounded-full" />
                Pago seguro encriptado
              </p>
              <p className="text-[9px] text-luxury-ink/40 uppercase tracking-widest flex items-center gap-2">
                <span className="w-1 h-1 bg-luxury-ink/40 rounded-full" />
                Certificado de autenticidad incluido
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
