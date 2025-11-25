/**
 * Distributers Section - Apresentação de distribuidoras parceiras
 */
const Distributers = () => {
  // Placeholder para distribuidoras - pode ser substituído por dados reais
  const distributers = [
    {
      name: 'Distribuidora A',
      region: 'Sudeste',
      description: 'Parceira estratégica no fornecimento de energia',
      logo: '⚡',
    },
    {
      name: 'Distribuidora B',
      region: 'Sul',
      description: 'Integração completa com sistema de faturamento',
      logo: '🔌',
    },
    {
      name: 'Distribuidora C',
      region: 'Nordeste',
      description: 'Parceira em soluções de energia renovável',
      logo: '🌞',
    },
    {
      name: 'Distribuidora D',
      region: 'Norte',
      description: 'Gestão integrada de energia',
      logo: '⚡',
    },
  ];

  return (
    <section id="distributers" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Distribuidoras Parceiras
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Trabalhamos com as principais distribuidoras de energia do país
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {distributers.map((distributer, index) => (
            <div
              key={index}
              className="group p-6 rounded-xl bg-white border-2 border-gray-200 hover:border-blue-500 hover:shadow-xl transition-all duration-300 text-center"
            >
              {/* Logo */}
              <div className="text-5xl mb-4">{distributer.logo}</div>

              {/* Name */}
              <h3 className="text-xl font-bold text-gray-800 mb-2">{distributer.name}</h3>

              {/* Region */}
              <p className="text-sm text-gray-500 mb-3">{distributer.region}</p>

              {/* Description */}
              <p className="text-sm text-gray-600">{distributer.description}</p>
            </div>
          ))}
        </div>

        {/* Map Section (Placeholder) */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-800 mb-8">Cobertura Nacional</h3>
          <div className="bg-gray-100 rounded-xl p-12 border-2 border-dashed border-gray-300">
            <p className="text-gray-600 mb-4">
              <svg
                className="w-16 h-16 mx-auto text-gray-400 mb-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </p>
            <p className="text-gray-600 font-medium">
              Mapa de cobertura será exibido aqui
            </p>
            <p className="text-sm text-gray-500 mt-2">
              Integração com mapa interativo pode ser adicionada posteriormente
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Distributers;

