export const conversations = [
  {
    id: 1,
    name: "Ana Silva",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
    lastMessage: "Obrigada pela pergunta interessante!",
    time: "14:32",
    unread: 2,
    online: true
  },
  {
    id: 2,
    name: "Carlos Mendes",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    lastMessage: "Vou enviar o material que mencionei",
    time: "13:45",
    unread: 0,
    online: false
  },
  {
    id: 3,
    name: "Maria Santos",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    lastMessage: "Os dados que você pediu estão prontos",
    time: "12:20",
    unread: 1,
    online: true
  },
  {
    id: 4,
    name: "Suporte Técnico",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    lastMessage: "Como posso ajudar?",
    time: "11:15",
    unread: 0,
    online: true
  }
];

export const chatMessages = {
  1: [
    {
      id: 1,
      text: "Olá! Gostei muito da sua apresentação sobre IA.",
      sender: "me",
      time: "14:30",
      read: true
    },
    {
      id: 2,
      text: "Obrigada! Fico feliz que tenha gostado. Qual parte mais te interessou?",
      sender: "other",
      time: "14:31",
      read: true
    },
    {
      id: 3,
      text: "A parte sobre machine learning aplicado ao negócio foi fascinante!",
      sender: "me",
      time: "14:31",
      read: true
    },
    {
      id: 4,
      text: "Obrigada pela pergunta interessante!",
      sender: "other",
      time: "14:32",
      read: false
    }
  ],
  2: [
    {
      id: 1,
      text: "Oi Carlos! Poderia compartilhar os slides da apresentação?",
      sender: "me",
      time: "13:40",
      read: true
    },
    {
      id: 2,
      text: "Claro! Vou enviar o material que mencionei",
      sender: "other",
      time: "13:45",
      read: true
    }
  ],
  3: [
    {
      id: 1,
      text: "Maria, você tem os dados sobre o projeto que discutimos?",
      sender: "me",
      time: "12:15",
      read: true
    },
    {
      id: 2,
      text: "Os dados que você pediu estão prontos",
      sender: "other",
      time: "12:20",
      read: false
    }
  ]
};