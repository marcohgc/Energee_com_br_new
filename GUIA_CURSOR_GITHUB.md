# 🔗 Guia: Conectar Cursor ao GitHub

## 📋 Visão Geral

Este guia vai te ajudar a conectar o Cursor (editor) com o GitHub para trabalhar no projeto Energee.com.br.

---

## 🎯 Método 1: Via SSH (Recomendado)

### Passo 1: Verificar se já tem chave SSH

**No Windows (PowerShell ou Git Bash):**
```bash
ls ~/.ssh/id_*.pub
```

**No Linux/Mac:**
```bash
ls ~/.ssh/id_*.pub
```

### Passo 2: Criar chave SSH (se não tiver)

**No Windows (PowerShell ou Git Bash):**
```bash
ssh-keygen -t ed25519 -C "seu@email.com"
# Pressione Enter para aceitar local padrão
# Digite uma senha (ou deixe em branco)
```

**No Linux/Mac:**
```bash
ssh-keygen -t ed25519 -C "seu@email.com"
# Pressione Enter para aceitar local padrão
# Digite uma senha (ou deixe em branco)
```

### Passo 3: Copiar chave pública

**No Windows (PowerShell):**
```powershell
Get-Content ~/.ssh/id_ed25519.pub | Set-Clipboard
```

**No Windows (Git Bash):**
```bash
cat ~/.ssh/id_ed25519.pub
# Copie o conteúdo manualmente
```

**No Linux/Mac:**
```bash
cat ~/.ssh/id_ed25519.pub
# Copie o conteúdo manualmente
# OU
pbcopy < ~/.ssh/id_ed25519.pub  # Mac
xclip -sel clip < ~/.ssh/id_ed25519.pub  # Linux
```

### Passo 4: Adicionar chave no GitHub

1. Acesse: https://github.com/settings/keys
2. Clique em **"New SSH key"**
3. **Title:** Digite um nome (ex: "Cursor - Meu Computador")
4. **Key:** Cole a chave pública que você copiou
5. Clique em **"Add SSH key"**

### Passo 5: Testar conexão

```bash
ssh -T git@github.com
```

**Deve aparecer:**
```
Hi PedroRago10! You've successfully authenticated, but GitHub does not provide shell access.
```

### Passo 6: Configurar Git no Cursor

1. Abra o Cursor
2. Pressione `Ctrl+Shift+P` (ou `Cmd+Shift+P` no Mac)
3. Digite: `Git: Clone`
4. Cole a URL: `git@github.com:PedroRago10/energee-lp.git`
5. Escolha a pasta onde quer clonar
6. Pronto! O Cursor vai usar sua chave SSH automaticamente

---

## 🎯 Método 2: Via Token de Acesso Pessoal (PAT)

### Passo 1: Criar Token no GitHub

1. Acesse: https://github.com/settings/tokens
2. Clique em **"Generate new token"** → **"Generate new token (classic)"**
3. **Note:** Digite um nome (ex: "Cursor - Energee")
4. **Expiration:** Escolha a validade (recomendo 90 dias ou "No expiration")
5. **Scopes:** Marque:
   - ✅ `repo` (acesso completo aos repositórios)
   - ✅ `workflow` (se usar GitHub Actions)
6. Clique em **"Generate token"**
7. **IMPORTANTE:** Copie o token imediatamente (você não verá novamente!)

### Passo 2: Configurar no Cursor

1. Abra o Cursor
2. Pressione `Ctrl+Shift+P` (ou `Cmd+Shift+P` no Mac)
3. Digite: `Git: Clone`
4. Cole a URL: `https://github.com/PedroRago10/energee-lp.git`
5. Quando pedir credenciais:
   - **Username:** `PedroRago10`
   - **Password:** Cole o token que você criou (não sua senha do GitHub!)

### Passo 3: Salvar credenciais (opcional)

O Cursor pode salvar suas credenciais automaticamente. Se não salvar:

**No Windows:**
- Vá em: Painel de Controle → Credenciais do Windows
- Adicione uma entrada genérica:
  - Internet: `git:https://github.com`
  - Usuário: `PedroRago10`
  - Senha: Seu token

**No Linux/Mac:**
```bash
git config --global credential.helper store
# Na primeira vez, digite o token quando pedir
```

---

## 🔧 Configuração do Git no Cursor

### Configurar nome e email

**No Cursor:**
1. Abra o Terminal integrado (`Ctrl+`` ou `Cmd+``)
2. Execute:

```bash
git config --global user.name "Seu Nome"
git config --global user.email "seu@email.com"
```

### Verificar configuração

```bash
git config --global --list
```

---

## ✅ Verificar se está funcionando

### Teste 1: Clonar repositório

```bash
# No terminal do Cursor
git clone git@github.com:PedroRago10/energee-lp.git
cd energee-lp
```

### Teste 2: Fazer um commit de teste

```bash
# Criar um arquivo de teste
echo "# Teste" > teste.md

# Adicionar e commitar
git add teste.md
git commit -m "test: verifica conexão GitHub"

# Fazer push
git push origin main
```

Se funcionar, está tudo configurado! 🎉

---

## 🎨 Extensões Úteis no Cursor

### Extensões Recomendadas

1. **GitLens** - Visualização avançada do Git
2. **Git Graph** - Visualizar branches e commits
3. **GitHub Pull Requests** - Gerenciar PRs direto no editor

### Como instalar:

1. Pressione `Ctrl+Shift+X` (ou `Cmd+Shift+X` no Mac)
2. Busque pelo nome da extensão
3. Clique em "Install"

---

## 🚨 Problemas Comuns

### Erro: "Permission denied (publickey)"

**Solução:**
1. Verifique se a chave SSH está adicionada no GitHub
2. Teste a conexão: `ssh -T git@github.com`
3. Se não funcionar, verifique se está usando a chave correta:
   ```bash
   ssh-add ~/.ssh/id_ed25519
   ```

### Erro: "Authentication failed"

**Solução (Token):**
- Verifique se está usando o token (não a senha)
- Verifique se o token não expirou
- Crie um novo token se necessário

### Erro: "Repository not found"

**Solução:**
- Verifique se você tem acesso ao repositório
- Verifique se a URL está correta
- Tente clonar novamente

### Cursor não reconhece o Git

**Solução:**
1. Verifique se o Git está instalado:
   ```bash
   git --version
   ```
2. Se não estiver, instale: https://git-scm.com/
3. Reinicie o Cursor

---

## 📝 Checklist de Configuração

- [ ] Git instalado na máquina
- [ ] Chave SSH criada (ou token criado)
- [ ] Chave SSH adicionada no GitHub (ou token salvo)
- [ ] Conexão SSH testada (`ssh -T git@github.com`)
- [ ] Git configurado (nome e email)
- [ ] Repositório clonado no Cursor
- [ ] Teste de commit e push funcionando

---

## 🔗 Links Úteis

- **GitHub SSH Keys:** https://github.com/settings/keys
- **GitHub Tokens:** https://github.com/settings/tokens
- **Documentação Git:** https://git-scm.com/doc
- **Repositório:** https://github.com/PedroRago10/energee-lp

---

## 💡 Dicas

1. **Use SSH** - É mais seguro e não expira como tokens
2. **Salve a chave SSH** - Faça backup da chave privada em local seguro
3. **Use senha na chave SSH** - Adicione uma senha para maior segurança
4. **Configure Git globalmente** - Uma vez configurado, funciona em todos os projetos

---

**Última atualização:** 2025-11-24

