function sendMessage() {
    const userInput = document.getElementById('user-input').value;
    if (userInput.trim() === '') return;
    
    appendMessage('user', userInput);
    document.getElementById('user-input').value = '';

    fetch(`/get_response?query=${encodeURIComponent(userInput)}`)
        .then(response => response.json())
        .then(data => {
            appendMessage('bot', data.response);
        })
        .catch(error => {
            console.error('Error:', error);
            appendMessage('bot', 'Sorry, there was an error.');
        });
}

function appendMessage(sender, text) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${sender}-message`;
    messageDiv.textContent = text;
    document.getElementById('chatbox-body').appendChild(messageDiv);
    document.getElementById('chatbox-body').scrollTop = document.getElementById('chatbox-body').scrollHeight;
}
