#!/bin/bash
# Script para testar conexão com GitHub
# Use este script para verificar se tudo está configurado corretamente

echo "🔍 Testando conexão com GitHub..."
echo ""

# Cores
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m'

# 1. Verificar se Git está instalado
echo "1️⃣ Verificando Git..."
if command -v git &> /dev/null; then
    echo -e "${GREEN}✅ Git instalado: $(git --version)${NC}"
else
    echo -e "${RED}❌ Git não encontrado!${NC}"
    echo "   Instale em: https://git-scm.com/"
    exit 1
fi
echo ""

# 2. Verificar configuração do Git
echo "2️⃣ Verificando configuração do Git..."
USER_NAME=$(git config --global user.name 2>/dev/null)
USER_EMAIL=$(git config --global user.email 2>/dev/null)

if [ -z "$USER_NAME" ]; then
    echo -e "${YELLOW}⚠️  Nome do usuário não configurado${NC}"
    echo "   Configure com: git config --global user.name 'Seu Nome'"
else
    echo -e "${GREEN}✅ Nome: $USER_NAME${NC}"
fi

if [ -z "$USER_EMAIL" ]; then
    echo -e "${YELLOW}⚠️  Email não configurado${NC}"
    echo "   Configure com: git config --global user.email 'seu@email.com'"
else
    echo -e "${GREEN}✅ Email: $USER_EMAIL${NC}"
fi
echo ""

# 3. Verificar chaves SSH
echo "3️⃣ Verificando chaves SSH..."
if [ -f ~/.ssh/id_ed25519.pub ]; then
    echo -e "${GREEN}✅ Chave SSH encontrada: id_ed25519${NC}"
    echo "   Chave pública:"
    cat ~/.ssh/id_ed25519.pub | head -1
elif [ -f ~/.ssh/id_rsa.pub ]; then
    echo -e "${GREEN}✅ Chave SSH encontrada: id_rsa${NC}"
    echo "   Chave pública:"
    cat ~/.ssh/id_rsa.pub | head -1
else
    echo -e "${YELLOW}⚠️  Nenhuma chave SSH encontrada${NC}"
    echo "   Crie uma com: ssh-keygen -t ed25519 -C 'seu@email.com'"
fi
echo ""

# 4. Testar conexão SSH com GitHub
echo "4️⃣ Testando conexão SSH com GitHub..."
if ssh -T git@github.com 2>&1 | grep -q "successfully authenticated"; then
    echo -e "${GREEN}✅ Conexão SSH funcionando!${NC}"
    ssh -T git@github.com 2>&1 | grep "Hi"
else
    echo -e "${RED}❌ Conexão SSH não está funcionando${NC}"
    echo "   Verifique se a chave SSH está adicionada no GitHub"
    echo "   Acesse: https://github.com/settings/keys"
fi
echo ""

# 5. Verificar remote do repositório atual
echo "5️⃣ Verificando repositório atual..."
if [ -d ".git" ]; then
    REMOTE_URL=$(git remote get-url origin 2>/dev/null)
    if [ -n "$REMOTE_URL" ]; then
        echo -e "${GREEN}✅ Remote configurado: $REMOTE_URL${NC}"
    else
        echo -e "${YELLOW}⚠️  Remote não configurado${NC}"
    fi
else
    echo -e "${YELLOW}⚠️  Não é um repositório Git${NC}"
fi
echo ""

# Resumo
echo -e "${GREEN}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo "📊 Resumo:"
echo ""
echo "Para conectar o Cursor ao GitHub:"
echo ""
echo "1. Se a conexão SSH funcionou ✅"
echo "   → Você pode usar: git@github.com:PedroRago10/energee-lp.git"
echo ""
echo "2. Se a conexão SSH não funcionou ❌"
echo "   → Siga o guia: GUIA_CURSOR_GITHUB.md"
echo ""
echo "3. No Cursor:"
echo "   → Pressione Ctrl+Shift+P"
echo "   → Digite: Git: Clone"
echo "   → Cole a URL do repositório"
echo ""
echo -e "${GREEN}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"

