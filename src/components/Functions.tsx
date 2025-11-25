/**
 * Functions Section com cards das funcionalidades principais
 */
const Functions = () => {
  const functions = [
    {
      icon: '⚡',
      title: 'Integração com Hardware',
      description: 'Integração completa com inversores solares, controladores de biogás e medidores de energia',
      features: ['Inversores solares', 'Controladores de biogás', 'Medidores inteligentes'],
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: '🤖',
      title: 'IA para Otimização Energética',
      description: 'Algoritmos de IA analisam dados e sugerem melhorias para otimizar o consumo energético',
      features: ['Análise preditiva', 'Otimização automática', 'Recomendações inteligentes'],
      color: 'from-purple-500 to-pink-500',
      highlight: true,
    },
    {
      icon: '👥',
      title: 'Gestão de Beneficiários',
      description: 'Lista completa de beneficiários com controle de acesso e permissões',
      features: ['Cadastro automatizado', 'Controle de acesso', 'Gestão centralizada'],
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: '💰',
      title: 'Definição de Valores',
      description: 'Configure valores personalizados para consumidores, parceiros e geradores',
      features: ['Tarifas personalizadas', 'Múltiplos perfis', 'Gestão financeira'],
      color: 'from-yellow-500 to-orange-500',
    },
    {
      icon: '💳',
      title: 'Pagamento e Cobrança Automatizados',
      description: 'Sistema automatizado de pagamentos e cobranças integrado',
      features: ['Cobrança automática', 'Múltiplos métodos', 'Gestão de inadimplência'],
      color: 'from-indigo-500 to-blue-500',
    },
    {
      icon: '📊',
      title: 'Negativação Inteligente',
      description: 'Gestão inteligente de inadimplência com negativação automática',
      features: ['Negativação automática', 'Alertas personalizados', 'Gestão de recuperação'],
      color: 'from-red-500 to-rose-500',
    },
    {
      icon: '🔄',
      title: 'Cadastro Automatizado',
      description: 'Cadastro automatizado de clientes e parceiros com validação',
      features: ['Cadastro rápido', 'Validação automática', 'Integração com distribuidoras'],
      color: 'from-teal-500 to-cyan-500',
    },
    {
      icon: '📡',
      title: 'Monitoramento em Tempo Real',
      description: 'Acompanhe consumo e geração de energia em tempo real',
      features: ['Dashboard em tempo real', 'Alertas instantâneos', 'Histórico completo'],
      color: 'from-violet-500 to-purple-500',
    },
    {
      icon: '📈',
      title: 'Análise e Relatórios Avançados',
      description: 'Relatórios detalhados e análises avançadas de consumo e geração',
      features: ['Relatórios personalizados', 'Análise de tendências', 'Exportação de dados'],
      color: 'from-amber-500 to-yellow-500',
    },
    {
      icon: '🔌',
      title: 'Gestão de Energia Solar',
      description: 'Gestão completa de sistemas de energia solar',
      features: ['Monitoramento de geração', 'Otimização de produção', 'Gestão de créditos'],
      color: 'from-sky-500 to-blue-500',
    },
    {
      icon: '🌱',
      title: 'Gestão de Biogás',
      description: 'Controle completo de sistemas de biogás e biomassa',
      features: ['Monitoramento de produção', 'Gestão de estoques', 'Otimização de processos'],
      color: 'from-lime-500 to-green-500',
    },
    {
      icon: '🚗',
      title: 'Integração com Carregadores Elétricos',
      description: 'Gestão de carregadores de veículos elétricos integrada',
      features: ['Monitoramento de carregamento', 'Gestão de tarifas', 'Otimização de horários'],
      color: 'from-emerald-500 to-teal-500',
    },
  ];

  return (
    <section id="functions" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Funcionalidades Completas
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Uma plataforma completa para gestão inteligente de energia com integração de hardware e IA
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {functions.map((func, index) => (
            <div
              key={index}
              className={`group relative p-6 rounded-xl bg-white border-2 border-gray-200 hover:border-transparent hover:shadow-2xl transition-all duration-300 ${
                func.highlight ? 'md:col-span-2 lg:col-span-1 ring-2 ring-purple-500' : ''
              }`}
            >
              {/* Gradient Background on Hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${func.color} opacity-0 group-hover:opacity-5 rounded-xl transition-opacity duration-300`}
              ></div>

              {/* Icon */}
              <div className="text-4xl mb-4">{func.icon}</div>

              {/* Title */}
              <h3 className="text-xl font-bold text-gray-800 mb-3">{func.title}</h3>

              {/* Description */}
              <p className="text-gray-600 mb-4">{func.description}</p>

              {/* Features */}
              <ul className="space-y-2">
                {func.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                    <svg
                      className="w-4 h-4 text-green-500"
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
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Highlight Badge */}
              {func.highlight && (
                <div className="absolute top-4 right-4 px-3 py-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-semibold rounded-full">
                  Destaque
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Functions;

