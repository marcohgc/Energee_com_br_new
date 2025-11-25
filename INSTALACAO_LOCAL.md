# 🚀 Guia de Instalação Local - Energee.com.br

Este guia explica como instalar e executar o novo site do Energee localmente para testes.

## 📋 Pré-requisitos

- **Node.js** (versão 18 ou superior) ✅
- **npm** (vem com Node.js) ✅

## 🔧 Passos de Instalação

### 1. Navegar até a pasta do projeto

```bash
cd /var/www/html/energee_com_br_new
```

### 2. Instalar dependências

```bash
npm install
```

Este comando irá instalar todas as dependências necessárias:
- React 18
- TypeScript
- Vite
- Tailwind CSS
- E outras dependências listadas no `package.json`

### 3. Iniciar servidor de desenvolvimento

```bash
npm run dev
```

Ou simplesmente:

```bash
npm start
```

O servidor iniciará em: **http://localhost:3003** ou **http://0.0.0.0:3003**

## 🌐 Acessando o Site

Após iniciar o servidor, você pode acessar:

- **Localmente:** http://localhost:3003
- **Na rede local:** http://SEU_IP:3003
- **No servidor:** http://148.230.78.95:3003 (se estiver rodando no servidor)

## 🛠️ Scripts Disponíveis

```bash
# Iniciar servidor de desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview do build de produção
npm run preview

# Executar linter
npm run lint

# Alias para dev
npm start
```

## 📁 Estrutura do Projeto

```
energee_com_br_new/
├── src/              # Código fonte
│   ├── assets/       # Imagens e assets
│   ├── App.tsx       # Componente principal
│   ├── main.tsx      # Entry point
│   └── index.css     # Estilos globais
├── public/           # Arquivos estáticos
├── dist/             # Build de produção (gerado)
├── node_modules/     # Dependências (gerado)
├── index.html        # HTML template
├── vite.config.ts    # Configuração Vite
├── tailwind.config.ts # Configuração Tailwind
└── package.json      # Dependências
```

## 🔍 Verificando se está funcionando

1. Execute `npm run dev`
2. Abra o navegador em `http://localhost:3003`
3. Você deve ver o site do Energee carregando

## ⚠️ Solução de Problemas

### Porta 3003 já em uso

Se a porta 3003 estiver ocupada, você pode:

1. Alterar a porta no `vite.config.ts`:
```typescript
server: {
  port: 3004, // ou outra porta disponível
}
```

2. Ou usar uma porta diferente temporariamente:
```bash
npm run dev -- --port 3004
```

### Erro ao instalar dependências

```bash
# Limpar cache e reinstalar
rm -rf node_modules package-lock.json
npm install
```

### Problemas com permissões

```bash
# Dar permissões à pasta
sudo chown -R $USER:$USER /var/www/html/energee_com_br_new
```

## 🚀 Executando em Background (PM2)

Se quiser executar em background usando PM2:

```bash
pm2 start ecosystem.config.cjs
pm2 status
pm2 logs energee-com-br-website
```

## 📝 Notas

- O servidor de desenvolvimento tem **Hot Module Replacement (HMR)** ativado
- Mudanças no código são refletidas automaticamente no navegador
- Para produção, use `npm run build` e sirva os arquivos da pasta `dist/`

---

**Última atualização:** 2025-11-21


