import React from 'react';
import { FAQS } from '../constants';
import { motion } from 'motion/react';
import { Plus, Minus } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="border-b border-luxury-ink/10 py-8">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center text-left group"
      >
        <h3 className="text-xl font-serif tracking-wide group-hover:text-luxury-accent transition-colors">
          {question}
        </h3>
        <span className="text-luxury-ink/40">
          {isOpen ? <Minus size={20} strokeWidth={1} /> : <Plus size={20} strokeWidth={1} />}
        </span>
      </button>
      <motion.div
        initial={false}
        animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
        className="overflow-hidden"
      >
        <p className="pt-6 text-sm font-light leading-relaxed text-luxury-ink/70 max-w-2xl">
          {answer}
        </p>
      </motion.div>
    </div>
  );
};

const FAQ = () => {
  return (
    <div className="pt-32 pb-32 px-6 max-w-4xl mx-auto">
      <header className="mb-20 text-center">
        <h1 className="text-4xl md:text-5xl font-serif tracking-wide font-normal">PREGUNTAS FRECUENTES</h1>
      </header>

      <div className="space-y-4">
        {FAQS.map((faq, index) => (
          <FAQItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>

      <div className="mt-32 p-12 bg-white border border-luxury-ink/5 text-center">
        <h4 className="text-lg font-serif mb-4 font-normal">¿Tenés alguna otra pregunta?</h4>
        <p className="text-sm font-light text-luxury-ink/60 mb-8">
          Estamos acá para asesorarte en lo que necesites. Escribinos y proyectemos tu espacio juntos.
        </p>
        <a 
          href="mailto:allierartstudio@gmail.com" 
          className="text-[10px] uppercase tracking-widest font-bold border-b border-luxury-ink pb-1"
        >
          Contactar con un Curador
        </a>
      </div>
    </div>
  );
};

export default FAQ;
