const card = document.getElementById('card');
const chatHeader = document.getElementById('chatHeader');
const chatOutput = document.getElementById('chatOutput');
const userInput = document.getElementById('userInput');

// Variável para armazenar o histórico de mensagens por funcionalidade
const chatHistory = {};

// Mostra o chat ao selecionar uma funcionalidade
function showChat(feature) {
  // Atualiza o cabeçalho do chat
  chatHeader.textContent = `Você selecionou: ${feature}`;
  
  // Verifica se há histórico para a funcionalidade selecionada
  if (chatHistory[feature]) {
    chatOutput.innerHTML = chatHistory[feature];
  } else {
    chatOutput.innerHTML = ''; // Limpa o chat se não houver histórico
  }

  card.style.transform = 'rotateY(180deg)';
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
  botBubble.textContent = `IA: ${userMessage}`;
  botBubble.classList.add('bot-message');
  chatOutput.appendChild(botBubble);

  // Rolagem automática para a última mensagem
  chatOutput.scrollTop = chatOutput.scrollHeight;

  // Limpa o input
  userInput.value = '';
}

// Adiciona evento para enviar mensagem ao pressionar Enter
userInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    sendMessage();
  }
});
