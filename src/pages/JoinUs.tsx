import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Check } from 'lucide-react';

const JoinUs = () => {
  const [role, setRole] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="pt-32 pb-32 px-6 max-w-3xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h1 className="text-5xl font-serif mb-12 tracking-wide font-normal">Hablemos</h1>
        
        <div className="space-y-6 text-sm font-light leading-relaxed text-luxury-ink/80 text-left max-w-2xl mx-auto">
          <p>
            Allier es un espacio en constante movimiento y nos encanta tejer redes. Ya sea que seas un artista buscando dónde exponer, un profesional o marca con ganas de armar proyectos en conjunto, o si simplemente necesitás que te asesoremos para encontrar el cuadro ideal para tu casa... estás en el lugar correcto.
          </p>
          <p className="font-medium text-luxury-ink">
            Elegí tu opción en el formulario acá abajo, dejanos tu mensaje y nos ponemos en contacto con vos.
          </p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="bg-white p-8 md:p-12 border border-luxury-ink/5 shadow-sm rounded-3xl"
      >
        {submitted ? (
          <div className="py-20 text-center space-y-4">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <Check size={32} />
            </div>
            <h2 className="text-2xl font-serif font-normal">¡Mensaje enviado!</h2>
            <p className="text-sm font-light text-luxury-ink/60">Nos pondremos en contacto con vos a la brevedad.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold text-luxury-ink/50">¿Cómo te llamás?</label>
                <input 
                  required
                  type="text" 
                  className="w-full border-b border-luxury-ink/10 py-2 focus:border-luxury-ink outline-none transition-colors font-light text-sm bg-transparent"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold text-luxury-ink/50">Tu email de contacto</label>
                <input 
                  required
                  type="email" 
                  className="w-full border-b border-luxury-ink/10 py-2 focus:border-luxury-ink outline-none transition-colors font-light text-sm bg-transparent"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest font-bold text-luxury-ink/50">Número de contacto</label>
              <input 
                required
                type="tel" 
                className="w-full border-b border-luxury-ink/10 py-2 focus:border-luxury-ink outline-none transition-colors font-light text-sm bg-transparent"
              />
            </div>

            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest font-bold text-luxury-ink/50">¿En qué rol nos escribís?</label>
              <select 
                required
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="w-full border-b border-luxury-ink/10 py-2 focus:border-luxury-ink outline-none transition-colors font-light text-sm bg-transparent appearance-none cursor-pointer"
              >
                <option value="" disabled>Seleccioná una opción</option>
                <option value="artista">Soy artista y quiero sumarme.</option>
                <option value="proyecto">Tengo un proyecto y quiero sumar sus obras.</option>
                <option value="asesoramiento">Busco asesoramiento para mis paredes/espacio.</option>
                <option value="dudas">Tengo dudas sobre el funcionamiento.</option>
                <option value="otro">Otro.</option>
              </select>
            </div>

            {role === 'artista' && (
              <motion.div 
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                className="space-y-2"
              >
                <label className="text-[10px] uppercase tracking-widest font-bold text-luxury-ink/50">Tu perfil de Instagram o Web</label>
                <input 
                  required
                  type="text" 
                  className="w-full border-b border-luxury-ink/10 py-2 focus:border-luxury-ink outline-none transition-colors font-light text-sm bg-transparent"
                />
              </motion.div>
            )}

            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest font-bold text-luxury-ink/50">Contanos más...</label>
              <textarea 
                required
                rows={4}
                className="w-full border border-luxury-ink/10 p-4 focus:border-luxury-ink outline-none transition-colors font-light text-sm bg-transparent rounded-2xl resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-5 bg-luxury-ink text-luxury-bg text-xs uppercase tracking-[0.2em] rounded-full hover:bg-luxury-ink/90 transition-all duration-300 shadow-lg shadow-luxury-ink/10"
            >
              Enviar Mensaje
            </button>
          </form>
        )}
      </motion.div>
    </div>
  );
};

export default JoinUs;
