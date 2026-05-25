import { CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';

export function Authority() {
  const features = [
    "Capacidade Técnica Comprovada",
    "Atendimento B2B e Governamental",
    "Frota e Maquinário Atualizados",
    "Suporte Operacional Rápido",
    "Redução de Custos Tributários",
    "Gestão Centralizada de Contratos"
  ];

  return (
    <section id="authority" className="py-24 bg-max-ice overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2 relative"
          >
            <div className="absolute -inset-4 bg-max-royal/10 transform -skew-y-3 z-0"></div>
            <img 
              src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=1000"
              alt="Estrutura Max Services"
              className="relative z-10 w-full h-[500px] object-cover rounded-sm shadow-2xl border-4 border-white"
            />
            <div className="absolute -bottom-8 -right-8 bg-max-orange text-white p-8 rounded-sm shadow-xl z-20">
              <p className="text-5xl font-black mb-2">10+</p>
              <p className="font-bold uppercase tracking-wider text-sm">Anos de<br/>Excelência</p>
            </div>
          </motion.div>

          <div className="lg:w-1/2">
            <span className="text-max-royal font-bold tracking-widest uppercase text-sm mb-4 block">Por que a Max Services?</span>
            <h2 className="text-3xl md:text-4xl font-black uppercase mb-6">
              Construa uma Base Sólida para o <span className="text-max-orange">Crescimento da sua Empresa.</span>
            </h2>
            <p className="text-lg text-max-slate mb-8 leading-relaxed">
              Não somos apenas uma locadora. Somos seu parceiro estratégico de infraestrutura. Ao assumirmos a gestão da sua frota e manutenção, blindamos sua operação contra imprevistos e garantimos que seu capital seja investido no que realmente importa: o seu negócio.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="text-max-royal flex-shrink-0" size={24} />
                  <span className="font-bold text-max-blue">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}