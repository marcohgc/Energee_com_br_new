# 📥 Como Baixar e Instalar Localmente na Sua Máquina

Os arquivos do website estão no servidor (Hostinger). Para testar localmente na sua máquina, você precisa baixá-los.

## 🔽 Opções para Baixar os Arquivos

### Opção 1: Via SFTP/SCP (Recomendado)

**No Windows:**
- Use **WinSCP**, **FileZilla** ou **PuTTY**
- Conecte-se ao servidor via SFTP
- Navegue até: `/var/www/html/energee_com_br_new`
- Baixe toda a pasta (exceto `node_modules` e `dist`)

**No Linux/Mac:**
```bash
# Via SCP
scp -r usuario@servidor:/var/www/html/energee_com_br_new ~/projetos/

# Ou via rsync (mais eficiente)
rsync -avz --exclude='node_modules' --exclude='dist' \
  usuario@servidor:/var/www/html/energee_com_br_new \
  ~/projetos/
```

### Opção 2: Via Git (Se o projeto estiver em repositório)

```bash
# Se você tem acesso ao repositório Git
git clone [URL_DO_REPOSITORIO]
cd energee_com_br_new
npm install
npm run dev
```

### Opção 3: Download via SSH (Compactar e baixar)

**No servidor (já foi criado um arquivo compactado):**
```bash
# Arquivo já criado em: /tmp/energee_com_br_new.tar.gz
# Baixe via SFTP ou use:
scp usuario@servidor:/tmp/energee_com_br_new.tar.gz ~/Downloads/
```

**Na sua máquina local:**
```bash
# Extrair
cd ~/projetos
tar -xzf ~/Downloads/energee_com_br_new.tar.gz
cd energee_com_br_new

# Instalar dependências
npm install

# Iniciar servidor
npm run dev
```

## 📋 Passos Completos para Instalação Local

### 1. Baixar os Arquivos
Escolha uma das opções acima para baixar os arquivos.

### 2. Instalar Node.js (se ainda não tiver)
- **Windows/Mac:** https://nodejs.org/
- **Linux:** `sudo apt install nodejs npm` (Ubuntu/Debian)

### 3. Instalar Dependências
```bash
cd energee_com_br_new
npm install
```

### 4. Iniciar Servidor Local
```bash
npm run dev
```

### 5. Acessar no Navegador
Abra: http://localhost:3003

## 🔧 Estrutura Mínima Necessária

Você precisa baixar:
- ✅ `src/` - Todo o código fonte
- ✅ `public/` - Arquivos estáticos
- ✅ `package.json` - Dependências
- ✅ `vite.config.ts` - Configuração
- ✅ `tailwind.config.ts` - Configuração Tailwind
- ✅ `tsconfig.json` - Configuração TypeScript
- ✅ `index.html` - HTML principal
- ❌ `node_modules/` - NÃO precisa (será instalado com `npm install`)
- ❌ `dist/` - NÃO precisa (será gerado com `npm run build`)

## 🌐 Alternativa: Acessar Remotamente

Se preferir não baixar, você pode:
1. Acessar o servidor via SSH
2. Editar os arquivos diretamente no servidor
3. O servidor já está rodando em http://148.230.78.95:3003

## 📝 Notas

- O arquivo compactado foi criado em: `/tmp/energee_com_br_new.tar.gz`
- Tamanho aproximado (sem node_modules): ~2-5 MB
- Com `npm install`, o `node_modules` será ~100-150 MB

---

**Precisa de ajuda?** Entre em contato ou consulte a documentação do projeto.


