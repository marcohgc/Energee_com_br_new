# 🚀 Workflow de Desenvolvimento - Energee.com.br

## 📋 Visão Geral

Este documento descreve o workflow completo de desenvolvimento, integrando:
- **GitHub** - Controle de versão e colaboração
- **Desenvolvimento Local** - Sua máquina para desenvolver
- **Servidor** - Ambiente de produção/staging

---

## 🏗️ Arquitetura do Workflow

```
┌─────────────┐      ┌──────────────┐      ┌─────────────┐
│   GitHub    │◄────►│  Local (Dev) │◄────►│  Servidor   │
│  (Repositório)│      │  (Sua Máquina) │      │ (Produção)  │
└─────────────┘      └──────────────┘      └─────────────┘
     ▲                      ▲                      ▲
     │                      │                      │
     └──────────────────────┴──────────────────────┘
              Fluxo de Desenvolvimento
```

---

## 🔄 Fluxo Recomendado

### 1️⃣ **Desenvolvimento Local** (Sua Máquina)

```bash
# 1. Clonar repositório (se ainda não tiver)
git clone git@github.com:PedroRago10/energee-lp.git
cd energee-lp

# 2. Instalar dependências
npm install

# 3. Criar branch para nova feature
git checkout -b feature/nome-da-feature

# 4. Desenvolver localmente
npm run dev
# Acessa: http://localhost:3003

# 5. Fazer commits
git add .
git commit -m "feat: adiciona nova funcionalidade"

# 6. Enviar para GitHub
git push origin feature/nome-da-feature
```

### 2️⃣ **GitHub** (Controle de Versão)

```bash
# Criar Pull Request no GitHub
# - Vá para: https://github.com/PedroRago10/energee-lp
# - Crie um Pull Request da sua branch para main
# - Revise o código
# - Merge para main quando aprovado
```

### 3️⃣ **Deploy no Servidor** (Produção)

```bash
# No servidor, fazer pull das mudanças
cd /var/www/html/energee_com_br_new
git pull origin main

# Instalar novas dependências (se houver)
npm install

# Build para produção
npm run build

# Reiniciar servidor (se usar PM2)
pm2 restart energee-com-br-dev
# ou simplesmente
npm run dev
```

---

## 📂 Estrutura de Branches

### Branches Principais

- **`main`** - Código de produção (sempre estável)
- **`develop`** - Código de desenvolvimento (opcional)
- **`feature/*`** - Novas funcionalidades
- **`fix/*`** - Correções de bugs
- **`hotfix/*`** - Correções urgentes em produção

### Convenção de Nomes

```bash
feature/nome-da-feature    # Ex: feature/novo-formulario
fix/correcao-bug          # Ex: fix/erro-validacao
hotfix/correcao-urgente   # Ex: hotfix/erro-critico
```

---

## 🛠️ Setup Inicial

### Na Sua Máquina Local

```bash
# 1. Clonar repositório
git clone git@github.com:PedroRago10/energee-lp.git
cd energee-lp

# 2. Instalar dependências
npm install

# 3. Configurar Git (se ainda não tiver)
git config user.name "Seu Nome"
git config user.email "seu@email.com"

# 4. Verificar conexão com GitHub
git remote -v
# Deve mostrar: origin  git@github.com:PedroRago10/energee-lp.git

# 5. Iniciar desenvolvimento
npm run dev
```

### No Servidor

```bash
# 1. Verificar se já está clonado
cd /var/www/html/energee_com_br_new
git remote -v

# 2. Se não estiver conectado, configurar:
git remote add origin git@github.com:PedroRago10/energee-lp.git

# 3. Fazer pull inicial
git pull origin main
```

---

## 🔀 Workflow Diário de Desenvolvimento

### Cenário 1: Nova Funcionalidade

```bash
# LOCAL
# 1. Atualizar main
git checkout main
git pull origin main

# 2. Criar branch
git checkout -b feature/nova-funcionalidade

# 3. Desenvolver
npm run dev
# ... fazer alterações ...

# 4. Commit
git add .
git commit -m "feat: adiciona nova funcionalidade X"

# 5. Push
git push origin feature/nova-funcionalidade

# 6. Criar Pull Request no GitHub
# 7. Após aprovação e merge, fazer deploy no servidor
```

### Cenário 2: Correção de Bug

```bash
# LOCAL
# 1. Criar branch de fix
git checkout main
git pull origin main
git checkout -b fix/correcao-bug

# 2. Corrigir bug
# ... fazer alterações ...

# 3. Commit e push
git add .
git commit -m "fix: corrige bug na validação"
git push origin fix/correcao-bug

# 4. Pull Request e merge
# 5. Deploy no servidor
```

### Cenário 3: Deploy Rápido (Hotfix)

```bash
# SERVIDOR (para correções urgentes)
cd /var/www/html/energee_com_br_new

# 1. Criar branch direto no servidor (ou fazer local e push)
git checkout -b hotfix/correcao-urgente

# 2. Fazer correção
# ... editar arquivos ...

# 3. Commit
git add .
git commit -m "hotfix: corrige erro crítico"

# 4. Push para GitHub
git push origin hotfix/correcao-urgente

# 5. Merge no GitHub e depois:
git checkout main
git pull origin main
npm run build
pm2 restart energee-com-br-dev
```

---

## 📦 Scripts de Deploy

### Script Automatizado de Deploy

Crie um arquivo `deploy.sh` no servidor:

```bash
#!/bin/bash
# Script de deploy automático

cd /var/www/html/energee_com_br_new

echo "🔄 Atualizando código do GitHub..."
git pull origin main

echo "📦 Instalando dependências..."
npm install

echo "🏗️ Fazendo build..."
npm run build

echo "🔄 Reiniciando servidor..."
pm2 restart energee-com-br-dev || npm run dev

echo "✅ Deploy concluído!"
```

**Tornar executável:**
```bash
chmod +x deploy.sh
```

**Usar:**
```bash
./deploy.sh
```

---

## 🔐 Configuração SSH para GitHub

### Gerar Chave SSH (se ainda não tiver)

```bash
# Na sua máquina local
ssh-keygen -t ed25519 -C "seu@email.com"

# Copiar chave pública
cat ~/.ssh/id_ed25519.pub

# Adicionar no GitHub:
# 1. Vá para: https://github.com/settings/keys
# 2. Clique em "New SSH key"
# 3. Cole a chave pública
```

### Testar Conexão

```bash
ssh -T git@github.com
# Deve retornar: Hi PedroRago10! You've successfully authenticated...
```

---

## 🎯 Boas Práticas

### Commits

Use mensagens descritivas seguindo Conventional Commits:

```bash
feat: adiciona formulário de contato
fix: corrige erro de validação de email
docs: atualiza documentação
style: ajusta formatação
refactor: reorganiza estrutura de componentes
test: adiciona testes para componente X
chore: atualiza dependências
```

### Antes de Fazer Push

```bash
# 1. Verificar status
git status

# 2. Ver diferenças
git diff

# 3. Testar localmente
npm run dev
# Testar no navegador

# 4. Verificar lint (se configurado)
npm run lint

# 5. Só então fazer commit e push
```

### Antes de Fazer Deploy

```bash
# No servidor, sempre:
# 1. Fazer backup (opcional mas recomendado)
cp -r /var/www/html/energee_com_br_new /var/www/html/energee_com_br_new_backup_$(date +%Y%m%d)

# 2. Verificar mudanças antes de fazer pull
git fetch origin
git log HEAD..origin/main

# 3. Fazer pull
git pull origin main

# 4. Instalar dependências
npm install

# 5. Build
npm run build

# 6. Testar (se possível)
npm run preview

# 7. Reiniciar servidor
```

---

## 🚨 Troubleshooting

### Erro: "Permission denied (publickey)"
**Solução:** Configurar chave SSH no GitHub

### Erro: "Your branch is behind"
**Solução:** 
```bash
git pull origin main
```

### Conflitos de Merge
**Solução:**
```bash
git pull origin main
# Resolver conflitos manualmente
git add .
git commit -m "merge: resolve conflitos"
```

### Servidor não atualiza após deploy
**Solução:**
```bash
# Limpar cache e rebuild
rm -rf dist node_modules
npm install
npm run build
pm2 restart energee-com-br-dev
```

---

## 📊 Resumo do Fluxo Completo

```
┌─────────────────────────────────────────────────────────┐
│                    WORKFLOW COMPLETO                     │
└─────────────────────────────────────────────────────────┘

1. LOCAL: git clone / git pull
2. LOCAL: git checkout -b feature/nova-feature
3. LOCAL: npm run dev (desenvolver)
4. LOCAL: git add . && git commit -m "..."
5. LOCAL: git push origin feature/nova-feature
6. GITHUB: Criar Pull Request
7. GITHUB: Revisar e aprovar
8. GITHUB: Merge para main
9. SERVIDOR: git pull origin main
10. SERVIDOR: npm install && npm run build
11. SERVIDOR: Reiniciar servidor
12. ✅ PRONTO!
```

---

## 🔗 Links Úteis

- **Repositório:** https://github.com/PedroRago10/energee-lp
- **Servidor:** http://148.230.78.95:3003
- **Documentação Vite:** https://vitejs.dev/
- **Documentação React:** https://react.dev/

---

**Última atualização:** 2025-11-24

