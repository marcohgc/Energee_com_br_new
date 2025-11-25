import { useState, useEffect } from 'react';

/**
 * Header com navegação e logo Energee.IA
 */
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsMobileMenuOpen(false);
    }
  };

  const navItems = [
    { id: 'functions', label: 'Funcionalidades' },
    { id: 'integrations', label: 'Integrações' },
    { id: 'ai-features', label: 'IA' },
    { id: 'customers', label: 'Clientes' },
    { id: 'partners', label: 'Parceiros' },
    { id: 'pricing', label: 'Preços' },
    { id: 'contact', label: 'Contato' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div
            className="flex items-center cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-green-500 to-purple-600 bg-clip-text text-transparent">
              Energee<span className="text-purple-600">.IA</span>
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => scrollToSection('cta')}
              className="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all font-semibold"
            >
              Criar Conta
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-gray-700"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => scrollToSection('cta')}
              className="block w-full px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg text-center font-semibold"
            >
              Criar Conta
            </button>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;

