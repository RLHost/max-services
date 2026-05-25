import { Car, Tractor, Wrench, Building2 } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export function Services() {
  const services = [
    {
      icon: <Car size={40} />,
      title: "Locação de Veículos",
      desc: "Terceirização completa de frota leve e executiva. Opções com ou sem condutor, transporte rodoviário de cargas e gestão total de documentação e seguros.",
      tags: ["Frota Leve", "Com/Sem Motorista", "Transporte Municipal"],
      path: "/solucoes/locacao-veiculos"
    },
    {
      icon: <Tractor size={40} />,
      title: "Máquinas e Equipamentos",
      desc: "Locação de maquinário agrícola, comercial e industrial pesado sem operador. Garantimos equipamentos revisados para que sua obra ou lavoura não pare.",
      tags: ["Linha Amarela", "Agrícola", "Industrial", "Com/Sem Motorista"],
      path: "/solucoes/maquinas-equipamentos"
    },
    {
      icon: <Wrench size={40} />,
      title: "Manutenção Especializada",
      desc: "Oficina completa para manutenção mecânica, funilaria, pintura, lavagem e lubrificação de veículos automotores e maquinário pesado.",
      tags: ["Preventiva", "Corretiva", "Funilaria"],
      path: "/solucoes/manutencao"
    },
    {
      icon: <Building2 size={40} />,
      title: "Facilities & Estruturas",
      desc: "Apoio operacional completo: locação de palcos, coberturas, obras de acabamento, limpeza predial e serviços combinados para edifícios corporativos.",
      tags: ["Limpeza", "Estruturas Temporárias", "Apoio Predial"],
      path: "/solucoes/facilities"
    }
  ];

  return (
    <section id="services" className="py-24 bg-max-blue text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-max-orange font-bold tracking-widest uppercase text-sm mb-4 block">O Alívio Operacional</span>
            <h2 className="text-4xl md:text-5xl font-black uppercase text-white">
              Soluções de Ponta a Ponta para <span className="text-max-royal text-blue-400">Empresas Exigentes</span>
            </h2>
          </div>
          <p className="text-gray-300 max-w-md">
            Centralize seus contratos. Da frota comercial à limpeza do escritório, nós entregamos eficiência e redução de custos.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-white/5 border border-white/10 p-8 hover:bg-white hover:text-max-blue transition-all duration-300 rounded-sm"
            >
              <div className="flex items-start gap-6">
                <div className="text-max-orange group-hover:text-max-royal transition-colors">
                  {service.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3 uppercase group-hover:text-max-blue text-white">{service.title}</h3>
                  <p className="text-gray-400 group-hover:text-max-slate mb-6 leading-relaxed">
                    {service.desc}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {service.tags.map((tag, i) => (
                      <span key={i} className="text-xs font-bold uppercase tracking-wider bg-white/10 group-hover:bg-max-ice group-hover:text-max-royal px-3 py-1 rounded-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Link to={service.path} className="inline-block font-bold text-sm uppercase tracking-wider text-max-orange group-hover:text-max-royal hover:underline">
                    Ver Detalhes &rarr;
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}