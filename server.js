const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');
const express = require('express');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());
app.use(express.static('public'));

const client = new Client({
    authStrategy: new LocalAuth(),
});

let isConnected = false;

client.on('qr', qr => {
    console.log('📸 Escaneie este QR Code para conectar:');
    qrcode.generate(qr, { small: true });
});

client.on('ready', () => {
    isConnected = true;
    console.log('✅ Bot conectado ao WhatsApp!');
});

client.on('disconnected', () => {
    isConnected = false;
    console.log('⚠️ Bot desconectado do WhatsApp.');
});

/**
 * Função para formatar números corretamente
 * - Remove espaços e caracteres não numéricos
 * - Garante que tenha o código do Brasil (+55)
 * - Garante que tenha o DDD + número correto
 */
const formatNumber = (number) => {
    let cleanedNumber = number.replace(/\D/g, ''); // Remove tudo que não for número

    if (!cleanedNumber.startsWith('55')) {
        cleanedNumber = `55${cleanedNumber}`;
    }

    if (cleanedNumber.length < 12 || cleanedNumber.length > 13) {
        throw new Error('Número inválido! Verifique o DDD e o formato correto.');
    }

    return `${cleanedNumber}@c.us`;
};

app.post('/send', async (req, res) => {
    let { to, message } = req.body;

    if (!to || !message) {
        return res.status(400).json({ error: 'Número e mensagem são obrigatórios!' });
    }

    try {
        const formattedNumber = formatNumber(to);
        console.log(`📤 Enviando mensagem para: ${formattedNumber}`);

        await client.sendMessage(formattedNumber, message);
        res.json({ success: true, message: 'Mensagem enviada com sucesso!' });
    } catch (error) {
        console.error('Erro ao enviar mensagem:', error.message);
        res.status(500).json({ error: error.message });
    }
});

app.get('/status', (req, res) => {
    res.json({ connected: isConnected });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Servidor rodando na porta ${PORT}`));

client.initialize();
