# 📋 Instruções para Copiar o Website

## ✅ Arquivos Criados

### 1. Arquivo Compactado (Recomendado para Download)
- **Localização:** `/tmp/energee_com_br_new_completo.tar.gz`
- **Tamanho:** ~50 KB (sem node_modules)
- **Conteúdo:** Todos os arquivos do projeto (código-fonte, configurações, etc.)

### 2. Cópia Completa (Pasta)
- **Localização:** `/tmp/energee_com_br_new_copia/`
- **Conteúdo:** Cópia completa de todos os arquivos (exceto node_modules e dist)

## 📥 Como Baixar para Sua Máquina

### Opção 1: Baixar Arquivo Compactado (Mais Rápido)

**Via SFTP/SCP:**
1. Conecte-se ao servidor via WinSCP, FileZilla ou similar
2. Navegue até: `/tmp/`
3. Baixe: `energee_com_br_new_completo.tar.gz`
4. Na sua máquina, extraia:
   ```bash
   tar -xzf energee_com_br_new_completo.tar.gz
   cd energee_com_br_new_completo
   npm install
   npm run dev
   ```

**Via SCP (Linha de Comando):**
```bash
scp usuario@servidor:/tmp/energee_com_br_new_completo.tar.gz ~/Downloads/
cd ~/projetos
tar -xzf ~/Downloads/energee_com_br_new_completo.tar.gz
cd energee_com_br_new_completo
npm install
npm run dev
```

### Opção 2: Baixar Pasta Completa

**Via SFTP:**
1. Conecte-se ao servidor
2. Navegue até: `/tmp/energee_com_br_new_copia/`
3. Baixe toda a pasta

**Via SCP:**
```bash
scp -r usuario@servidor:/tmp/energee_com_br_new_copia ~/projetos/
cd ~/projetos/energee_com_br_new_copia
npm install
npm run dev
```

## 🔄 Copiar para Outro Local no Servidor

Se quiser copiar para outro local no próprio servidor:

```bash
# Usar o script
./copiar_website.sh /caminho/destino

# Ou manualmente
rsync -av --exclude='node_modules' --exclude='dist' \
  /var/www/html/energee_com_br_new/ \
  /caminho/destino/
```

## 📊 Informações do Projeto

- **Total de arquivos:** 35 arquivos (sem node_modules)
- **Tamanho total (com node_modules):** ~106 MB
- **Tamanho compactado (sem node_modules):** ~50 KB
- **Estrutura:** React + TypeScript + Vite + Tailwind CSS

## 🚀 Após Baixar

1. **Extrair** (se baixou o .tar.gz):
   ```bash
   tar -xzf energee_com_br_new_completo.tar.gz
   ```

2. **Instalar dependências:**
   ```bash
   cd energee_com_br_new_completo
   npm install
   ```

3. **Iniciar servidor:**
   ```bash
   npm run dev
   ```

4. **Acessar:**
   - Abra: http://localhost:3003

## 📝 Notas Importantes

- ✅ O arquivo compactado **NÃO inclui** `node_modules` (será instalado com `npm install`)
- ✅ O arquivo compactado **NÃO inclui** `dist` (será gerado com `npm run build`)
- ✅ Todos os arquivos de código-fonte estão incluídos
- ✅ Todas as configurações estão incluídas

## 🔧 Scripts Disponíveis

- `copiar_website.sh` - Script para copiar o website
- `iniciar_local.sh` - Script para iniciar servidor local
- `npm run dev` - Iniciar servidor de desenvolvimento
- `npm run build` - Build para produção

---

**Última atualização:** 2025-11-19

