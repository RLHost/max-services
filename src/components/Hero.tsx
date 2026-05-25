import { motion } from 'motion/react';
import { ChevronRight } from 'lucide-react';

export function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-[90vh] flex items-center pt-20">
      <div className="absolute inset-0 z-0">
        <img
          src="/images/home_fundo.jpg"
          alt="Frota Corporativa"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-max-blue/80 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-max-blue via-max-blue/90 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block py-1 px-3 rounded-sm bg-max-orange/20 border border-max-orange/50 text-max-orange font-bold text-sm tracking-wider uppercase mb-6">
              Gestão Inteligente
            </span>
            <h1 className="text-4xl md:text-6xl font-black text-white leading-tight mb-6 uppercase">
              Pare de Perder Dinheiro com Frotas e <span className="text-max-orange">Equipamentos Parados.</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl leading-relaxed">
              Terceirize a locação e gestão de veículos, máquinas e facilities com a Max Services. Foco total no seu core business enquanto nós garantimos a sua operação 24 horas por dia, 7 dias por semana.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={scrollToContact}
                className="flex items-center justify-center gap-2 bg-max-orange hover:bg-orange-600 text-white px-8 py-4 rounded-sm font-bold uppercase tracking-wide transition-all transform hover:scale-105 shadow-xl"
              >
                Solicitar Orçamento Estratégico
                <ChevronRight size={20} />
              </button>
              <button
                onClick={() => {
                  const el = document.getElementById('services');
                  if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' });
                }}
                className="flex items-center justify-center gap-2 bg-transparent border-2 border-white text-white hover:bg-white hover:text-max-blue px-8 py-4 rounded-sm font-bold uppercase tracking-wide transition-all"
              >
                Ver Soluções
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}