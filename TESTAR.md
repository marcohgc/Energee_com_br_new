# Como Testar o Site Energee.IA

## 📋 Pré-requisitos

1. **Node.js instalado** (versão 18 ou superior)
2. **npm instalado**

## 🚀 Passos para Testar

### 1. Instalar Dependências (se ainda não instalou)

```bash
cd /var/www/html/energee_com_br_new
npm install
```

### 2. Iniciar Servidor de Desenvolvimento

```bash
npm run dev
```

ou

```bash
npm start
```

### 3. Acessar o Site

Após iniciar o servidor, você verá uma mensagem como:

```
  VITE v5.x.x  ready in xxx ms

  ➜  Local:   http://localhost:3003/
  ➜  Network: http://148.230.78.95:3003/
```

**Acesse o site em:**
- **Local**: `http://localhost:3003/`
- **Rede**: `http://148.230.78.95:3003/`
- **Via Nginx**: `http://148.230.78.95/` (se configurado)

### 4. Testar Funcionalidades

#### ✅ Navegação
- Teste o menu de navegação (desktop e mobile)
- Clique nos links do menu para navegar entre seções
- Verifique o scroll suave entre seções

#### ✅ Responsividade
- Redimensione a janela do navegador
- Teste em diferentes tamanhos de tela
- Verifique o menu mobile (aparece em telas menores)

#### ✅ Componentes
- **Hero Section**: Verifique os botões de CTA
- **Functions Section**: Veja os cards de funcionalidades
- **Integration Section**: Verifique as integrações de hardware
- **AIFeatures Section**: Veja as capacidades de IA
- **Customers Section**: Verifique os tipos de clientes
- **Contact Section**: Teste o formulário de contato
- **Pricing Section**: Veja os planos disponíveis
- **Floating WhatsApp**: Clique no botão flutuante do WhatsApp

#### ✅ Animações
- Observe as animações de fade-in e fade-in-up
- Verifique os efeitos de hover nos cards
- Veja as animações de blob no background

### 5. Verificar Console do Navegador

Abra o Console do Navegador (F12) e verifique:
- ✅ Sem erros de JavaScript
- ✅ Sem erros de CSS
- ✅ Sem erros de rede

## 🛑 Parar o Servidor

Para parar o servidor, pressione `Ctrl + C` no terminal.

## 📦 Build para Produção

Para criar um build de produção:

```bash
npm run build
```

Os arquivos serão gerados em `dist/`

## 🔧 Troubleshooting

### Porta 3003 já em uso

Se a porta 3003 estiver ocupada:

1. **Verificar processo:**
   ```bash
   lsof -ti:3003
   ```

2. **Matar processo:**
   ```bash
   kill -9 $(lsof -ti:3003)
   ```

3. **Ou usar outra porta:**
   Edite `vite.config.ts` e altere a porta

### Erros de dependências

Se houver erros de dependências:

```bash
rm -rf node_modules package-lock.json
npm install
```

### Erros de compilação

Se houver erros de compilação:

```bash
npm run lint
```

## 📝 Notas

- O servidor de desenvolvimento usa **Hot Module Replacement (HMR)**
- Mudanças no código são refletidas automaticamente no navegador
- Não precisa recarregar a página manualmente

---

**Última atualização**: 2025-11-03

