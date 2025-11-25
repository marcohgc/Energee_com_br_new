# ⚡ Resumo Rápido: Salvar no GitHub (marcohgc)

## 🚀 Passo a Passo Rápido

### **1. Criar Repositório no GitHub**

1. Acesse: https://github.com/new
2. **Nome:** `energee-com-br-new`
3. **Privacidade:** Private (recomendado) ou Public
4. **NÃO marque** README, .gitignore ou license
5. Clique em **"Create repository"**

### **2. Configurar no Servidor**

```bash
cd /var/www/html/energee_com_br_new
./configurar-github-marcohgc.sh
```

**OU manualmente:**

```bash
cd /var/www/html/energee_com_br_new

# Configurar Git (se necessário)
git config user.name "marcohgc"
git config user.email "seu@email.com"

# Configurar remote
git remote add origin git@github.com:marcohgc/energee-com-br-new.git

# Fazer commit e push
git add .
git commit -m "Initial commit: Energee.com.br website"
git push -u origin main
```

### **3. Clonar Localmente**

```bash
# Na sua máquina local
git clone git@github.com:marcohgc/energee-com-br-new.git
cd energee-com-br-new
npm install
npm run dev
```

---

## ✅ Checklist

- [ ] Repositório criado no GitHub (marcohgc/energee-com-br-new)
- [ ] Remote configurado no servidor
- [ ] Commit inicial feito
- [ ] Push para GitHub realizado
- [ ] Clonado localmente
- [ ] Funcionando localmente

---

## 📚 Documentação Completa

Veja `COMO_SALVAR_NO_GITHUB.md` para instruções detalhadas.

---

## 🔗 Links

- **Criar Repositório:** https://github.com/new
- **Seus Repositórios:** https://github.com/marcohgc?tab=repositories

