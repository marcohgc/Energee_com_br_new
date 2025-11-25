/**
 * Integration Section destacando integrações de hardware
 */
const Integration = () => {
  const integrations = [
    {
      title: 'Inversores de Geração Solar',
      description: 'Integração completa com inversores solares para monitoramento e controle em tempo real',
      icon: (
        <svg className="w-16 h-16 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      features: [
        'Monitoramento de geração em tempo real',
        'Controle remoto de inversores',
        'Análise de performance e eficiência',
        'Alertas de falhas e manutenção',
      ],
      color: 'from-yellow-400 to-orange-500',
    },
    {
      title: 'Controladores de Biogás',
      description: 'Gestão completa de sistemas de biogás e biomassa com controle automatizado',
      icon: (
        <svg className="w-16 h-16 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      features: [
        'Monitoramento de produção de biogás',
        'Controle de temperatura e pressão',
        'Gestão de estoques de biomassa',
        'Otimização de processos de geração',
      ],
      color: 'from-green-400 to-emerald-600',
    },
    {
      title: 'Medidores de Energia',
      description: 'Medidores inteligentes para coleta de dados de consumo em tempo real',
      icon: (
        <svg className="w-16 h-16 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      features: [
        'Leitura automática de consumo',
        'Dados em tempo real via comunicação digital',
        'Histórico completo de consumo',
        'Integração com distribuidoras',
      ],
      color: 'from-blue-400 to-cyan-600',
    },
  ];

  return (
    <section id="integrations" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Integrações de Hardware
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Conecte-se com os principais dispositivos de geração e consumo de energia
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {integrations.map((integration, index) => (
            <div
              key={index}
              className="relative group p-8 rounded-2xl bg-white border-2 border-gray-200 hover:border-transparent hover:shadow-2xl transition-all duration-300"
            >
              {/* Gradient Background on Hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${integration.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`}
              ></div>

              <div className="relative z-10">
                {/* Icon */}
                <div className="flex justify-center mb-6">{integration.icon}</div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">
                  {integration.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 mb-6 text-center">{integration.description}</p>

                {/* Features */}
                <ul className="space-y-3">
                  {integration.features.map((feature, idx) => (
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
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Integration;

