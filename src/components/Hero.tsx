/**
 * Hero Section com destaque para IA e integrações
 */
const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #000 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      {/* Animated Circles */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
      <div className="absolute top-40 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge IA */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 text-purple-700 rounded-full mb-6 animate-fade-in">
            <span className="w-2 h-2 bg-purple-600 rounded-full animate-pulse"></span>
            <span className="text-sm font-semibold">Powered by IA</span>
          </div>

          {/* Main Title */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-green-500 to-purple-600 bg-clip-text text-transparent animate-fade-in-up">
            Energee<span className="text-purple-600">.IA</span>
          </h1>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-6 animate-fade-in-up animation-delay-200">
            Gestão de Energia Inteligente
          </h2>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in-up animation-delay-400">
            Plataforma completa com integração de hardware e IA para otimização energética.
            <br />
            <span className="text-gray-700 font-semibold">
              Integração com inversores solares, controladores de biogás e medidores + IA para melhores ofertas.
            </span>
          </p>

          {/* Integration Highlights */}
          <div className="flex flex-wrap justify-center gap-4 mb-10 animate-fade-in-up animation-delay-600">
            <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg shadow-md border border-gray-200">
              <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
              <span className="text-sm font-medium text-gray-700">Inversores Solares</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg shadow-md border border-gray-200">
              <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <span className="text-sm font-medium text-gray-700">Controladores Biogás</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg shadow-md border border-gray-200">
              <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
              <span className="text-sm font-medium text-gray-700">Medidores de Energia</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up animation-delay-800">
            <button
              onClick={() => scrollToSection('cta')}
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-lg font-semibold rounded-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 w-full sm:w-auto"
            >
              Criar Conta Agora
            </button>
            <button
              onClick={() => scrollToSection('functions')}
              className="px-8 py-4 bg-white text-gray-700 text-lg font-semibold rounded-lg border-2 border-gray-300 hover:border-blue-600 hover:text-blue-600 transition-all duration-300 w-full sm:w-auto"
            >
              Saiba Mais
            </button>
          </div>

          {/* Scroll Indicator */}
          <div className="mt-16 animate-bounce">
            <svg
              className="w-6 h-6 mx-auto text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

