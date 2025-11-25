# 📥 Guia Completo: Baixar Website para Desenvolvimento Local

## ✅ Arquivos Prontos para Download

Foram criados dois formatos para você baixar:

### 1. Arquivo Compactado (Recomendado - Mais Rápido)
- **Localização no servidor:** `/tmp/energee_com_br_new_local.tar.gz`
- **Tamanho:** ~200-300 KB (sem node_modules)
- **Formato:** `.tar.gz` (compactado)

### 2. Pasta Completa (Alternativa)
- **Localização no servidor:** `/tmp/energee_com_br_new_copia_local/`
- **Tamanho:** ~200-300 KB (sem node_modules)
- **Formato:** Pasta com todos os arquivos

---

## 🚀 Opção 1: Download via SCP (Linha de Comando)

### No Windows (PowerShell ou Git Bash):

```bash
# Baixar arquivo compactado
scp usuario@148.230.78.95:/tmp/energee_com_br_new_local.tar.gz C:\Users\SeuUsuario\Downloads\

# Ou baixar pasta completa
scp -r usuario@148.230.78.95:/tmp/energee_com_br_new_copia_local C:\Users\SeuUsuario\projetos\
```

### No Linux/Mac:

```bash
# Baixar arquivo compactado
scp usuario@148.230.78.95:/tmp/energee_com_br_new_local.tar.gz ~/Downloads/

# Ou baixar pasta completa
scp -r usuario@148.230.78.95:/tmp/energee_com_br_new_copia_local ~/projetos/
```

**Substitua `usuario` pelo seu usuário SSH do servidor!**

---

## 🖥️ Opção 2: Download via SFTP (Interface Gráfica)

### Usando WinSCP, FileZilla ou similar:

1. **Conecte-se ao servidor:**
   - Host: `148.230.78.95`
   - Protocolo: SFTP
   - Porta: 22
   - Usuário: seu usuário SSH
   - Senha: sua senha SSH

2. **Navegue até `/tmp/`**

3. **Baixe um dos arquivos:**
   - `energee_com_br_new_local.tar.gz` (recomendado)
   - OU a pasta `energee_com_br_new_copia_local/`

---

## 📦 Passo a Passo: Instalação na Sua Máquina

### 1. Extrair o Arquivo (se baixou o .tar.gz)

**Windows:**
```bash
# Use 7-Zip ou WinRAR, ou no PowerShell:
tar -xzf C:\Users\SeuUsuario\Downloads\energee_com_br_new_local.tar.gz -C C:\projetos\
```

**Linux/Mac:**
```bash
cd ~/projetos
tar -xzf ~/Downloads/energee_com_br_new_local.tar.gz
```

### 2. Entrar na Pasta do Projeto

```bash
cd energee_com_br_new_local
# ou
cd energee_com_br_new_copia_local
```

### 3. Instalar Dependências

```bash
npm install
```

**Tempo estimado:** 2-5 minutos (depende da sua conexão)

### 4. Iniciar Servidor de Desenvolvimento

```bash
npm run dev
```

### 5. Acessar no Navegador

Abra: **http://localhost:3003**

---

## 📋 Checklist de Arquivos Necessários

O pacote inclui:
- ✅ `src/` - Todo o código fonte React/TypeScript
- ✅ `public/` - Arquivos estáticos
- ✅ `package.json` - Dependências do projeto
- ✅ `vite.config.ts` - Configuração do Vite
- ✅ `tailwind.config.ts` - Configuração Tailwind CSS
- ✅ `tsconfig.json` - Configuração TypeScript
- ✅ `index.html` - HTML principal
- ✅ Todos os arquivos de configuração

**NÃO inclui:**
- ❌ `node_modules/` - Será instalado com `npm install`
- ❌ `dist/` - Será gerado com `npm run build`

---

## 🔧 Requisitos na Sua Máquina

Antes de começar, certifique-se de ter instalado:

### Node.js e npm
- **Versão mínima:** Node.js 18+ e npm 9+
- **Como verificar:**
  ```bash
  node --version
  npm --version
  ```
- **Download:** https://nodejs.org/

### Git (opcional, mas recomendado)
- **Download:** https://git-scm.com/

---

## 🛠️ Comandos Úteis

```bash
# Desenvolvimento
npm run dev          # Inicia servidor local (porta 3003)

# Build para produção
npm run build        # Gera arquivos em /dist

# Preview do build
npm run preview      # Visualiza o build de produção

# Linting
npm run lint         # Verifica erros no código
```

---

## ❓ Problemas Comuns

### Erro: "npm: command not found"
**Solução:** Instale o Node.js de https://nodejs.org/

### Erro: "Port 3003 already in use"
**Solução:** Pare o processo na porta 3003 ou altere a porta no `vite.config.ts`

### Erro ao instalar dependências
**Solução:** 
```bash
# Limpar cache e tentar novamente
npm cache clean --force
rm -rf node_modules package-lock.json
npm install
```

### Site não carrega
**Solução:** Verifique se o servidor está rodando e acesse `http://localhost:3003`

---

## 📞 Informações do Servidor

- **IP do servidor:** 148.230.78.95
- **Porta SSH:** 22
- **Caminho no servidor:** `/var/www/html/energee_com_br_new`
- **Arquivos prontos:** `/tmp/energee_com_br_new_local.tar.gz`

---

## 🎯 Próximos Passos

1. ✅ Baixar os arquivos (usando uma das opções acima)
2. ✅ Extrair (se necessário)
3. ✅ Instalar dependências (`npm install`)
4. ✅ Iniciar servidor (`npm run dev`)
5. ✅ Acessar `http://localhost:3003`
6. ✅ Começar a desenvolver! 🚀

---

**Última atualização:** $(date +%Y-%m-%d)

