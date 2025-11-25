# 📋 Resumo Rápido - Workflow de Desenvolvimento

## 🎯 Workflow Recomendado

### **Desenvolvimento Local → GitHub → Servidor**

```
┌─────────────────────────────────────────────────────────────┐
│ 1. LOCAL: Desenvolver                                       │
│    git clone / git pull                                     │
│    git checkout -b feature/nova-feature                    │
│    npm run dev                                              │
│    git commit && git push                                   │
├─────────────────────────────────────────────────────────────┤
│ 2. GITHUB: Revisar e Aprovar                                │
│    Criar Pull Request                                       │
│    Revisar código                                           │
│    Merge para main                                          │
├─────────────────────────────────────────────────────────────┤
│ 3. SERVIDOR: Deploy                                         │
│    git pull origin main                                     │
│    npm install && npm run build                            │
│    ./deploy.sh (ou reiniciar servidor)                      │
└─────────────────────────────────────────────────────────────┘
```

---

## 🚀 Comandos Essenciais

### **Na Sua Máquina Local**

```bash
# Setup inicial (uma vez)
git clone git@github.com:PedroRago10/energee-lp.git
cd energee-lp
npm install

# Workflow diário
git checkout main
git pull origin main
git checkout -b feature/nome-feature
npm run dev                    # Desenvolver em http://localhost:3003
git add .
git commit -m "feat: descrição"
git push origin feature/nome-feature
# Criar Pull Request no GitHub
```

### **No Servidor**

```bash
cd /var/www/html/energee_com_br_new

# Deploy manual
git pull origin main
npm install
npm run build
./deploy.sh

# OU deploy automático (script)
./deploy.sh
```

---

## 📂 Estrutura de Branches

- **`main`** → Produção (sempre estável)
- **`feature/*`** → Novas funcionalidades
- **`fix/*`** → Correções de bugs
- **`hotfix/*`** → Correções urgentes

---

## ✅ Checklist de Deploy

- [ ] Código testado localmente
- [ ] Commits com mensagens descritivas
- [ ] Push para GitHub feito
- [ ] Pull Request aprovado e mergeado
- [ ] No servidor: `git pull origin main`
- [ ] No servidor: `npm install` (se houver novas dependências)
- [ ] No servidor: `npm run build`
- [ ] Servidor reiniciado
- [ ] Site funcionando: http://148.230.78.95:3003

---

## 🔗 Links Importantes

- **GitHub:** https://github.com/PedroRago10/energee-lp
- **Servidor:** http://148.230.78.95:3003
- **Documentação Completa:** Ver `WORKFLOW_DESENVOLVIMENTO.md`

---

**💡 Dica:** Use `./deploy.sh` no servidor para deploy automático!

