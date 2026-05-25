import { MapPin, Phone, Mail } from 'lucide-react';
import { motion } from 'motion/react';

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <span className="text-max-orange font-bold tracking-widest uppercase text-sm mb-4 block">Aja Agora</span>
            <h2 className="text-4xl font-black uppercase mb-6">
              Pronto para Otimizar sua <span className="text-max-royal">Operação?</span>
            </h2>
            <p className="text-max-slate mb-10 text-lg">
              Fale com nossos especialistas em gestão de frotas e facilities. Desenvolveremos um plano sob medida para reduzir seus custos e aumentar sua eficiência.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="bg-max-ice p-3 rounded-sm text-max-royal">
                  <MapPin size={28} />
                </div>
                <div>
                  <h4 className="font-bold text-max-blue uppercase mb-1">Sede Corporativa</h4>
                  <p className="text-max-slate">R. Teodoro Sampaio, 2767<br/>Pinheiros, São Paulo - SP<br/>CEP: 05408-000</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-max-ice p-3 rounded-sm text-max-royal">
                  <Mail size={28} />
                </div>
                <div>
                  <h4 className="font-bold text-max-blue uppercase mb-1">E-mail Comercial</h4>
                  <a href="mailto:contato@maxservices.com.br" className="text-max-slate hover:text-max-orange transition-colors">contato@maxservices.com.br</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-max-ice p-3 rounded-sm text-max-royal">
                  <Phone size={28} />
                </div>
                <div>
                  <h4 className="font-bold text-max-blue uppercase mb-1">Atendimento</h4>
                  <p className="text-max-slate">Disponível para clientes contratuais 24/7.</p>
                </div>
              </div>
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-max-ice p-8 md:p-10 rounded-sm shadow-xl border-t-4 border-max-blue"
          >
            <h3 className="text-2xl font-black uppercase mb-6 text-max-blue">Solicite uma Proposta</h3>
            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-sm font-bold text-max-slate uppercase mb-2">Nome da Empresa</label>
                <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:border-max-royal focus:ring-1 focus:ring-max-royal transition-colors" placeholder="Sua Empresa Ltda" />
              </div>
              <div className="grid grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-bold text-max-slate uppercase mb-2">Seu Nome</label>
                  <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:border-max-royal focus:ring-1 focus:ring-max-royal transition-colors" placeholder="João Silva" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-max-slate uppercase mb-2">Telefone</label>
                  <input type="tel" className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:border-max-royal focus:ring-1 focus:ring-max-royal transition-colors" placeholder="(11) 00000-0000" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-max-slate uppercase mb-2">Serviço de Interesse</label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:border-max-royal focus:ring-1 focus:ring-max-royal transition-colors bg-white">
                  <option>Locação de Veículos</option>
                  <option>Locação de Maquinário</option>
                  <option>Manutenção de Frota</option>
                  <option>Facilities e Limpeza</option>
                  <option>Múltiplos Serviços</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-bold text-max-slate uppercase mb-2">Mensagem</label>
                <textarea rows={4} className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:border-max-royal focus:ring-1 focus:ring-max-royal transition-colors resize-none" placeholder="Detalhe sua necessidade operacional..."></textarea>
              </div>
              <button type="submit" className="w-full bg-max-blue hover:bg-max-royal text-white font-black uppercase tracking-widest py-4 rounded-sm transition-all transform hover:scale-[1.02] shadow-lg">
                Quero Agendar Agora
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}