// Função para o botão "Voltar"
function goBack() {
	window.history.back(); // Volta para a página anterior
  }
  
  // Função para enviar mensagens
  const sendButton = document.getElementById('sendButton');
  const messageInput = document.getElementById('messageInput');
  const fileInput = document.getElementById('fileInput');
  const chatBox = document.getElementById('chatBox');
  
  function sendMessage() {
	const message = messageInput.value.trim();
  
	// Verifica se a mensagem está vazia
	if (!message) {
	  alert('Por favor, digite uma mensagem antes de enviar.');
	  return;
	}
  
	// Adiciona mensagem do usuário
	const userMessage = document.createElement('div');
	userMessage.classList.add('user-message');
	userMessage.textContent = message;
	chatBox.appendChild(userMessage);
  
	// Adiciona resposta da IA
	simulateAIResponse();
  
	// Rola para o final do chat
	chatBox.scrollTop = chatBox.scrollHeight;
  
	// Limpa os campos
	messageInput.value = '';
	fileInput.value = '';
  }
  
  // Simula a resposta da IA
  function simulateAIResponse() {
	setTimeout(() => {
	  const aiMessage = document.createElement('div');
	  aiMessage.classList.add('ai-response');
	  aiMessage.textContent = 'IA: Obrigado pela sua mensagem!';
	  chatBox.appendChild(aiMessage);
	  chatBox.scrollTop = chatBox.scrollHeight; // Rola para o final
	}, 1000);
  }
  
  // Adiciona evento ao botão "Enviar"
  sendButton.addEventListener('click', sendMessage);
  
  // Adiciona envio ao pressionar Enter
  messageInput.addEventListener('keydown', (e) => {
	if (e.key === 'Enter' && !e.shiftKey) {
	  e.preventDefault();
	  sendMessage();
	}
  });
  