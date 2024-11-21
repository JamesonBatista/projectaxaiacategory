const card = document.getElementById('card');
const chatHeader = document.getElementById('chatHeader');
const chatOutput = document.getElementById('chatOutput');
const userInput = document.getElementById('userInput');

// Variável para armazenar o histórico de mensagens por funcionalidade
const chatHistory = {};

// Mostra o chat ao selecionar uma funcionalidade
function showChat(feature) {
  chatHeader.textContent = `Você selecionou: ${feature}`;

  // Verifica se há histórico para a funcionalidade selecionada
  if (chatHistory[feature]) {
    chatOutput.innerHTML = chatHistory[feature];
  } else {
    chatOutput.innerHTML = ''; // Limpa o chat se não houver histórico
  }

  card.style.transform = 'rotateY(180deg)';

  // Atualiza o card de explicação com base na funcionalidade
  updateExplanationCard(feature);
}

// Retorna ao menu principal
function showMenu() {
  const currentFeature = chatHeader.textContent.replace('Você selecionou: ', '').trim();

  // Salva o histórico da funcionalidade atual antes de voltar
  if (currentFeature) {
    chatHistory[currentFeature] = chatOutput.innerHTML;
  }

  card.style.transform = 'rotateY(0deg)';
}

// Envia a mensagem do usuário e adiciona a resposta da IA
function sendMessage() {
  const userMessage = userInput.value.trim();
  if (!userMessage) return;

  // Adiciona mensagem do usuário
  const userBubble = document.createElement('div');
  userBubble.textContent = userMessage;
  userBubble.classList.add('user-message');
  chatOutput.appendChild(userBubble);

  // Adiciona resposta da IA
  const botBubble = document.createElement('div');
  botBubble.textContent = `IA: Resposta para "${userMessage}"`;
  botBubble.classList.add('bot-message');
  chatOutput.appendChild(botBubble);

  // Rolagem automática para última mensagem
  chatOutput.scrollTop = chatOutput.scrollHeight;

  // Limpa o input
  userInput.value = '';

  // Salva o histórico da funcionalidade atual
  const currentFeature = chatHeader.textContent.replace('Você selecionou: ', '').trim();
  if (currentFeature) {
    chatHistory[currentFeature] = chatOutput.innerHTML;
  }
}

// Atualiza o card de explicação com base na funcionalidade
function updateExplanationCard(feature) {
  const explanations = {
    Test: {
      title: 'Teste',
      text: 'Aqui você pode realizar testes e verificar funcionalidades.',
    },
    'Cenários': {
      title: 'Cenários',
      text: 'Nesta seção, você pode gerenciar cenários de teste.',
    },
    'Opção 3': {
      title: 'Opção 3',
      text: 'Detalhes sobre a funcionalidade da opção 3.',
    },
    'Opção 4': {
      title: 'Opção 4',
      text: 'Detalhes sobre a funcionalidade da opção 4.',
    },
    'Opção 5': {
      title: 'Opção 5',
      text: 'Detalhes sobre a funcionalidade da opção 5.',
    },
    'Opção 6': {
      title: 'Opção 6',
      text: 'Detalhes sobre a funcionalidade da opção 6.',
    },
  };

  if (explanations[feature]) {
    explanationTitle.textContent = explanations[feature].title;
    explanationText.textContent = explanations[feature].text;
  } else {
    explanationTitle.textContent = 'Título Desconhecido';
    explanationText.textContent = 'Nenhuma informação disponível.';
  }
}

// Adiciona evento para enviar mensagem ao pressionar Enter
userInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    sendMessage();
  }
});
function handleFileSelect(event) {
  const file = event.target.files[0]; // Obtém o primeiro arquivo selecionado

  if (file) {
    // Adiciona a mensagem ao chat
    const fileBubble = document.createElement('div');
    fileBubble.textContent = `Arquivo selecionado: ${file.name}`;
    fileBubble.classList.add('user-message');
    chatOutput.appendChild(fileBubble);

    // Rolagem automática para a última mensagem
    chatOutput.scrollTop = chatOutput.scrollHeight;
  }
}
