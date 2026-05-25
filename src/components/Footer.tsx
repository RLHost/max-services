export function Footer() {
  return (
    <footer className="bg-[#0A1628] text-gray-400 py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <img 
              src="/logo.png" 
              alt="Max Services Logo" 
              className="h-10 w-auto mb-4 brightness-0 invert"
            />
            <p className="text-sm leading-relaxed max-w-xs">
              Soluções corporativas completas em locação de veículos, máquinas, manutenção e facilities para empresas que não podem parar.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-bold uppercase tracking-wider mb-4">Dados da Empresa</h4>
            <ul className="space-y-2 text-sm">
              <li>Razão Social: Max Services Soluções Corporativas Ltda</li>
              <li>CNPJ: 14.475.601/0001-65</li>
              <li>Sede: São Paulo, SP</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-wider mb-4">Links Rápidos</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#home" className="hover:text-max-orange transition-colors">Início</a></li>
              <li><a href="#services" className="hover:text-max-orange transition-colors">Soluções</a></li>
              <li><a href="#authority" className="hover:text-max-orange transition-colors">Estrutura</a></li>
              <li><a href="#contact" className="hover:text-max-orange transition-colors">Contato</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-800 text-sm text-center md:text-left flex flex-col md:flex-row justify-between items-center">
          <p>&copy; {new Date().getFullYear()} Max Services. Todos os direitos reservados.</p>
          <p className="mt-2 md:mt-0">
            Desenvolvido para alta performance por <a href="https://relvidigital.com.br/" target="_blank" rel="noopener noreferrer" className="hover:text-max-orange transition-colors font-semibold">Relvi Digital</a>.
          </p>
        </div>
      </div>
    </footer>
  );
}