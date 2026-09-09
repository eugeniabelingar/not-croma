import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Sparkles, Building2, Handshake, X, Check } from 'lucide-react';
import nosotrosImage from '../nosotros_2.jpg';

const AboutUs = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'Particular',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1200);
  };

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      projectType: 'Particular',
      message: ''
    });
    setIsSubmitted(false);
  };

  return (
    <div className="bg-luxury-bg min-h-screen">
      {/* Hero Section - Split Layout */}
      <section className="relative min-h-screen flex flex-col lg:flex-row overflow-hidden">
        {/* Left Side - Text Content */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center p-12 lg:p-24 pt-32 lg:pt-32">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "circOut" }}
          >
            <p className="text-[10px] uppercase tracking-[0.6em] text-luxury-ink/40 mb-8 font-medium">
              Filosofía de Estudio
            </p>
            <h1 className="text-[10vw] lg:text-[5.5vw] font-black leading-[0.95] mb-12 tracking-tighter uppercase relative z-10 lg:ml-auto lg:w-fit">
              Allier <span className="font-light">Art Studio</span>
            </h1>
            <div className="max-w-md">
              <p className="text-sm font-light leading-relaxed text-luxury-ink/60 mb-8">
                En la intersección del arte y la arquitectura contemporánea, creamos un nuevo paradigma para la expresión creativa.
              </p>
              <div className="flex items-center gap-4 text-[10px] uppercase tracking-widest font-bold">
                <span>BUENOS AIRES 2026</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right Side - Large Image */}
        <div className="w-full lg:w-1/2 relative h-[60vh] lg:h-auto">
          <motion.div 
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.5, ease: "circOut" }}
            className="absolute inset-0"
          >
            <img
              src={nosotrosImage}
              alt="Art Studio"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            {/* Floating Circle Accent Removed */}
          </motion.div>
        </div>

        {/* Vertical Rail Text */}
        <div className="absolute left-6 bottom-12 hidden lg:block">
          <p className="text-[10px] uppercase tracking-[0.5em] font-medium text-luxury-ink/30 [writing-mode:vertical-rl] rotate-180">
            ALLIER ART STUDIO — ARTE CONTEMPORÁNEO
          </p>
        </div>
      </section>

      {/* Redesigned Philosophy & What We Do Section */}
      <section className="bg-luxury-bg text-luxury-ink py-32 lg:py-48 px-6 relative border-b border-luxury-ink/5">
        <div className="max-w-7xl mx-auto">
          {/* Main heading: powerful, large presence */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl lg:text-[5.5rem] font-black leading-[1.1] tracking-tight mb-16 text-luxury-ink max-w-5xl"
          >
            El arte no debería intimidar.
          </motion.h2>

          {/* Copy paragraphs formatted in 2-column layout on medium screens */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 mb-24 lg:mb-32">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-lg md:text-xl font-light leading-relaxed text-luxury-ink/80 animate-fade-in"
            >
              Existe la falsa idea de que el buen arte es lejano, imposible o solo para expertos. En <span className="font-bold">Allier Art Studio</span> pensamos exactamente lo contrario: el arte se vive, se habita y tiene que ser parte de tu día a día.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg md:text-xl font-light leading-relaxed text-luxury-ink/80 animate-fade-in"
            >
              Nacimos para romper esa barrera. Somos el puente que conecta el talento de artistas contemporáneos con personas, estudios de interiorismo y desarrollos inmobiliarios. Hacemos simple lo complejo, uniendo arte y diseño para transformar espacios comunes en lugares con identidad propia.
            </motion.p>
          </div>

          {/* Elegant break line */}
          <div className="w-full h-px bg-luxury-ink/10 mb-20 lg:mb-24" />

          {/* What we do sub-section */}
          <div>
            <span className="text-[10px] uppercase tracking-[0.4em] font-black text-luxury-ink/40 mb-16 block">
              Lo que hacemos
            </span>

            {/* 3 Columns Layout on desktop, responsive stacking with clean minimalism on mobile */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
              {/* Point 1 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="space-y-6 group"
              >
                <div className="w-12 h-12 rounded-full border border-luxury-ink/10 flex items-center justify-center bg-white/40 group-hover:bg-luxury-ink group-hover:text-luxury-bg transition-colors duration-500">
                  <Sparkles size={20} className="stroke-[1.5]" />
                </div>
                <h3 className="text-xl font-semibold tracking-tight text-luxury-ink">
                  Curaduría real
                </h3>
                <p className="text-sm font-light leading-relaxed text-luxury-ink/70">
                  Seleccionamos piezas con técnica y fuerza visual, pensadas para integrarse a la vida cotidiana.
                </p>
              </motion.div>

              {/* Point 2 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="space-y-6 group"
              >
                <div className="w-12 h-12 rounded-full border border-luxury-ink/10 flex items-center justify-center bg-white/40 group-hover:bg-luxury-ink group-hover:text-luxury-bg transition-colors duration-500">
                  <Building2 size={20} className="stroke-[1.5]" />
                </div>
                <h3 className="text-xl font-semibold tracking-tight text-luxury-ink">
                  Proyectos & Real Estate
                </h3>
                <p className="text-sm font-light leading-relaxed text-luxury-ink/70">
                  Colaboramos codo a codo con arquitectos, marcas de diseño y desarrolladores para que el arte sea parte de la obra desde el primer momento.
                </p>
              </motion.div>

              {/* Point 3 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="space-y-6 group"
              >
                <div className="w-12 h-12 rounded-full border border-luxury-ink/10 flex items-center justify-center bg-white/40 group-hover:bg-luxury-ink group-hover:text-luxury-bg transition-colors duration-500">
                  <Handshake size={20} className="stroke-[1.5]" />
                </div>
                <h3 className="text-xl font-semibold tracking-tight text-luxury-ink">
                  Conexión directa
                </h3>
                <p className="text-sm font-light leading-relaxed text-luxury-ink/70">
                  Nos encargamos de la gestión, la selección y el nexo entre el artista y vos. Sin vueltas.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Conversion Section - Clean High-Contrast Layout focused on Customer Leads */}
      <section className="py-32 lg:py-48 bg-white border-t border-luxury-ink/10 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 text-center flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Upper category label */}
            <span className="text-[10px] uppercase tracking-[0.4em] font-black text-luxury-ink/40">
              Proyectos a Medida
            </span>

            {/* Main converted title: uppercase, heavy visual weight */}
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-luxury-ink uppercase tracking-tighter leading-tight">
              LLEVEMOS EL ARTE A TU ESPACIO.
            </h2>

            {/* Sub-copy block */}
            <p className="text-base md:text-xl font-light leading-relaxed text-luxury-ink/70 max-w-2xl mx-auto">
              Si sos particular, estudio de interiorismo o desarrollador inmobiliario, escribinos. Diseñamos la curaduría perfecta para tu proyecto.
            </p>

            {/* CTA action button */}
            <div className="pt-8 flex flex-col items-center gap-12">
              <motion.button
                onClick={() => setIsModalOpen(true)}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="bg-luxury-ink text-luxury-bg shadow-sm hover:shadow-md px-14 py-6 rounded-full text-xs uppercase tracking-[0.25em] font-black tracking-widest transition-all duration-300 cursor-pointer"
              >
                Iniciar proyecto
              </motion.button>

              {/* Lower secondary discreet link to avoid funnel mixing */}
              <div className="text-xs text-luxury-ink/50 font-normal">
                ¿Sos artista?{' '}
                <a
                  href="/sumate"
                  className="font-bold border-b border-luxury-ink/30 hover:border-luxury-ink pb-[2px] ml-1 transition-colors duration-300 text-luxury-ink/80"
                >
                  Sumate a nuestra comunidad
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Interactive Project Request Modal (B2C & B2B) */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-luxury-ink/70 backdrop-blur-md"
            onClick={(e) => {
              if (e.target === e.currentTarget) {
                setIsModalOpen(false);
                resetForm();
              }
            }}
          >
            <motion.div
              initial={{ scale: 0.95, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 20, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 350 }}
              className="bg-luxury-bg text-luxury-ink w-full max-w-lg rounded-[2rem] p-8 lg:p-12 relative shadow-2xl overflow-hidden border border-luxury-ink/10"
            >
              {/* Top Close Button */}
              <button
                onClick={() => {
                  setIsModalOpen(false);
                  resetForm();
                }}
                className="absolute top-6 right-6 text-luxury-ink/40 hover:text-luxury-ink transition-colors p-2 rounded-full hover:bg-luxury-ink/5"
              >
                <X size={20} />
              </button>

              {!isSubmitted ? (
                <div className="space-y-8">
                  <div className="space-y-2">
                    <span className="text-[9px] uppercase tracking-[0.3em] font-black text-luxury-ink/40">
                      Formulario de Proyecto
                    </span>
                    <h3 className="text-3xl font-black uppercase tracking-tight">Iniciar proyecto</h3>
                    <p className="text-xs font-light text-luxury-ink/60">
                      Completá el formulario para arrancar la curaduría ideal de tus espacios.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name Input */}
                    <div className="space-y-1">
                      <label className="text-[10px] uppercase tracking-[0.15em] font-bold text-luxury-ink/50 block">
                        Nombre completo o Estudio / Empresa *
                      </label>
                      <input
                        required
                        type="text"
                        placeholder="Ej. Estudio Allier o María Gómez"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-transparent border-b border-luxury-ink/10 focus:border-luxury-ink py-2 text-sm focus:outline-none transition-colors duration-300 placeholder:text-luxury-ink/20"
                      />
                    </div>

                    {/* Email Input */}
                    <div className="space-y-1">
                      <label className="text-[10px] uppercase tracking-[0.15em] font-bold text-luxury-ink/50 block">
                        Correo electrónico *
                      </label>
                      <input
                        required
                        type="email"
                        placeholder="ejemplo@correo.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-transparent border-b border-luxury-ink/10 focus:border-luxury-ink py-2 text-sm focus:outline-none transition-colors duration-300 placeholder:text-luxury-ink/20"
                      />
                    </div>

                    {/* Project/Client Type (Pristine Tiny Tag Selector) */}
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-[0.15em] font-bold text-luxury-ink/50 block">
                        Tipo de perfil *
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {['Particular', 'Estudio de Interiorismo', 'Desarrollador Inmobiliario', 'Otro'].map((type) => (
                          <button
                            key={type}
                            type="button"
                            onClick={() => setFormData({ ...formData, projectType: type })}
                            className={`px-3 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-wider border transition-all duration-300 ${
                              formData.projectType === type
                                ? 'bg-luxury-ink text-luxury-bg border-luxury-ink scale-102 shadow-sm'
                                : 'border-luxury-ink/15 hover:border-luxury-ink/40 text-luxury-ink/75 bg-transparent'
                            }`}
                          >
                            {type}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Message Area */}
                    <div className="space-y-1">
                      <label className="text-[10px] uppercase tracking-[0.15em] font-bold text-luxury-ink/50 block">
                        Contanos sobre tu espacio o proyecto *
                      </label>
                      <textarea
                        required
                        rows={3}
                        placeholder="Ej. Busco curaduría para las zonas comunes de un hotel / Quiero vestir mi living comedor con 3 obras contemporáneas..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full bg-transparent border-b border-luxury-ink/10 focus:border-luxury-ink py-2 text-sm focus:outline-none resize-none transition-colors duration-300 placeholder:text-luxury-ink/20"
                      />
                    </div>

                    {/* Submit button */}
                    <div className="pt-4">
                      <motion.button
                        disabled={isSubmitting}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        type="submit"
                        className="w-full bg-luxury-ink text-luxury-bg py-4.5 rounded-full text-xs font-black uppercase tracking-[0.2em] relative flex items-center justify-center transition-colors hover:opacity-95 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? (
                          <span className="flex items-center gap-2">
                            <span className="w-4 h-4 rounded-full border-2 border-white/20 border-t-white animate-spin" />
                            Procesando...
                          </span>
                        ) : (
                          'Enviar solicitud'
                        )}
                      </motion.button>
                    </div>
                  </form>
                </div>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 flex flex-col items-center text-center space-y-6"
                >
                  <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center text-green-600 border border-green-100">
                    <Check size={28} className="stroke-[2.5]" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-black uppercase tracking-tight">¡Proyecto Iniciado!</h3>
                    <p className="text-sm font-light text-luxury-ink/60 leading-relaxed max-w-sm">
                      Recibimos tus datos correctamente. Nuestro equipo curatorial se contactará con vos a la brevedad para dar vida a tus espacios.
                    </p>
                  </div>
                  <div className="pt-6">
                    <button
                      onClick={() => {
                        setIsModalOpen(false);
                        resetForm();
                      }}
                      className="border border-luxury-ink/10 hover:border-luxury-ink hover:bg-luxury-ink hover:text-luxury-bg px-8 py-3 rounded-full text-[10px] uppercase tracking-widest font-black transition-all duration-300"
                    >
                      Cerrar ventana
                    </button>
                  </div>
                </motion.div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AboutUs;

