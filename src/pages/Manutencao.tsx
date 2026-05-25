import { Wrench, Settings, SearchCheck, CheckCircle2 } from 'lucide-react';

export function Manutencao() {
  return (
    <main className="pb-20 bg-max-ice min-h-screen">
      {/* Hero Header */}
      <section className="bg-max-blue text-white pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0 bg-slate-900">
          <img src="https://images.pexels.com/photos/3806249/pexels-photo-3806249.jpeg?auto=compress&cs=tinysrgb&w=2000" alt="Oficina Mecânica" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <span className="text-max-orange font-bold tracking-widest uppercase text-sm mb-4 block">Centro de Alta Tecnologia</span>
          <h1 className="text-4xl md:text-6xl font-black text-white uppercase mb-6 leading-tight">Manutenção<br /><span className="text-max-orange">Especializada</span></h1>
          <p className="text-xl text-gray-300 max-w-3xl leading-relaxed">
            Diagnóstico preciso, peças originais e equipe treinada pelos fabricantes. Nossa infraestrutura de oficina é capaz de restaurar a produtividade da sua frota e maquinário pesado rapidamente.
          </p>
        </div>
      </section>

      {/* Conteúdo Detalhado */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <h2 className="text-3xl font-black uppercase mb-6 text-max-blue">Prevenção que gera Lucro</h2>
              <p className="text-lg text-max-slate mb-6 leading-relaxed">
                Manutenção corretiva não planejada é o maior ralo de dinheiro de qualquer operação logística ou industrial. Nosso foco é estabelecer planos de manutenção preditiva e preventiva que evitem a quebra catastrófica de componentes.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Wrench className="text-max-orange shrink-0 mt-1" />
                  <span className="text-max-slate"><strong>Mecânica Pesada:</strong> Retífica de motores Diesel, revisão de transmissões e sistemas hidráulicos complexos.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Wrench className="text-max-orange shrink-0 mt-1" />
                  <span className="text-max-slate"><strong>Mecânica Leve e Eletrônica:</strong> Diagnóstico computadorizado, injeção eletrônica, freios e suspensão de veículos comerciais.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Wrench className="text-max-orange shrink-0 mt-1" />
                  <span className="text-max-slate"><strong>Funilaria e Pintura:</strong> Estufa pressurizada e cabine de pintura de alta performance para restauração estética rápida.</span>
                </li>
              </ul>
            </div>
            <div>
              <img src="https://images.unsplash.com/photo-1504222490345-c075b6008014?auto=format&fit=crop&q=80&w=1000" alt="Mecânico analisando motor" className="rounded-sm shadow-2xl border-4 border-white" />
            </div>
          </div>

          {/* Como Funciona */}
          <div className="bg-white p-10 md:p-16 rounded-sm shadow-lg mb-20">
            <h2 className="text-3xl font-black uppercase mb-12 text-center text-max-blue">Nosso Processo de Excelência</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-max-ice rounded-full flex items-center justify-center mx-auto mb-6 text-max-royal">
                  <SearchCheck size={32} />
                </div>
                <h3 className="text-xl font-bold uppercase mb-4 text-max-blue">Diagnóstico</h3>
                <p className="text-max-slate">Leitura completa dos módulos eletrônicos e avaliação física rigorosa para encontrar a causa raiz, não apenas os sintomas.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-max-ice rounded-full flex items-center justify-center mx-auto mb-6 text-max-royal">
                  <Settings size={32} />
                </div>
                <h3 className="text-xl font-bold uppercase mb-4 text-max-blue">Intervenção Técnica</h3>
                <p className="text-max-slate">Substituição de peças com garantia de procedência e execução de serviços seguindo rigorosamente os manuais dos fabricantes.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-max-ice rounded-full flex items-center justify-center mx-auto mb-6 text-max-royal">
                  <CheckCircle2 size={32} />
                </div>
                <h3 className="text-xl font-bold uppercase mb-4 text-max-blue">Quality Assurance</h3>
                <p className="text-max-slate">Testes em bancada e testes de rodagem para garantir que o equipamento seja entregue em plenas condições operacionais.</p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-max-blue text-white p-12 text-center rounded-sm">
            <h2 className="text-3xl font-black uppercase mb-6">Traga sua frota para a Max Services</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto text-gray-300">Oferecemos pacotes de manutenção para frotas terceiras. Agende uma visita técnica e conheça nossa estrutura.</p>
            <a href="/#contact" className="inline-block bg-max-orange hover:bg-orange-600 px-8 py-4 font-bold uppercase tracking-wide rounded-sm transition-all transform hover:scale-105 shadow-xl">
              Agendar Manutenção
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
