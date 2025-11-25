#!/bin/bash
# Script de deploy automático para o servidor
# Uso: ./deploy.sh

set -e  # Parar em caso de erro

echo "🚀 Iniciando deploy do Energee.com.br..."
echo ""

# Cores para output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Diretório do projeto
PROJECT_DIR="/var/www/html/energee_com_br_new"
cd "$PROJECT_DIR"

# Verificar se está no diretório correto
if [ ! -f "package.json" ]; then
    echo -e "${RED}❌ Erro: package.json não encontrado!${NC}"
    exit 1
fi

echo -e "${YELLOW}📂 Diretório: $PROJECT_DIR${NC}"
echo ""

# 1. Verificar status do Git
echo -e "${YELLOW}🔄 Verificando status do Git...${NC}"
git fetch origin

# Verificar se há mudanças locais não commitadas
if ! git diff-index --quiet HEAD --; then
    echo -e "${YELLOW}⚠️  Há mudanças locais não commitadas.${NC}"
    read -p "Deseja continuar mesmo assim? (s/N): " -n 1 -r
    echo
    if [[ ! $REPLY =~ ^[Ss]$ ]]; then
        echo -e "${RED}❌ Deploy cancelado.${NC}"
        exit 1
    fi
fi

# 2. Fazer pull do GitHub
echo -e "${YELLOW}📥 Fazendo pull do GitHub (branch: main)...${NC}"
if git pull origin main; then
    echo -e "${GREEN}✅ Código atualizado!${NC}"
else
    echo -e "${RED}❌ Erro ao fazer pull!${NC}"
    exit 1
fi
echo ""

# 3. Instalar dependências
echo -e "${YELLOW}📦 Instalando dependências...${NC}"
if npm install; then
    echo -e "${GREEN}✅ Dependências instaladas!${NC}"
else
    echo -e "${RED}❌ Erro ao instalar dependências!${NC}"
    exit 1
fi
echo ""

# 4. Build para produção
echo -e "${YELLOW}🏗️  Fazendo build para produção...${NC}"
if npm run build; then
    echo -e "${GREEN}✅ Build concluído!${NC}"
else
    echo -e "${RED}❌ Erro no build!${NC}"
    exit 1
fi
echo ""

# 5. Verificar se PM2 está instalado e rodando
if command -v pm2 &> /dev/null; then
    echo -e "${YELLOW}🔄 Reiniciando servidor com PM2...${NC}"
    if pm2 restart energee-com-br-dev; then
        echo -e "${GREEN}✅ Servidor reiniciado!${NC}"
    else
        echo -e "${YELLOW}⚠️  PM2 não encontrou o processo. Tentando iniciar...${NC}"
        pm2 start ecosystem.config.cjs || npm run dev &
    fi
else
    echo -e "${YELLOW}⚠️  PM2 não encontrado. Iniciando servidor manualmente...${NC}"
    # Matar processo na porta 3003 se existir
    lsof -ti:3003 | xargs kill -9 2>/dev/null || true
    npm run dev &
    echo -e "${GREEN}✅ Servidor iniciado!${NC}"
fi
echo ""

# 6. Verificar se servidor está rodando
sleep 2
if curl -s http://localhost:3003 > /dev/null; then
    echo -e "${GREEN}✅ Servidor está respondendo!${NC}"
else
    echo -e "${YELLOW}⚠️  Servidor pode não estar respondendo ainda.${NC}"
fi
echo ""

# Resumo
echo -e "${GREEN}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo -e "${GREEN}✅ Deploy concluído com sucesso!${NC}"
echo -e "${GREEN}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo ""
echo "🌐 Acesse: http://148.230.78.95:3003"
echo ""

