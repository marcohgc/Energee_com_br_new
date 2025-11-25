/**
 * Customers Section com cards para cada tipo de cliente
 */
const Customers = () => {
  const customerTypes = [
    {
      title: 'Empresas',
      description: 'Gestão energética empresarial completa com monitoramento e otimização',
      icon: '🏢',
      benefits: [
        'Redução de custos energéticos',
        'Monitoramento multi-unidade',
        'Relatórios executivos',
        'Otimização automática',
      ],
      useCase: 'Empresas de todos os portes que buscam reduzir custos e otimizar consumo energético',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Redes de Lojas',
      description: 'Controle centralizado de energia para múltiplas unidades',
      icon: '🏪',
      benefits: [
        'Controle centralizado',
        'Comparação entre unidades',
        'Alertas de anomalias',
        'Gestão de contratos',
      ],
      useCase: 'Redes de varejo que precisam monitorar e otimizar consumo em múltiplas lojas',
      color: 'from-green-500 to-emerald-500',
    },
    {
      title: 'Gestores de Energia',
      description: 'Plataforma completa para profissionais de gestão energética',
      icon: '👨‍💼',
      benefits: [
        'Dashboard completo',
        'Análises avançadas',
        'Gestão de múltiplos clientes',
        'Relatórios personalizados',
      ],
      useCase: 'Consultores e gestores que gerenciam energia para múltiplos clientes',
      color: 'from-purple-500 to-pink-500',
    },
    {
      title: 'Cooperativas de Energia',
      description: 'Gestão coletiva de energia com distribuição inteligente',
      icon: '🤝',
      benefits: [
        'Gestão coletiva',
        'Distribuição inteligente',
        'Transparência total',
        'Democracia energética',
      ],
      useCase: 'Cooperativas que buscam otimizar a distribuição e gestão de energia entre membros',
      color: 'from-yellow-500 to-orange-500',
    },
    {
      title: 'Investidores',
      description: 'Análise e ROI para investimentos em energia renovável',
      icon: '📈',
      benefits: [
        'Análise de ROI',
        'Projeções financeiras',
        'Comparação de investimentos',
        'Gestão de portfólio',
      ],
      useCase: 'Investidores que buscam maximizar retorno em projetos de energia renovável',
      color: 'from-indigo-500 to-blue-500',
    },
  ];

  return (
    <section id="customers" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Ideal para
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Uma solução completa para diferentes necessidades de gestão energética
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {customerTypes.map((customer, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-2xl bg-white border-2 border-gray-200 hover:border-transparent hover:shadow-2xl transition-all duration-300"
            >
              {/* Gradient Background on Hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${customer.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`}
              ></div>

              <div className="relative z-10">
                {/* Icon */}
                <div className="text-5xl mb-4">{customer.icon}</div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-gray-800 mb-3">{customer.title}</h3>

                {/* Description */}
                <p className="text-gray-600 mb-6">{customer.description}</p>

                {/* Benefits */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-700 mb-3 uppercase tracking-wide">
                    Benefícios:
                  </h4>
                  <ul className="space-y-2">
                    {customer.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                        <svg
                          className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0"
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
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Use Case */}
                <div className="pt-4 border-t border-gray-200">
                  <p className="text-xs text-gray-500 italic">{customer.useCase}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Customers;

