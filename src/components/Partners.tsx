/**
 * Partners Section - Seção de parceiros estratégicos
 */
const Partners = () => {
  const partners = [
    {
      name: 'Parceiro Tecnológico A',
      category: 'Tecnologia',
      description: 'Parceiro em soluções de IA e análise de dados',
      logo: '🤖',
      type: 'tech',
    },
    {
      name: 'Parceiro Hardware B',
      category: 'Hardware',
      description: 'Fabricante de inversores solares',
      logo: '⚡',
      type: 'hardware',
    },
    {
      name: 'Parceiro Hardware C',
      category: 'Hardware',
      description: 'Fabricante de controladores de biogás',
      logo: '🌱',
      type: 'hardware',
    },
    {
      name: 'Parceiro Hardware D',
      category: 'Hardware',
      description: 'Fabricante de medidores inteligentes',
      logo: '📊',
      type: 'hardware',
    },
    {
      name: 'Parceiro Tecnológico E',
      category: 'Tecnologia',
      description: 'Parceiro em soluções de nuvem e segurança',
      logo: '☁️',
      type: 'tech',
    },
    {
      name: 'Parceiro Carregadores',
      category: 'Hardware',
      description: 'Fabricante de carregadores elétricos',
      logo: '🚗',
      type: 'hardware',
    },
  ];

  const techPartners = partners.filter((p) => p.type === 'tech');
  const hardwarePartners = partners.filter((p) => p.type === 'hardware');

  return (
    <section id="partners" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Nossos Parceiros
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Trabalhamos com os melhores parceiros tecnológicos e de hardware
          </p>
        </div>

        {/* Tech Partners */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">
            Parceiros Tecnológicos
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {techPartners.map((partner, index) => (
              <div
                key={index}
                className="group p-6 rounded-xl bg-gradient-to-br from-blue-50 to-purple-50 border-2 border-gray-200 hover:border-purple-500 hover:shadow-xl transition-all duration-300"
              >
                <div className="text-4xl mb-4">{partner.logo}</div>
                <h4 className="text-xl font-bold text-gray-800 mb-2">{partner.name}</h4>
                <p className="text-sm text-gray-500 mb-3">{partner.category}</p>
                <p className="text-sm text-gray-600">{partner.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Hardware Partners */}
        <div>
          <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">
            Parceiros de Hardware
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {hardwarePartners.map((partner, index) => (
              <div
                key={index}
                className="group p-6 rounded-xl bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-gray-200 hover:border-green-500 hover:shadow-xl transition-all duration-300 text-center"
              >
                <div className="text-4xl mb-4">{partner.logo}</div>
                <h4 className="text-lg font-bold text-gray-800 mb-2">{partner.name}</h4>
                <p className="text-sm text-gray-500 mb-3">{partner.category}</p>
                <p className="text-sm text-gray-600">{partner.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mt-16 text-center">
          <div className="inline-block p-8 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 text-white">
            <h3 className="text-2xl font-bold mb-4">Benefícios das Parcerias</h3>
            <p className="text-lg mb-6 opacity-90">
              Parcerias estratégicas garantem integração completa, suporte técnico e inovação constante
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-left">
              <div className="bg-white/10 rounded-lg p-4">
                <h4 className="font-semibold mb-2">Integração Completa</h4>
                <p className="text-sm opacity-90">
                  Integração nativa com hardware e software dos parceiros
                </p>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <h4 className="font-semibold mb-2">Suporte Técnico</h4>
                <p className="text-sm opacity-90">
                  Suporte especializado dos fabricantes e parceiros
                </p>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <h4 className="font-semibold mb-2">Inovação Contínua</h4>
                <p className="text-sm opacity-90">
                  Acesso às últimas tecnologias e atualizações
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;

