import { Tractor, ShieldCheck, Wrench, BarChart } from 'lucide-react';

export function MaquinasEquipamentos() {
  return (
    <main className="pb-20 bg-max-ice min-h-screen">
      {/* Hero Header */}
      <section className="bg-max-blue text-white pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0 bg-slate-900">
          <img src="/images/maquinas_fundo.jpg" alt="Máquinas Pesadas" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <span className="text-max-orange font-bold tracking-widest uppercase text-sm mb-4 block">Potência Operacional</span>
          <h1 className="text-4xl md:text-6xl font-black text-white uppercase mb-6 leading-tight">Locação de <span className="text-max-orange">Máquinas</span><br />e Equipamentos</h1>
          <p className="text-xl text-gray-300 max-w-3xl leading-relaxed">
            Maquinário pesado de alta performance para construção civil, agronegócio e indústria. Alugue equipamentos modernos sem o peso da aquisição e manutenção.
          </p>
        </div>
      </section>

      {/* Conteúdo Detalhado */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div className="order-2 lg:order-1">
              <img src="/images/maquinas_operacao.jpg" alt="Trator em operação" className="rounded-sm shadow-2xl border-4 border-white" />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-black uppercase mb-6 text-max-blue">Produtividade Sem Interrupções</h2>
              <p className="text-lg text-max-slate mb-6 leading-relaxed">
                Sabemos que máquina parada é sinônimo de prejuízo. Nossa frota de linha amarela e equipamentos agrícolas passa por rigorosas inspeções preventivas para garantir que sua operação alcance a máxima eficiência do início ao fim do projeto.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Tractor className="text-max-orange shrink-0 mt-1" />
                  <span className="text-max-slate"><strong>Linha Amarela:</strong> Escavadeiras, retroescavadeiras, pás carregadeiras e rolos compactadores.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Tractor className="text-max-orange shrink-0 mt-1" />
                  <span className="text-max-slate"><strong>Agrícola:</strong> Tratores de alta potência, colheitadeiras e implementos agrícolas.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Tractor className="text-max-orange shrink-0 mt-1" />
                  <span className="text-max-slate"><strong>Industrial:</strong> Empilhadeiras (combustão e elétricas), plataformas elevatórias e geradores.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Vantagens */}
          <div className="bg-white p-10 md:p-16 rounded-sm shadow-lg mb-20">
            <h2 className="text-3xl font-black uppercase mb-12 text-center text-max-blue">Vantagens Competitivas</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-max-ice rounded-full flex items-center justify-center mx-auto mb-6 text-max-royal">
                  <Wrench size={32} />
                </div>
                <h3 className="text-xl font-bold uppercase mb-4 text-max-blue">Manutenção Inclusa</h3>
                <p className="text-max-slate">Nossa equipe técnica vai até o seu canteiro de obras ou fazenda para realizar revisões preventivas regulares, evitando quebras inesperadas.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-max-ice rounded-full flex items-center justify-center mx-auto mb-6 text-max-royal">
                  <ShieldCheck size={32} />
                </div>
                <h3 className="text-xl font-bold uppercase mb-4 text-max-blue">Substituição Rápida</h3>
                <p className="text-max-slate">Em caso de falha crítica não solucionável no local, providenciamos a substituição do equipamento no menor tempo hábil possível.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-max-ice rounded-full flex items-center justify-center mx-auto mb-6 text-max-royal">
                  <BarChart size={32} />
                </div>
                <h3 className="text-xl font-bold uppercase mb-4 text-max-blue">Capacidade Operacional</h3>
                <p className="text-max-slate">Aumente ou reduza a quantidade de máquinas conforme a sazonalidade e demanda do seu projeto, sem mobilizar capital.</p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-max-blue text-white p-12 text-center rounded-sm">
            <h2 className="text-3xl font-black uppercase mb-6">Equipe sua obra amanhã mesmo</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto text-gray-300">Temos o equipamento exato para o porte do seu desafio. Fale com nosso departamento comercial.</p>
            <a href="/#contact" className="inline-block bg-max-orange hover:bg-orange-600 px-8 py-4 font-bold uppercase tracking-wide rounded-sm transition-all transform hover:scale-105 shadow-xl">
              Consultar Disponibilidade
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
