import { Building2, Sparkles, Tent, Users } from 'lucide-react';

export function Facilities() {
  return (
    <main className="pb-20 bg-max-ice min-h-screen">
      {/* Hero Header */}
      <section className="bg-max-blue text-white pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0 bg-slate-900">
          <img src="/images/facilities_fundo.jpg" alt="Edifício Corporativo" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <span className="text-max-orange font-bold tracking-widest uppercase text-sm mb-4 block">Gestão de Ambientes</span>
          <h1 className="text-4xl md:text-6xl font-black text-white uppercase mb-6 leading-tight">Gestão de <span className="text-max-orange">Facilities</span><br />e Estruturas</h1>
          <p className="text-xl text-gray-300 max-w-3xl leading-relaxed">
            Mantenha seu ambiente corporativo impecável e operacional. Terceirizamos profissionais qualificados de limpeza, apoio predial e oferecemos estruturas completas para eventos corporativos e canteiros de obras.
          </p>
        </div>
      </section>

      {/* Conteúdo Detalhado */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div className="order-2 lg:order-1">
              <img src="/images/facilities_operacao.jpg" alt="Equipe de Limpeza Comercial" className="rounded-sm shadow-2xl border-4 border-white" />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-black uppercase mb-6 text-max-blue">Cuidamos do seu Espaço</h2>
              <p className="text-lg text-max-slate mb-6 leading-relaxed">
                A gestão eficiente de facilities impacta diretamente na produtividade e bem-estar dos seus colaboradores. A Max Services atua de forma invisível e impecável, mantendo a operação da sua sede, galpão ou evento funcionando com maestria.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Building2 className="text-max-orange shrink-0 mt-1" />
                  <span className="text-max-slate"><strong>Limpeza Corporativa:</strong> Conservação de escritórios, higienização industrial e limpeza pós-obra pesada.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Building2 className="text-max-orange shrink-0 mt-1" />
                  <span className="text-max-slate"><strong>Locação de Estruturas:</strong> Tendas, galpões lonados, arquibancadas e sanitários químicos (banheiros VIP e standard).</span>
                </li>
                <li className="flex items-start gap-3">
                  <Building2 className="text-max-orange shrink-0 mt-1" />
                  <span className="text-max-slate"><strong>Apoio Predial e Canteiro:</strong> Recepção, portaria, zeladoria e montagem de refeitórios móveis para grandes obras.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Como Funciona */}
          <div className="bg-white p-10 md:p-16 rounded-sm shadow-lg mb-20">
            <h2 className="text-3xl font-black uppercase mb-12 text-center text-max-blue">Diferenciais em Facilities</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-max-ice rounded-full flex items-center justify-center mx-auto mb-6 text-max-royal">
                  <Sparkles size={32} />
                </div>
                <h3 className="text-xl font-bold uppercase mb-4 text-max-blue">Equipe Treinada</h3>
                <p className="text-max-slate">Profissionais rigorosamente selecionados, uniformizados e constantemente treinados nas melhores práticas de higiene e segurança.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-max-ice rounded-full flex items-center justify-center mx-auto mb-6 text-max-royal">
                  <Users size={32} />
                </div>
                <h3 className="text-xl font-bold uppercase mb-4 text-max-blue">Supervisão Contínua</h3>
                <p className="text-max-slate">Nossos líderes de equipe realizam inspeções e garantem o padrão de qualidade da entrega, para que você não precise se preocupar com a gestão operacional.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-max-ice rounded-full flex items-center justify-center mx-auto mb-6 text-max-royal">
                  <Tent size={32} />
                </div>
                <h3 className="text-xl font-bold uppercase mb-4 text-max-blue">Soluções Rápidas</h3>
                <p className="text-max-slate">Montagem e desmontagem ágil de estruturas temporárias para que seu evento ou obra ocorra dentro do cronograma.</p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-max-blue text-white p-12 text-center rounded-sm">
            <h2 className="text-3xl font-black uppercase mb-6">Terceirize o que não é o seu negócio</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto text-gray-300">Tire o peso do RH e foque no crescimento da sua empresa. Peça um orçamento de facilities.</p>
            <a href="/#contact" className="inline-block bg-max-orange hover:bg-orange-600 px-8 py-4 font-bold uppercase tracking-wide rounded-sm transition-all transform hover:scale-105 shadow-xl">
              Falar com Comercial
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
