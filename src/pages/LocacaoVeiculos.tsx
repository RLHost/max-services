import { Car, ShieldCheck, Clock, TrendingUp } from 'lucide-react';

export function LocacaoVeiculos() {
  return (
    <main className="pb-20 bg-max-ice min-h-screen">
      {/* Hero Header */}
      <section className="bg-max-blue text-white pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0 bg-slate-900">
          <img src="/images/veiculos_fundo.jpg" alt="Frota de Veículos" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <span className="text-max-orange font-bold tracking-widest uppercase text-sm mb-4 block">Gestão de Frota Inteligente</span>
          <h1 className="text-4xl md:text-6xl font-black text-white uppercase mb-6 leading-tight">Locação de Veículos<br /><span className="text-max-orange">Corporativos</span></h1>
          <p className="text-xl text-gray-300 max-w-3xl leading-relaxed">
            Terceirize sua frota com a Max Services e livre-se de custos ocultos com depreciação, impostos e manutenção. Foco total no seu core business enquanto nós garantimos sua mobilidade.
          </p>
        </div>
      </section>

      {/* Conteúdo Detalhado */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <h2 className="text-3xl font-black uppercase mb-6 text-max-blue">A Frota Perfeita para sua Operação</h2>
              <p className="text-lg text-max-slate mb-6 leading-relaxed">
                Oferecemos soluções modulares de mobilidade corporativa. Seja para a equipe comercial, executivos ou logística de cargas rápidas, nossa frota é nova, diversificada e mantida com rigorosos padrões de qualidade.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Car className="text-max-orange shrink-0 mt-1" />
                  <span className="text-max-slate"><strong>Frota Leve:</strong> Hatchs e sedans econômicos para equipes de vendas e técnicos em campo.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Car className="text-max-orange shrink-0 mt-1" />
                  <span className="text-max-slate"><strong>Frota Executiva:</strong> Veículos premium, blindados (sob demanda) e SUVs para diretoria.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Car className="text-max-orange shrink-0 mt-1" />
                  <span className="text-max-slate"><strong>Utilitários:</strong> Furgões, vans e picapes para transporte rápido e suporte operacional.</span>
                </li>
              </ul>
            </div>
            <div>
              <img src="/images/veiculos_operacao.jpg" alt="Carros corporativos" className="rounded-sm shadow-2xl border-4 border-white" />
            </div>
          </div>

          {/* Como Funciona */}
          <div className="bg-white p-10 md:p-16 rounded-sm shadow-lg mb-20">
            <h2 className="text-3xl font-black uppercase mb-12 text-center text-max-blue">Benefícios da Terceirização Max Services</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-max-ice rounded-full flex items-center justify-center mx-auto mb-6 text-max-royal">
                  <ShieldCheck size={32} />
                </div>
                <h3 className="text-xl font-bold uppercase mb-4 text-max-blue">Risco Zero</h3>
                <p className="text-max-slate">Gestão total de documentação, IPVA, seguro total e multas. A burocracia é 100% nossa.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-max-ice rounded-full flex items-center justify-center mx-auto mb-6 text-max-royal">
                  <Clock size={32} />
                </div>
                <h3 className="text-xl font-bold uppercase mb-4 text-max-blue">Veículo Reserva</h3>
                <p className="text-max-slate">Em caso de manutenção preventiva, corretiva ou sinistros, garantimos um veículo reserva imediato.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-max-ice rounded-full flex items-center justify-center mx-auto mb-6 text-max-royal">
                  <TrendingUp size={32} />
                </div>
                <h3 className="text-xl font-bold uppercase mb-4 text-max-blue">Redução de Custos</h3>
                <p className="text-max-slate">Despesas dedutíveis de IRPJ e sem o peso da depreciação do veículo no balanço da sua empresa.</p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-max-blue text-white p-12 text-center rounded-sm">
            <h2 className="text-3xl font-black uppercase mb-6">Pronto para renovar sua frota?</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto text-gray-300">Nossos especialistas estão prontos para desenhar o plano de mobilidade ideal para reduzir seus custos operacionais.</p>
            <a href="/#contact" className="inline-block bg-max-orange hover:bg-orange-600 px-8 py-4 font-bold uppercase tracking-wide rounded-sm transition-all transform hover:scale-105 shadow-xl">
              Solicitar Estudo de Frota
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
