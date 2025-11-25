import Header from './components/Header';
import Hero from './components/Hero';
import Functions from './components/Functions';
import Integration from './components/Integration';
import AIFeatures from './components/AIFeatures';
import Customers from './components/Customers';
import Distributers from './components/Distributers';
import Partners from './components/Partners';
import Contact from './components/Contact';
import Pricing from './components/Pricing';
import CTAForm from './components/CTAForm';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

/**
 * Componente principal da aplicação
 * Orquestra todas as seções com navegação suave
 */
function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header fixo com navegação */}
      <Header />

      {/* Hero Section - Impacto principal e proposta de valor */}
      <Hero />

      {/* Functions Section - Funcionalidades completas */}
      <Functions />

      {/* Integration Section - Integrações de hardware */}
      <Integration />

      {/* AI Features Section - Capacidades de IA */}
      <AIFeatures />

      {/* Customers Section - Tipos de clientes */}
      <Customers />

      {/* Distributers Section - Distribuidoras parceiras */}
      <Distributers />

      {/* Partners Section - Parceiros estratégicos */}
      <Partners />

      {/* Contact Section - Formulário de contato */}
      <Contact />

      {/* Pricing Section - Planos e preços */}
      <Pricing />

      {/* CTA Final - Criação de conta */}
      <CTAForm />

      {/* Footer - Informações e links */}
      <Footer />

      {/* Floating WhatsApp Button */}
      <FloatingWhatsApp />
    </div>
  );
}

export default App;
