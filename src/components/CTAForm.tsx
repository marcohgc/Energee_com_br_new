/**
 * CTA Final para criação de conta Energee.IA
 */
const CTAForm = () => {
  const handleCreateAccount = () => {
    // Placeholder para integração futura
    // Pode ser um link externo ou rota interna
    const signupUrl = 'https://app.energee.ia/signup'; // Placeholder
    window.open(signupUrl, '_blank');
  };

  const benefits = [
    'Gestão completa de energia',
    'Integração com inversores, controladores e medidores',
    'IA para otimização e melhores ofertas',
    'Cadastro automatizado',
    'Monitoramento em tempo real',
    'Relatórios avançados',
  ];

  return (
    <section id="cta" className="py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #fff 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      {/* Animated Elements */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-white/20 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-white/20 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-md text-white rounded-full mb-6">
            <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
            <span className="text-sm font-semibold">Comece Agora</span>
          </div>

          {/* Title */}
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Comece a Gestão Inteligente de Energia Agora
          </h2>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-2xl mx-auto">
            Experimente gratuitamente por 15 dias e descubra como a IA pode transformar sua gestão energética
          </p>

          {/* Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12 text-left max-w-3xl mx-auto">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-3 bg-white/10 backdrop-blur-md rounded-lg p-4">
                <svg
                  className="w-6 h-6 text-white flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-white font-medium">{benefit}</span>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <button
            onClick={handleCreateAccount}
            className="px-12 py-5 bg-white text-purple-600 text-xl font-bold rounded-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 mb-8"
          >
            Criar sua Conta Energee.IA Agora
          </button>

          {/* Pricing Info */}
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">Planos Disponíveis</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
              <div className="bg-white/10 rounded-lg p-4">
                <h4 className="text-lg font-semibold text-white mb-2">Gratuito</h4>
                <p className="text-white/90">Até 15 dias de teste</p>
                <p className="text-sm text-white/80 mt-2">Sem compromisso</p>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <h4 className="text-lg font-semibold text-white mb-2">Versão Completa</h4>
                <p className="text-white/90">5% da margem de contribuição</p>
                <p className="text-sm text-white/80 mt-2">Todos os recursos</p>
              </div>
            </div>
          </div>

          {/* Trust Badge */}
          <div className="mt-8 flex items-center justify-center gap-2 text-white/80">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            <span className="text-sm">Dados seguros e criptografados</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTAForm;

