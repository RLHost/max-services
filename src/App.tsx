import React, { Suspense, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';

// Lazy loading das páginas internas
const LocacaoVeiculos = React.lazy(() => import('./pages/LocacaoVeiculos').then(m => ({ default: m.LocacaoVeiculos })));
const MaquinasEquipamentos = React.lazy(() => import('./pages/MaquinasEquipamentos').then(m => ({ default: m.MaquinasEquipamentos })));
const Manutencao = React.lazy(() => import('./pages/Manutencao').then(m => ({ default: m.Manutencao })));
const Facilities = React.lazy(() => import('./pages/Facilities').then(m => ({ default: m.Facilities })));

const Footer = React.lazy(() => import('./components/Footer').then(m => ({ default: m.Footer })));
const WhatsAppButton = React.lazy(() => import('./components/WhatsAppButton').then(m => ({ default: m.WhatsAppButton })));

// ScrollToTop resolve o problema da página abrir no meio ao trocar de rota
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-max-ice flex flex-col">
        <Navbar />
        <div className="flex-grow">
          <Suspense fallback={<div className="min-h-screen flex items-center justify-center text-max-blue">Carregando...</div>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/solucoes/locacao-veiculos" element={<LocacaoVeiculos />} />
              <Route path="/solucoes/maquinas-equipamentos" element={<MaquinasEquipamentos />} />
              <Route path="/solucoes/manutencao" element={<Manutencao />} />
              <Route path="/solucoes/facilities" element={<Facilities />} />
            </Routes>
          </Suspense>
        </div>
        <Suspense fallback={<div></div>}>
          <Footer />
          <WhatsAppButton />
        </Suspense>
      </div>
    </BrowserRouter>
  );
}

export default App;