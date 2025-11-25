#!/bin/bash

# Script para testar o site Energee.IA

echo "=========================================="
echo "  Testando Site Energee.IA"
echo "=========================================="
echo ""

# Cores
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Verificar se estamos no diretório correto
if [ ! -f "package.json" ]; then
    echo -e "${RED}❌ Erro: package.json não encontrado${NC}"
    echo "Execute este script dentro do diretório: /var/www/html/energee_com_br_new"
    exit 1
fi

echo -e "${YELLOW}📦 Verificando dependências...${NC}"

# Verificar se node_modules existe
if [ ! -d "node_modules" ]; then
    echo -e "${YELLOW}⚠️  Dependências não instaladas. Instalando...${NC}"
    npm install
    if [ $? -ne 0 ]; then
        echo -e "${RED}❌ Erro ao instalar dependências${NC}"
        exit 1
    fi
    echo -e "${GREEN}✅ Dependências instaladas${NC}"
else
    echo -e "${GREEN}✅ Dependências já instaladas${NC}"
fi

echo ""
echo -e "${YELLOW}🔍 Verificando porta 3003...${NC}"

# Verificar se a porta 3003 está em uso
if lsof -ti:3003 > /dev/null 2>&1; then
    echo -e "${YELLOW}⚠️  Porta 3003 já está em uso${NC}"
    read -p "Deseja parar o processo existente? (s/n) " -n 1 -r
    echo
    if [[ $REPLY =~ ^[Ss]$ ]]; then
        echo -e "${YELLOW}🛑 Parando processo na porta 3003...${NC}"
        kill -9 $(lsof -ti:3003) 2>/dev/null
        sleep 2
        echo -e "${GREEN}✅ Processo parado${NC}"
    else
        echo -e "${RED}❌ Não é possível iniciar o servidor com a porta ocupada${NC}"
        exit 1
    fi
else
    echo -e "${GREEN}✅ Porta 3003 disponível${NC}"
fi

echo ""
echo -e "${GREEN}🚀 Iniciando servidor de desenvolvimento...${NC}"
echo ""
echo "=========================================="
echo "  Servidor iniciando..."
echo "=========================================="
echo ""
echo "Acesse o site em:"
echo "  - Local:   http://localhost:3003/"
echo "  - Rede:    http://148.230.78.95:3003/"
echo ""
echo "Pressione Ctrl+C para parar o servidor"
echo ""

# Iniciar servidor
npm run dev

