#!/bin/bash
# Script para configurar Git rapidamente

echo "⚙️ Configurando Git..."
echo ""

read -p "Digite seu nome completo: " GIT_NAME
read -p "Digite seu email: " GIT_EMAIL

git config --global user.name "$GIT_NAME"
git config --global user.email "$GIT_EMAIL"

echo ""
echo "✅ Git configurado!"
echo ""
echo "Nome: $(git config --global user.name)"
echo "Email: $(git config --global user.email)"
echo ""
echo "Agora você pode usar o Git normalmente!"

