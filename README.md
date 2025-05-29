# AccentureApp - Events Platform
Projeto desenvolvido como plataforma completa para gerenciamento de eventos corporativos da Accenture.


## 📋 Descrição Geral do Sistema

**AccentureApp** é um sistema web desenvolvido para o gerenciamento completo de eventos corporativos, com foco em proporcionar uma experiência moderna e integrada para participantes, palestrantes e organizadores. A aplicação oferece uma interface responsiva e intuitiva que integra autenticação segura, gestão de agenda personalizada, networking através de QR codes e um sistema completo de informações sobre palestrantes e programação, oferecendo uma experiência premium alinhada aos padrões de excelência da Accenture.

---

## 🚀 Funcionalidades

**Sistema de Autenticação Segura**: Login com email corporativo + código de verificação para garantir acesso autorizado.

**Dashboard Inteligente**: Portal centralizado com busca por IA, cards interativos e visão geral do evento em tempo real.

**Gestão de Palestrantes**: Catálogo completo com perfis detalhados, modais interativos e sistema de favoritos.

**Programação Dinâmica**: Agenda organizada por dias com inscrições em tempo real, categorização por temas e controle de vagas.

**Agenda Pessoal**: Visualização personalizada dos eventos inscritos vs programação geral com gestão de conflitos.

**QR Scanner & Networking**: Leitor integrado para check-in automático e troca de contatos entre participantes.

**Perfil Digital**: Cartão de visita personalizado com QR code próprio para networking profissional.

**Central de Ajuda (FAQ)**: Sistema categorizado de perguntas frequentes com busca inteligente.

**Design Responsivo**: Interface mobile-first com identidade visual Accenture e efeitos glassmorphism.

---

## 🛠️ Tecnologias Utilizadas

### **Frontend**
- **React 18.3.1** - Framework principal para interface
- **React Router DOM 6.23.1** - Sistema de roteamento SPA
- **CSS3 Modular** - Estilização responsiva e componetizada
- **Context API** - Gerenciamento de estado global
- **Lucide React 0.263.1** - Biblioteca de ícones consistente

### **Build & Development**
- **Vite 5.2.11** - Build tool moderna e servidor de desenvolvimento
- **ESLint 8.57.0** - Linter para qualidade de código
- **@vitejs/plugin-react 4.3.0** - Plugin oficial React para Vite

### **Funcionalidades Especiais**
- **QR Scanner 1.4.2** - Leitura de códigos QR para networking
- **Local Storage** - Persistência de dados de sessão
- **Progressive Enhancement** - Funcionalidades que melhoram progressivamente

### **Integrações Externas**
- **Glassmorphism CSS** - Design moderno com transparências
- **Mobile-first Responsive** - Compatibilidade total com dispositivos móveis
- **PWA Ready** - Preparado para Progressive Web App

---

## 📦 AccentureApp - Instruções de Implantação

Logo abaixo descrevemos o passo a passo completo para implantação do projeto AccentureApp, permitindo que qualquer pessoa possa rodar a aplicação do zero, em um novo ambiente.

---

## ✅ Pré-requisitos

Antes de começar, certifique-se de ter instalado:

- **Node.js** (versão 16 ou superior)
- **Git** (opcional, para clonar o repositório)
- **Navegador web moderno** (Google Chrome, Firefox, Safari, Edge)
- **Editor de código** (VS Code recomendado)

---

## 📁 Estrutura do Projeto

```
AccentureApp/
├── public/
│   ├── index.html
│   ├── accenture-logo.png
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── Dashboard.jsx
│   │   ├── Dashboard.css
│   │   ├── Loading.jsx
│   │   ├── Loading.css
│   │   ├── QRScanner.jsx
│   │   ├── QRScanner.css
│   │   ├── SpeakerModal.jsx
│   │   └── SpeakerModal.css
│   ├── context/
│   │   └── AuthContext.jsx
│   ├── pages/
│   │   ├── Agenda.jsx
│   │   ├── Agenda.css
│   │   ├── FAQ.jsx
│   │   ├── FAQ.css
│   │   ├── Login.jsx
│   │   ├── Login.css
│   │   ├── Palestrantes.jsx
│   │   ├── Palestrantes.css
│   │   ├── Profile.jsx
│   │   ├── Profile.css
│   │   ├── QRCode.jsx
│   │   ├── QRCode.css
│   │   ├── Schedules.jsx
│   │   ├── Schedules.css
│   │   └── Welcome.jsx
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── eslint.config.js
├── package.json
├── package-lock.json
├── README.md
└── vite.config.js
```

Se você não possui esses arquivos ainda, clone o repositório fornecido.

---

## 🚀 Etapas de Instalação e Execução

### **1. Clone ou baixe os arquivos do projeto**

Você pode clonar via Git:

```bash
git clone https://github.com/hiltonnery/AccentureApp.git
cd AccentureApp
```

### **2. Instale as dependências do projeto**

```bash
npm install
```

Isso instalará as bibliotecas necessárias, como:
- **react** e **react-dom** (framework principal)
- **react-router-dom** (roteamento)
- **qr-scanner** (funcionalidade de QR)
- **lucide-react** (ícones)
- **vite** (build tool)
- **eslint** (qualidade de código)

### **3. Estrutura de arquivos estáticos**

Verifique se os arquivos estão organizados conforme a estrutura acima. O Vite automaticamente servirá os arquivos da pasta `public/` e compilará os componentes React da pasta `src/`.

### **4. Inicie o servidor de desenvolvimento**

Para ambiente de desenvolvimento (com hot-reload):
```bash
npm run dev
```

Para build de produção:
```bash
npm run build
npm run preview
```

### **5. Acesse o sistema no navegador**

```
http://localhost:5173
```

Você verá a tela de login do AccentureApp, com interface moderna e responsiva.

---

## 🧪 Teste a aplicação

Você pode testar funcionalidades como:

### **Login de Teste**
- **Email:** admin@accenture.com
- **Código:** 123456

### **Funcionalidades Principais**
- **Dashboard inteligente** com cards interativos
- **Gestão de palestrantes** com modais detalhados
- **Sistema de inscrições** em palestras com controle de vagas
- **Agenda personalizada** vs programação geral
- **QR Scanner** para networking e check-in
- **Perfil digital** com QR code próprio
- **FAQ categorizado** com busca
- **Design responsivo** em mobile e desktop

---

## 🔧 Scripts Disponíveis

```bash
# Desenvolvimento com hot-reload
npm run dev

# Build para produção
npm run build

# Preview do build de produção
npm run preview

# Linting do código
npm run lint
```

---
