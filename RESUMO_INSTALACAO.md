# ✅ Instalação Local - Resumo Rápido

## 🎯 Como Iniciar

### Opção 1: Script Automático (Recomendado)
```bash
cd /var/www/html/energee_com_br_new
./iniciar_local.sh
```

### Opção 2: Manual
```bash
cd /var/www/html/energee_com_br_new
npm run dev
```

## 🌐 Acesso

Após iniciar, acesse:
- **Local:** http://localhost:3003
- **Rede:** http://SEU_IP:3003

## 📝 Comandos Úteis

```bash
# Instalar/atualizar dependências
npm install

# Iniciar servidor de desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview do build
npm run preview
```

## ⚠️ Problemas Comuns

**Porta ocupada?**
- Altere a porta no `vite.config.ts` ou use: `npm run dev -- --port 3004`

**Erro ao instalar?**
```bash
rm -rf node_modules package-lock.json
npm install
```

## 📚 Documentação Completa

Veja `INSTALACAO_LOCAL.md` para mais detalhes.


