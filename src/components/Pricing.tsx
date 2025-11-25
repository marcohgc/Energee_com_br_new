/**
 * Pricing Section - Seção de preços e planos
 */
const Pricing = () => {
  const plans = [
    {
      name: 'Gratuito',
      price: 'R$ 0',
      period: 'até 15 dias',
      description: 'Teste completo da plataforma sem compromisso',
      features: [
        'Acesso a todas as funcionalidades',
        'Integração com hardware',
        'IA para otimização',
        'Monitoramento em tempo real',
        'Relatórios básicos',
        'Suporte por email',
      ],
      cta: 'Começar Teste Grátis',
      popular: false,
      color: 'from-gray-500 to-gray-600',
    },
    {
      name: 'Versão Completa',
      price: '5%',
      period: 'da margem de contribuição',
      description: 'Acesso completo a todos os recursos e suporte prioritário',
      features: [
        'Todas as funcionalidades do plano gratuito',
        'Integração completa com hardware',
        'IA avançada para otimização',
        'Monitoramento em tempo real',
        'Relatórios avançados e personalizados',
        'Análise preditiva',
        'Suporte prioritário 24/7',
        'Gestão de múltiplos clientes',
        'API completa',
        'Treinamento dedicado',
      ],
      cta: 'Criar Conta Agora',
      popular: true,
      color: 'from-blue-600 to-purple-600',
    },
  ];

  const scrollToCTA = () => {
    const element = document.getElementById('cta');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="pricing" className="py-20 bg-gradient-to-b from-white via-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Planos e Preços
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Escolha o plano ideal para sua gestão energética
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative p-8 rounded-2xl bg-white border-2 ${
                plan.popular
                  ? 'border-blue-500 shadow-2xl scale-105'
                  : 'border-gray-200 hover:border-gray-300'
              } transition-all duration-300`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-semibold rounded-full">
                  Mais Popular
                </div>
              )}

              {/* Plan Name */}
              <h3 className="text-2xl font-bold text-gray-800 mb-2">{plan.name}</h3>

              {/* Price */}
              <div className="mb-4">
                <span className="text-4xl font-bold text-gray-800">{plan.price}</span>
                {plan.period && (
                  <span className="text-gray-600 ml-2">/{plan.period}</span>
                )}
              </div>

              {/* Description */}
              <p className="text-gray-600 mb-6">{plan.description}</p>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <svg
                      className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0"
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
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <button
                onClick={scrollToCTA}
                className={`w-full px-6 py-4 rounded-lg font-semibold transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-xl hover:scale-105'
                    : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">
            Não tem certeza? Experimente gratuitamente por 15 dias sem compromisso.
          </p>
          <button
            onClick={scrollToCTA}
            className="text-blue-600 hover:text-blue-700 font-semibold underline"
          >
            Começar agora →
          </button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;

