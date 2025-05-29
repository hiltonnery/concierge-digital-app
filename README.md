# 🚀 Concierge Digital App – Squad 18 (Accenture)

Plataforma web completa para gerenciamento de eventos corporativos com foco em experiência digital moderna, networking inteligente e gestão eficiente de agendas e palestrantes.

---

## 📑 Índice

1. [📋 Descrição Geral do Sistema](#-descrição-geral-do-sistema)
2. [🚀 Funcionalidades](#-funcionalidades)
3. [🛠️ Tecnologias Utilizadas](#-tecnologias-utilizadas)
4. [✅ Pré-requisitos](#-pré-requisitos)
5. [📁 Estrutura do Projeto](#-estrutura-do-projeto)
6. [🚀 Etapas de Instalação e Execução](#-etapas-de-instalação-e-execução)
7. [🧪 Teste a Aplicação](#-teste-a-aplicação)
8. [🔌 Integrações Futuras (Planejado)](#-integrações-futuras-planejado)
9. [⚠️ Licença](#️-licença)

---

## 📋 Descrição Geral do Sistema

**Concierge Digital App** é um sistema web desenvolvido para o gerenciamento completo de eventos corporativos, com foco em proporcionar uma experiência moderna e integrada para participantes, palestrantes e organizadores.

---

## 🚀 Funcionalidades

- 🔐 **Autenticação Segura** com email corporativo e código de verificação
- 📊 **Dashboard Inteligente** com cards dinâmicos e busca por IA
- 🎤 **Gestão de Palestrantes** com perfis, modais e favoritos
- 🗓️ **Programação Dinâmica** com inscrições, filtros e controle de vagas
- 🧾 **Agenda Pessoal** com conflitos visuais e sincronização
- 📷 **QR Scanner & Networking** para check-in automático e troca de contatos
- 🧑‍💼 **Perfil Digital com QR Code** para networking profissional
- ❓ **Central de Ajuda (FAQ)** categorizada e com busca inteligente
- 📱 **Design Responsivo & Glassmorphism** preparado para mobile-first

---

## 🛠️ Tecnologias Utilizadas

### **Frontend**
- `React 18.3.1` – Framework principal para interface
- `React Router DOM 6.23.1` – Sistema de roteamento SPA
- `Context API` – Gerenciamento de estado global
- `Lucide React 0.263.1` – Biblioteca de ícones moderna

### **Estilização**
- `CSS Modules` – Estilização componentizada e modular
- `Glassmorphism` – Design com transparência e profundidade
- `Mobile-first Design` – Priorização da experiência mobile

### **Build & Desenvolvimento**
- `Vite 5.2.11` – Build tool leve e performática
- `ESLint 8.57.0` – Linter para padronização e qualidade de código
- `@vitejs/plugin-react 4.3.0` – Plugin oficial do React para Vite

### **Funcionalidades Especiais**
- `QR Scanner 1.4.2` – Leitura de códigos QR para networking e check-in
- `LocalStorage` – Armazenamento local de dados de sessão
- `Progressive Enhancement` – Melhoria progressiva de funcionalidades
- `PWA Ready` – Suporte a Progressive Web App

---

## 📦 Instruções de Implantação

Logo abaixo descrevemos o passo a passo completo para implantação do projeto Concierge Digital App, permitindo que qualquer pessoa possa rodar a aplicação do zero, em um novo ambiente.

---

## ✅ Pré-requisitos

- [Node.js](https://nodejs.org/) v16 ou superior
- Git (opcional)
- Navegador moderno (Chrome, Firefox, Edge)
- Editor de código (VS Code recomendado)

---

## 📁 Estrutura do Projeto

```
concierge-digital-app/
├── public/
│   ├── index.html
│   ├── accenture-logo.png
│   └── vite.svg
├── src/
│   ├── components/
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

> Se você não possui esses arquivos ainda, clone o repositório fornecido.

---

## 🚀 Etapas de Instalação e Execução

### 1. Clone o repositório

```
git clone https://github.com/hiltonnery/concierge-digital-app.git
cd concierge-digital-app
```

### 2. Instale as dependências
```
npm install
```

### 3. Inicie o servidor de desenvolvimento
```
npm run dev
```

### 4. Acesse no navegador
```
http://localhost:5173
```
---

## 🧪 Teste a Aplicação

Você pode testar as seguintes funcionalidades:

### 🔐 Login de Teste
- **Email:** admin@accenture.com
- **Código:** 123456

### ✅ Funcionalidades Disponíveis para Teste
- Dashboard inteligente com cards interativos e busca por IA
- Gestão de palestrantes com modais detalhados e sistema de favoritos
- Inscrição em palestras com controle de vagas e filtros por tema
- Agenda personalizada e visualização de conflitos
- QR Scanner para networking e check-in automático
- Cartão de perfil com QR Code para networking digital
- Central de Ajuda (FAQ) categorizada e com busca inteligente
- Interface responsiva otimizada para mobile e desktop

---

## 📌 Considerações Finais

Este projeto é uma prova de conceito acadêmica que aplica tecnologias modernas para construir experiências automatizadas de serviço em eventos corporativos.

O código está disponível para fins de aprendizado, teste e desenvolvimento futuro.

---

© 2025 Concierge Digital – Accenture SQUAD 18
 
*Residência em Tecnologia Porto Digital*
