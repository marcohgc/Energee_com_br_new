#!/bin/bash
# Script para copiar o website energee_com_br_new

echo "📦 Copiando website energee_com_br_new..."
echo ""

ORIGEM="/var/www/html/energee_com_br_new"
DESTINO="${1:-/tmp/energee_com_br_new_copia}"

# Criar diretório de destino
mkdir -p "$DESTINO"

echo "📂 Origem: $ORIGEM"
echo "📂 Destino: $DESTINO"
echo ""

# Copiar arquivos (excluindo node_modules, dist, .git)
echo "🔄 Copiando arquivos..."
rsync -av --progress \
  --exclude='node_modules' \
  --exclude='dist' \
  --exclude='.git' \
  --exclude='*.log' \
  --exclude='.DS_Store' \
  "$ORIGEM/" "$DESTINO/"

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ Cópia concluída com sucesso!"
    echo ""
    echo "📊 Informações:"
    echo "   Destino: $DESTINO"
    echo "   Tamanho: $(du -sh "$DESTINO" | cut -f1)"
    echo ""
    echo "📦 Para compactar:"
    echo "   cd $DESTINO"
    echo "   tar -czf ../energee_com_br_new_copia.tar.gz ."
    echo ""
    echo "📥 Para baixar via SCP:"
    echo "   scp -r $DESTINO usuario@seu_computador:~/projetos/"
else
    echo "❌ Erro ao copiar!"
    exit 1
fi

