#!/bin/bash
# Script para configurar repositório GitHub para marcohgc
# Uso: ./configurar-github-marcohgc.sh

set -e

echo "🔧 Configurando repositório GitHub para marcohgc..."
echo ""

# Cores
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m'

# Diretório do projeto
cd /var/www/html/energee_com_br_new

# Verificar se está no diretório correto
if [ ! -f "package.json" ]; then
    echo -e "${RED}❌ Erro: package.json não encontrado!${NC}"
    exit 1
fi

echo -e "${YELLOW}📂 Diretório: $(pwd)${NC}"
echo ""

# 1. Configurar Git (se necessário)
echo "1️⃣ Configurando Git..."
CURRENT_NAME=$(git config user.name 2>/dev/null || echo "")
CURRENT_EMAIL=$(git config user.email 2>/dev/null || echo "")

if [ -z "$CURRENT_NAME" ] || [ -z "$CURRENT_EMAIL" ]; then
    echo -e "${YELLOW}⚠️  Git não está configurado${NC}"
    read -p "Digite seu nome completo: " GIT_NAME
    read -p "Digite seu email: " GIT_EMAIL
    
    git config user.name "$GIT_NAME"
    git config user.email "$GIT_EMAIL"
    echo -e "${GREEN}✅ Git configurado!${NC}"
else
    echo -e "${GREEN}✅ Git já configurado:${NC}"
    echo "   Nome: $CURRENT_NAME"
    echo "   Email: $CURRENT_EMAIL"
fi
echo ""

# 2. Verificar se já tem remote
echo "2️⃣ Verificando remote..."
if git remote get-url origin &> /dev/null; then
    CURRENT_REMOTE=$(git remote get-url origin)
    echo -e "${YELLOW}⚠️  Remote já configurado: $CURRENT_REMOTE${NC}"
    read -p "Deseja alterar para marcohgc? (s/N): " -n 1 -r
    echo
    if [[ $REPLY =~ ^[Ss]$ ]]; then
        git remote remove origin
        echo -e "${GREEN}✅ Remote antigo removido${NC}"
    else
        echo -e "${YELLOW}⚠️  Mantendo remote atual${NC}"
        exit 0
    fi
fi

# 3. Solicitar nome do repositório
echo ""
echo "3️⃣ Configurar remote do GitHub..."
echo ""
echo "Primeiro, crie o repositório no GitHub:"
echo "   1. Acesse: https://github.com/new"
echo "   2. Nome: energee-com-br-new (ou outro)"
echo "   3. Crie o repositório"
echo ""
read -p "Digite o nome do repositório (ex: energee-com-br-new): " REPO_NAME

if [ -z "$REPO_NAME" ]; then
    echo -e "${RED}❌ Nome do repositório não pode ser vazio!${NC}"
    exit 1
fi

# 4. Escolher protocolo
echo ""
echo "Escolha o protocolo:"
echo "   1) SSH (git@github.com:marcohgc/...) - Recomendado"
echo "   2) HTTPS (https://github.com/marcohgc/...)"
read -p "Escolha (1 ou 2): " PROTOCOL

if [ "$PROTOCOL" = "1" ]; then
    REMOTE_URL="git@github.com:marcohgc/$REPO_NAME.git"
    echo -e "${GREEN}✅ Usando SSH${NC}"
else
    REMOTE_URL="https://github.com/marcohgc/$REPO_NAME.git"
    echo -e "${GREEN}✅ Usando HTTPS${NC}"
fi

# 5. Adicionar remote
echo ""
echo "4️⃣ Adicionando remote..."
git remote add origin "$REMOTE_URL"
echo -e "${GREEN}✅ Remote configurado: $REMOTE_URL${NC}"
echo ""

# 6. Verificar status
echo "5️⃣ Verificando status..."
if ! git diff-index --quiet HEAD -- 2>/dev/null; then
    echo -e "${YELLOW}⚠️  Há mudanças não commitadas${NC}"
    read -p "Deseja fazer commit agora? (s/N): " -n 1 -r
    echo
    if [[ $REPLY =~ ^[Ss]$ ]]; then
        git add .
        read -p "Digite a mensagem do commit: " COMMIT_MSG
        if [ -z "$COMMIT_MSG" ]; then
            COMMIT_MSG="Initial commit: Energee.com.br website"
        fi
        git commit -m "$COMMIT_MSG"
        echo -e "${GREEN}✅ Commit realizado!${NC}"
    fi
else
    echo -e "${GREEN}✅ Nenhuma mudança pendente${NC}"
fi
echo ""

# 7. Testar conexão
echo "6️⃣ Testando conexão com GitHub..."
if [ "$PROTOCOL" = "1" ]; then
    if ssh -T git@github.com 2>&1 | grep -q "successfully authenticated"; then
        echo -e "${GREEN}✅ Conexão SSH funcionando!${NC}"
    else
        echo -e "${RED}❌ Conexão SSH não está funcionando${NC}"
        echo "   Configure sua chave SSH: https://github.com/settings/keys"
    fi
fi
echo ""

# 8. Instruções finais
echo -e "${GREEN}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo -e "${GREEN}✅ Configuração concluída!${NC}"
echo -e "${GREEN}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo ""
echo "📤 Próximos passos:"
echo ""
echo "1. Certifique-se de que o repositório foi criado no GitHub:"
echo "   https://github.com/marcohgc/$REPO_NAME"
echo ""
echo "2. Fazer push do código:"
echo "   git push -u origin main"
echo ""
echo "3. Se der erro, verifique:"
echo "   - Repositório existe no GitHub"
echo "   - Chave SSH configurada (se usar SSH)"
echo "   - Token de acesso (se usar HTTPS)"
echo ""
echo "📚 Veja o guia completo: COMO_SALVAR_NO_GITHUB.md"
echo ""

