/**
 * AI Features Section destacando capacidades de IA
 */
const AIFeatures = () => {
  const aiFeatures = [
    {
      title: 'Otimização Energética Inteligente',
      description: 'IA analisa padrões de consumo e geração para sugerir melhorias e otimizações automáticas',
      icon: '🎯',
      details: [
        'Análise de padrões de consumo',
        'Sugestões de otimização automática',
        'Previsão de demanda energética',
        'Redução de custos automatizada',
      ],
    },
    {
      title: 'Melhores Ofertas Baseadas em IA',
      description: 'Algoritmos de IA analisam o mercado e encontram as melhores ofertas energéticas para você',
      icon: '💡',
      details: [
        'Análise de mercado em tempo real',
        'Comparação automática de tarifas',
        'Recomendações personalizadas',
        'Negociação automatizada',
      ],
    },
    {
      title: 'Análise Preditiva',
      description: 'Previsão de consumo e geração futura usando modelos de machine learning',
      icon: '🔮',
      details: [
        'Previsão de consumo mensal',
        'Análise de tendências de mercado',
        'Alertas de anomalias',
        'Planejamento estratégico',
      ],
    },
    {
      title: 'Recomendações Personalizadas',
      description: 'Sistema de IA que aprende com seus padrões e oferece recomendações únicas',
      icon: '🤖',
      details: [
        'Aprendizado contínuo',
        'Recomendações personalizadas',
        'Adaptação automática',
        'Melhoria contínua',
      ],
    },
  ];

  return (
    <section id="ai-features" className="py-20 bg-gradient-to-b from-purple-50 via-white to-blue-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #000 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      {/* Animated Elements */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 text-purple-700 rounded-full mb-6">
            <span className="w-2 h-2 bg-purple-600 rounded-full animate-pulse"></span>
            <span className="text-sm font-semibold">Inteligência Artificial</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Capacidades de IA
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Tecnologia de ponta em inteligência artificial para otimização energética
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {aiFeatures.map((feature, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-2xl bg-white border-2 border-gray-200 hover:border-purple-500 hover:shadow-2xl transition-all duration-300"
            >
              {/* Gradient Background on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300"></div>

              <div className="relative z-10">
                {/* Icon */}
                <div className="text-5xl mb-4">{feature.icon}</div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-gray-800 mb-3">{feature.title}</h3>

                {/* Description */}
                <p className="text-gray-600 mb-6">{feature.description}</p>

                {/* Details */}
                <ul className="space-y-3">
                  {feature.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <svg
                        className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                        />
                      </svg>
                      <span className="text-gray-700">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="inline-block p-8 rounded-2xl bg-gradient-to-r from-purple-600 to-pink-600 text-white">
            <h3 className="text-2xl font-bold mb-4">Pronto para experimentar IA em ação?</h3>
            <p className="text-lg mb-6 opacity-90">
              Comece a usar Energee.IA e descubra como a inteligência artificial pode otimizar sua gestão energética
            </p>
            <button
              onClick={() => {
                const element = document.getElementById('cta');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
              }}
              className="px-8 py-4 bg-white text-purple-600 rounded-lg hover:shadow-xl transition-all font-semibold"
            >
              Criar Conta Agora
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIFeatures;

