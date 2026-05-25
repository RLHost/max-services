import React, { Suspense } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';

const PainSection = React.lazy(() => import('./components/PainSection').then(m => ({ default: m.PainSection })));
const Services = React.lazy(() => import('./components/Services').then(m => ({ default: m.Services })));
const Authority = React.lazy(() => import('./components/Authority').then(m => ({ default: m.Authority })));
const Contact = React.lazy(() => import('./components/Contact').then(m => ({ default: m.Contact })));
const Footer = React.lazy(() => import('./components/Footer').then(m => ({ default: m.Footer })));
const WhatsAppButton = React.lazy(() => import('./components/WhatsAppButton').then(m => ({ default: m.WhatsAppButton })));

function App() {
  return (
    <div className="min-h-screen bg-max-ice">
      <Navbar />
      <main>
        <Hero />
        <Suspense fallback={<div className="py-20 text-center text-max-blue">Carregando conteúdo...</div>}>
          <PainSection />
          <Services />
          <Authority />
          <Contact />
        </Suspense>
      </main>
      <Suspense fallback={<div></div>}>
        <Footer />
        <WhatsAppButton />
      </Suspense>
    </div>
  );
}

export default App;