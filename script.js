const SERVER_URL = 'http://localhost:3000';

document.getElementById('sendButton').addEventListener('click', async () => {
    const number = document.getElementById('number').value;
    const message = document.getElementById('message').value;
    const responseElement = document.getElementById('response');

    if (!number || !message) {
        responseElement.textContent = '⚠️ Preencha todos os campos!';
        responseElement.style.color = 'red';
        return;
    }

    try {
        const response = await fetch(`${SERVER_URL}/send`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ to: number, message })
        });

        const data = await response.json();
        if (data.success) {
            responseElement.textContent = '✅ Mensagem enviada com sucesso!';
            responseElement.style.color = 'green';
        } else {
            responseElement.textContent = `❌ Erro: ${data.error}`;
            responseElement.style.color = 'red';
        }
    } catch (error) {
        responseElement.textContent = '❌ Erro ao conectar ao servidor!';
        responseElement.style.color = 'red';
    }
});

async function checkStatus() {
    try {
        const response = await fetch(`${SERVER_URL}/status`);
        const data = await response.json();
        const statusElement = document.querySelector('.status-indicator');

        if (data.connected) {
            statusElement.textContent = 'Conectado';
            statusElement.classList.add('status-connected');
        } else {
            statusElement.textContent = 'Desconectado';
            statusElement.classList.remove('status-connected');
        }
    } catch (error) {
        console.error('Erro ao obter status:', error);
    }
}

setInterval(checkStatus, 5000);
