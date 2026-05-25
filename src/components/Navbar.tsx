import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    setIsDropdownOpen(false);

    if (location.pathname !== '/') {
      navigate('/#' + id);
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          const headerOffset = 80;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
          window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
        }
      }, 100);
      return;
    }

    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        const headerOffset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }, 50);
  };

  const navLinks = [
    { name: 'Início', id: 'home' },
    { name: 'Nossa Estrutura', id: 'authority' },
    { name: 'Contato', id: 'contact' }
  ];

  const solutions = [
    { name: 'Locação de Veículos', path: '/solucoes/locacao-veiculos' },
    { name: 'Máquinas e Equipamentos', path: '/solucoes/maquinas-equipamentos' },
    { name: 'Manutenção Especializada', path: '/solucoes/manutencao' },
    { name: 'Facilities e Estruturas', path: '/solucoes/facilities' }
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-3' : 'bg-max-blue/90 backdrop-blur-sm py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => scrollToSection('home')}>
            <img 
              src="/logo.png" 
              alt="Max Services Logo" 
              className={`h-10 w-auto transition-all duration-300 ${!scrolled ? 'brightness-0 invert' : ''}`}
            />
            <div className={`flex flex-col text-xl leading-none font-black tracking-tighter ${scrolled ? 'text-max-blue' : 'text-white'}`}>
              <span>MAX</span>
              <span className={scrolled ? 'text-max-royal' : 'text-max-orange'}>SERVICES</span>
            </div>
          </div>
          
          <div className="hidden md:flex space-x-8 items-center">
            <button
              onClick={() => scrollToSection('home')}
              className={`font-semibold text-sm uppercase tracking-wider hover:text-max-orange transition-colors ${scrolled ? 'text-max-blue' : 'text-white'}`}
            >
              Início
            </button>

            {/* Dropdown Soluções */}
            <div 
              className="relative"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <button
                onClick={() => scrollToSection('services')}
                className={`flex items-center gap-1 font-semibold text-sm uppercase tracking-wider hover:text-max-orange transition-colors ${scrolled ? 'text-max-blue' : 'text-white'}`}
              >
                Soluções
                <ChevronDown size={16} />
              </button>

              <AnimatePresence>
                {isDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-0 mt-2 w-64 bg-white shadow-xl rounded-sm py-2 border border-gray-100 overflow-hidden"
                  >
                    {solutions.map((solution) => (
                      <Link
                        key={solution.path}
                        to={solution.path}
                        onClick={() => setIsDropdownOpen(false)}
                        className="block px-4 py-3 text-sm font-bold text-max-blue hover:bg-gray-50 hover:text-max-orange transition-colors"
                      >
                        {solution.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <button
              onClick={() => scrollToSection('authority')}
              className={`font-semibold text-sm uppercase tracking-wider hover:text-max-orange transition-colors ${scrolled ? 'text-max-blue' : 'text-white'}`}
            >
              Nossa Estrutura
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className={`font-semibold text-sm uppercase tracking-wider hover:text-max-orange transition-colors ${scrolled ? 'text-max-blue' : 'text-white'}`}
            >
              Contato
            </button>

            <button 
              onClick={() => scrollToSection('contact')}
              className="bg-max-orange hover:bg-orange-600 text-white px-6 py-2 rounded-sm font-bold uppercase text-sm transition-all transform hover:scale-105 shadow-lg"
            >
              Portal do Cliente
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className={scrolled ? 'text-max-blue' : 'text-white'}>
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden overflow-hidden bg-white shadow-xl border-t border-gray-100"
          >
            <div className="px-4 py-4 space-y-1">
              <button
                onClick={() => scrollToSection('home')}
                className="block w-full text-left px-3 py-3 text-max-blue font-bold uppercase border-b border-gray-100 hover:bg-gray-50"
              >
                Início
              </button>
              
              <div className="border-b border-gray-100">
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="flex w-full items-center justify-between px-3 py-3 text-max-blue font-bold uppercase hover:bg-gray-50"
                >
                  Soluções
                  <ChevronDown size={16} className={`transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {isDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="bg-gray-50 overflow-hidden"
                    >
                      {solutions.map((solution) => (
                        <Link
                          key={solution.path}
                          to={solution.path}
                          onClick={() => setIsOpen(false)}
                          className="block px-6 py-3 text-sm font-bold text-max-slate hover:text-max-orange transition-colors"
                        >
                          - {solution.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <button
                onClick={() => scrollToSection('authority')}
                className="block w-full text-left px-3 py-3 text-max-blue font-bold uppercase border-b border-gray-100 hover:bg-gray-50"
              >
                Nossa Estrutura
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="block w-full text-left px-3 py-3 text-max-blue font-bold uppercase hover:bg-gray-50"
              >
                Contato
              </button>

              <button 
                onClick={() => scrollToSection('contact')}
                className="w-full mt-4 bg-max-orange text-white px-3 py-4 rounded-sm font-bold uppercase text-center"
              >
                Portal do Cliente
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}