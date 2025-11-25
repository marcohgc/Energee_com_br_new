#!/bin/bash
# Script para iniciar o servidor de desenvolvimento local

echo "🚀 Iniciando servidor de desenvolvimento Energee.com.br..."
echo ""
echo "📋 Verificando dependências..."

cd "$(dirname "$0")"

# Verificar se node_modules existe
if [ ! -d "node_modules" ]; then
    echo "⚠️  node_modules não encontrado. Instalando dependências..."
    npm install
    echo ""
fi

echo "✅ Dependências verificadas!"
echo ""
echo "🌐 Iniciando servidor em http://localhost:3003"
echo "   (Para acessar de outro dispositivo na rede: http://$(hostname -I | awk '{print $1}'):3003)"
echo ""
echo "💡 Pressione Ctrl+C para parar o servidor"
echo ""

npm run dev


