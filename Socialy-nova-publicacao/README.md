# Socialy - Tela Nova Publicação 📱

Implementação em React Native (Expo) idêntica ao design de referência da tela **"Nova Publicação"**.

---

## 🎨 Características Visuais Fiéis ao Design

- **Cabeçalho**:
  - Botão de fechar `✕` em tom vinho/berry (`#A33757`) à esquerda com feedback tátil e confirmação de descarte.
  - Título centralizado **"Nova Publicação"** em negrito (`#000000`).
  - Fundo contínuo no tom blush pastel (`#FFE9E8`).

- **Card de Publicação**:
  - Card branco (`#FFFFFF`) com bordas arredondadas e sombra suave.
  - Pergunta em destaque: **"O que você está pensando?"**.
  - Caixa de texto interna com fundo cinza suave (`#F3F4F6`), borda delicada e placeholder *"Escreva algo..."*.
  - Ações na base do card:
    - 📷 **Imagem** (com ícone outline em tom `#DC586D`)
    - 📍 **Localização** (com ícone de pin outline em tom `#DC586D`)
    - 😊 **Sentimento** (com ícone smiley outline em tom `#DC586D`)
  - Badges visuais quando o usuário seleciona imagem, localização ou sentimento.

- **Botão Publicar**:
  - Centralizado logo abaixo do card.
  - Cor vibrante `#DC586D` com cantos arredondados e sombra luminosa.
  - Validação de conteúdo antes de publicar.

- **Barra de Navegação Inferior**:
  - Linha divisória superior sutil em tom rosado (`#E8BCC3`).
  - Fundo em tom blush pastel (`#FFE9E8`).
  - 5 abas perfeitamente distribuídas:
    1. **Início** (ícone home outline)
    2. **Buscar** (ícone busca outline)
    3. **+** (botão circular flutuante em destaque com fundo `#DC586D`)
    4. **Notificações** (ícone sino outline)
    5. **perfil** (ícone person preenchido, texto em minúsculo conforme o design)

---

## 🚀 Como Executar o Projeto

No terminal dentro desta pasta (`c:\Users\53808948876\Desktop\Socialy-nova-publicacao`):

### 1. Iniciar no Navegador (Web)
```bash
npm run web
```
*(ou `npx expo start --web`)*

### 2. Iniciar no Celular (Expo Go)
```bash
npm start
```
Escaneie o QR Code exibido no terminal utilizando o aplicativo **Expo Go** (Android ou iOS).

### 3. Iniciar no Emulador Android
```bash
npm run android
```
