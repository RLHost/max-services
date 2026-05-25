import { ShieldCheck, Clock, TrendingUp } from 'lucide-react';
import { motion } from 'motion/react';

export function PainSection() {
  const pains = [
    {
      icon: <Clock size={32} />,
      title: "Tempo Desperdiçado",
      desc: "Sua equipe de RH ou Compras perde horas negociando manutenções e lidando com burocracias de veículos em vez de focar no crescimento da empresa."
    },
    {
      icon: <TrendingUp size={32} />,
      title: "Custos Ocultos e Imprevisíveis",
      desc: "Depreciação, impostos, seguros e manutenções surpresa corroem a margem de lucro do seu negócio mês a mês."
    },
    {
      icon: <ShieldCheck size={32} />,
      title: "Risco Operacional Alto",
      desc: "Um equipamento quebrado ou um veículo parado significa atraso em obras, entregas perdidas e contratos em risco."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-black uppercase mb-6">
            Sua empresa está sangrando dinheiro com <span className="text-max-royal">ineficiência operacional?</span>
          </h2>
          <p className="text-lg text-max-slate">
            A gestão própria de frotas e maquinários é um ralo de recursos. Entenda os riscos que estão travando a escalabilidade do seu negócio.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {pains.map((pain, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-max-ice p-8 rounded-sm border-t-4 border-max-orange shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="text-max-orange mb-6 bg-white w-16 h-16 rounded-full flex items-center justify-center shadow-inner">
                {pain.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 uppercase">{pain.title}</h3>
              <p className="text-max-slate leading-relaxed">
                {pain.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}