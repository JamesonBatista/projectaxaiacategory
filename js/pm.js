// Função para o botão "Voltar"
function goBack() {
	window.history.back(); // Volta para a página anterior
  }
  
  // Função para envio de mensagens
  const sendButton = document.getElementById('sendButton');
  const messageInput = document.getElementById('messageInput');
  const defaultTextInput = document.getElementById('defaultText');
  const includeDefaultText = document.getElementById('includeDefaultText');
  const fileInput = document.getElementById('fileInput');
  const chatBox = document.getElementById('chatBox');
  
  function sendMessage() {
	const message = messageInput.value.trim();
	const defaultText = includeDefaultText.checked ? defaultTextInput.value.trim() : '';
	const file = fileInput.files[0];
  
	// Verifica se algo foi digitado no campo de mensagem
	if (!message) {
	  alert('Por favor, digite uma mensagem antes de enviar.');
	  return;
	}
  
	const messageElement = document.createElement('div');
	messageElement.style.padding = '10px';
	messageElement.style.margin = '5px 0';
	messageElement.style.backgroundColor = '#f1f1f1';
	messageElement.style.borderRadius = '5px';
  
	// Adiciona o texto padrão, se selecionado
	if (defaultText) {
	  const defaultTextElement = document.createElement('p');
	  defaultTextElement.textContent = defaultText;
	  defaultTextElement.style.marginBottom = '10px';
	  messageElement.appendChild(defaultTextElement);
	}
  
	// Adiciona a mensagem digitada
	const userMessageElement = document.createElement('p');
	userMessageElement.textContent = message;
	messageElement.appendChild(userMessageElement);
  
	// Adiciona o nome do arquivo, se enviado
	if (file) {
	  const fileName = document.createElement('p');
	  fileName.textContent = `Arquivo enviado: ${file.name}`;
	  fileName.style.fontStyle = 'italic';
	  fileName.style.color = '#555';
	  messageElement.appendChild(fileName);
	}
  
	chatBox.appendChild(messageElement);
	simulateAIResponse(); // Simula resposta da IA
	chatBox.scrollTop = chatBox.scrollHeight;
  
	// Limpa os campos
	messageInput.value = '';
	fileInput.value = '';
  }
  
  // Simula uma resposta da IA
  function simulateAIResponse() {
	setTimeout(() => {
	  const aiMessage = document.createElement('div');
	  aiMessage.textContent = 'IA: Obrigado pela sua mensagem!';
	  aiMessage.style.padding = '10px';
	  aiMessage.style.margin = '5px 0';
	  aiMessage.style.backgroundColor = '#e1f7d5';
	  aiMessage.style.borderRadius = '5px';
	  chatBox.appendChild(aiMessage);
	  chatBox.scrollTop = chatBox.scrollHeight;
	}, 1000);
  }
  
  // Adiciona eventos ao botão de envio e ao pressionar Enter
  messageInput.addEventListener('keydown', (e) => {
	if (e.key === 'Enter' && !e.shiftKey) {
	  e.preventDefault();
	  sendMessage();
	}
  });
  
  sendButton.addEventListener('click', sendMessage);
  