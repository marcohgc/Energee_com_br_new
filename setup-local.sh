#!/bin/bash
# Script para setup inicial na máquina local
# Uso: ./setup-local.sh

set -e

echo "🚀 Configurando ambiente de desenvolvimento local..."
echo ""

# Cores
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m'

# Verificar se Node.js está instalado
if ! command -v node &> /dev/null; then
    echo -e "${RED}❌ Node.js não encontrado!${NC}"
    echo "Por favor, instale Node.js: https://nodejs.org/"
    exit 1
fi

echo -e "${GREEN}✅ Node.js encontrado: $(node --version)${NC}"

# Verificar se npm está instalado
if ! command -v npm &> /dev/null; then
    echo -e "${RED}❌ npm não encontrado!${NC}"
    exit 1
fi

echo -e "${GREEN}✅ npm encontrado: $(npm --version)${NC}"
echo ""

# Verificar se Git está instalado
if ! command -v git &> /dev/null; then
    echo -e "${RED}❌ Git não encontrado!${NC}"
    echo "Por favor, instale Git: https://git-scm.com/"
    exit 1
fi

echo -e "${GREEN}✅ Git encontrado: $(git --version)${NC}"
echo ""

# Verificar se já está em um repositório Git
if [ -d ".git" ]; then
    echo -e "${YELLOW}📂 Repositório Git já inicializado${NC}"
    
    # Verificar remote
    if git remote get-url origin &> /dev/null; then
        echo -e "${GREEN}✅ Remote configurado: $(git remote get-url origin)${NC}"
    else
        echo -e "${YELLOW}⚠️  Remote não configurado${NC}"
        read -p "Deseja configurar o remote? (s/N): " -n 1 -r
        echo
        if [[ $REPLY =~ ^[Ss]$ ]]; then
            git remote add origin git@github.com:PedroRago10/energee-lp.git
            echo -e "${GREEN}✅ Remote configurado!${NC}"
        fi
    fi
else
    echo -e "${YELLOW}⚠️  Repositório Git não encontrado${NC}"
    read -p "Deseja inicializar Git? (s/N): " -n 1 -r
    echo
    if [[ $REPLY =~ ^[Ss]$ ]]; then
        git init
        git remote add origin git@github.com:PedroRago10/energee-lp.git
        echo -e "${GREEN}✅ Git inicializado!${NC}"
    fi
fi
echo ""

# Instalar dependências
echo -e "${YELLOW}📦 Instalando dependências...${NC}"
if npm install; then
    echo -e "${GREEN}✅ Dependências instaladas!${NC}"
else
    echo -e "${RED}❌ Erro ao instalar dependências!${NC}"
    exit 1
fi
echo ""

# Verificar se .env existe
if [ ! -f ".env" ]; then
    echo -e "${YELLOW}⚠️  Arquivo .env não encontrado${NC}"
    echo "Criando .env de exemplo..."
    cat > .env << EOF
# Configurações de desenvolvimento
VITE_API_URL=http://localhost:3000
VITE_ENV=development
EOF
    echo -e "${GREEN}✅ Arquivo .env criado!${NC}"
fi
echo ""

# Resumo
echo -e "${GREEN}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo -e "${GREEN}✅ Setup concluído!${NC}"
echo -e "${GREEN}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo ""
echo "🚀 Próximos passos:"
echo ""
echo "1. Iniciar servidor de desenvolvimento:"
echo "   npm run dev"
echo ""
echo "2. Acessar no navegador:"
echo "   http://localhost:3003"
echo ""
echo "3. Criar uma branch para desenvolver:"
echo "   git checkout -b feature/nome-da-feature"
echo ""

