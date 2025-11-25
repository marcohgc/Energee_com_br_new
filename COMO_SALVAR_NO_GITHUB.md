# 📤 Como Salvar o Site no GitHub (Conta: marcohgc)

## 🎯 Objetivo

Salvar o projeto `energee_com_br_new` no seu GitHub (marcohgc) e ter uma cópia local.

---

## 📋 Passo a Passo

### **Passo 1: Criar Repositório no GitHub**

1. Acesse: https://github.com/new
2. **Repository name:** `energee-com-br-new` (ou outro nome de sua preferência)
3. **Description:** "Website Energee.com.br - React + TypeScript + Vite"
4. **Visibility:** Escolha:
   - ✅ **Public** (qualquer um pode ver)
   - ✅ **Private** (apenas você pode ver) - Recomendado
5. **NÃO marque** "Add a README file" (já temos um)
6. **NÃO marque** "Add .gitignore" (já temos um)
7. Clique em **"Create repository"**

### **Passo 2: Copiar URL do Repositório**

Após criar, o GitHub vai mostrar a URL. Copie uma das opções:

**SSH (Recomendado):**
```
git@github.com:marcohgc/energee-com-br-new.git
```

**HTTPS (Alternativa):**
```
https://github.com/marcohgc/energee-com-br-new.git
```

### **Passo 3: Configurar no Servidor**

No servidor, execute:

```bash
cd /var/www/html/energee_com_br_new

# Configurar Git (se ainda não configurou)
git config user.name "marcohgc"
git config user.email "seu@email.com"

# Configurar remote
git remote add origin git@github.com:marcohgc/energee-com-br-new.git

# OU se preferir HTTPS:
# git remote add origin https://github.com/marcohgc/energee-com-br-new.git

# Fazer commit inicial
git add .
git commit -m "Initial commit: Energee.com.br website"

# Enviar para GitHub
git push -u origin main
```

**Se der erro de autenticação:**
- Para SSH: Verifique se sua chave SSH está no GitHub
- Para HTTPS: Use um token de acesso pessoal como senha

---

## 💻 Clonar Localmente (Sua Máquina)

### **Opção 1: Via SSH (Recomendado)**

```bash
# Clonar repositório
git clone git@github.com:marcohgc/energee-com-br-new.git
cd energee-com-br-new

# Instalar dependências
npm install

# Iniciar servidor
npm run dev
```

### **Opção 2: Via HTTPS**

```bash
# Clonar repositório
git clone https://github.com/marcohgc/energee-com-br-new.git
cd energee-com-br-new

# Instalar dependências
npm install

# Iniciar servidor
npm run dev
```

---

## 🔄 Workflow Diário

### **No Servidor (após fazer mudanças):**

```bash
cd /var/www/html/energee_com_br_new
git add .
git commit -m "feat: descrição da mudança"
git push origin main
```

### **Na Sua Máquina Local:**

```bash
cd energee-com-br-new
git pull origin main  # Atualizar código
npm install           # Se houver novas dependências
npm run dev           # Desenvolver
```

---

## ✅ Checklist

- [ ] Repositório criado no GitHub (marcohgc)
- [ ] Remote configurado no servidor
- [ ] Commit inicial feito
- [ ] Push para GitHub realizado
- [ ] Repositório clonado localmente
- [ ] Dependências instaladas localmente
- [ ] Servidor local funcionando

---

## 🔗 Links Úteis

- **Criar Repositório:** https://github.com/new
- **Seus Repositórios:** https://github.com/marcohgc?tab=repositories
- **Configurar SSH:** https://github.com/settings/keys
- **Criar Token:** https://github.com/settings/tokens

---

## 🚨 Problemas Comuns

### Erro: "Repository not found"
- Verifique se o nome do repositório está correto
- Verifique se você tem permissão de acesso

### Erro: "Permission denied"
- Para SSH: Adicione sua chave SSH no GitHub
- Para HTTPS: Use token de acesso pessoal

### Erro: "Remote origin already exists"
```bash
# Remover remote antigo
git remote remove origin

# Adicionar novo remote
git remote add origin git@github.com:marcohgc/energee-com-br-new.git
```

---

**Última atualização:** 2025-11-24

