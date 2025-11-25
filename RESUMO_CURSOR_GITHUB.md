# ⚡ Resumo Rápido: Cursor + GitHub

## 🚀 Configuração Rápida (5 minutos)

### **Opção 1: SSH (Recomendado)**

```bash
# 1. Criar chave SSH (se não tiver)
ssh-keygen -t ed25519 -C "seu@email.com"

# 2. Copiar chave pública
cat ~/.ssh/id_ed25519.pub
# (Copie o conteúdo)

# 3. Adicionar no GitHub
# Acesse: https://github.com/settings/keys
# Clique em "New SSH key" e cole a chave

# 4. Testar
ssh -T git@github.com
# Deve aparecer: "Hi PedroRago10! You've successfully authenticated..."
```

### **Opção 2: Token (Alternativa)**

1. Acesse: https://github.com/settings/tokens
2. Clique em "Generate new token (classic)"
3. Marque `repo` e gere o token
4. **Copie o token** (você não verá novamente!)
5. Use o token como senha ao clonar

---

## 📥 Clonar no Cursor

1. Abra o Cursor
2. `Ctrl+Shift+P` (ou `Cmd+Shift+P` no Mac)
3. Digite: `Git: Clone`
4. Cole: `git@github.com:PedroRago10/energee-lp.git`
5. Escolha a pasta
6. Pronto! ✅

---

## ⚙️ Configurar Git (se necessário)

```bash
git config --global user.name "Seu Nome"
git config --global user.email "seu@email.com"
```

---

## ✅ Testar

```bash
# No terminal do Cursor
cd energee-lp
git status
```

Se funcionar, está tudo certo! 🎉

---

## 📚 Documentação Completa

Veja `GUIA_CURSOR_GITHUB.md` para instruções detalhadas.

---

## 🔗 Links

- **GitHub SSH Keys:** https://github.com/settings/keys
- **GitHub Tokens:** https://github.com/settings/tokens
- **Repositório:** https://github.com/PedroRago10/energee-lp

