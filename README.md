# 📩 WhatsApp Bot - API com Node.js e Interface Web

Este é um bot para WhatsApp criado com **Node.js**, **Express** e **whatsapp-web.js**. Ele permite **enviar mensagens automatizadas** diretamente do **navegador** ou via **requisições API**.

---

## 📌 Funcionalidades

✅ Enviar mensagens para qualquer número do WhatsApp  
✅ Interface Web para envio de mensagens  
✅ Atualização em tempo real do status de conexão  
✅ Uso de autenticação local (evita necessidade de escanear QR a cada execução)  
✅ Implementado com **whatsapp-web.js**  

---

## 🚀 Como Rodar o Projeto (Node.js + Interface Web)

### **1️⃣ Pré-requisitos**
Antes de tudo, você precisa ter instalado:

- **[Node.js](https://nodejs.org/en/download/)** (Recomendado: v16 ou superior)
- **NPM** (vem junto com o Node.js)
- **Git** (caso queira clonar o repositório)

---

### **2️⃣ Clonar o Repositório**
Se ainda não clonou o projeto, execute no terminal:

```bash
  git clone https://github.com/seuusuario/whatsapp-bot.git
  cd whatsapp-bot
```

---

### **3️⃣ Instalar as Dependências**
Antes de rodar o projeto, instale as dependências do Node.js:

```bash
  npm install
```

Isso instalará os pacotes necessários, como:

- **express** (servidor web)
- **whatsapp-web.js** (biblioteca para WhatsApp)
- **qrcode-terminal** (exibição do QR Code no terminal)
- **cors** (middleware para requisições externas)

---

### **4️⃣ Iniciar o Servidor**
Após a instalação, execute o servidor:

```bash
  node server.js
  # ou
  npm run dev
```

---

### **5️⃣ Escanear o QR Code**
Quando o servidor iniciar pela primeira vez, ele exibirá um QR Code no terminal.  
Abra o WhatsApp Web no seu celular e escaneie esse QR Code.  
Após a autenticação, o bot estará conectado e pronto para enviar mensagens.  

---

### **6️⃣ Acessar a Interface Web**
A aplicação possui uma interface web para envio de mensagens.  
Abra o navegador e acesse:

```
http://localhost:3000
```

---

## 🔗 API Endpoints
A aplicação também disponibiliza uma API REST para envio de mensagens automatizadas.

| Método | Rota      | Descrição                           |
|--------|----------|-----------------------------------|
| **GET**  | `/status` | Verifica se o bot está conectado |
| **POST** | `/send`   | Envia uma mensagem para um número do WhatsApp |

---

### 📌 **Exemplo de Envio via API**
Se quiser enviar uma mensagem via **Postman** ou **cURL**, utilize esta requisição **POST**:

```json
{
  "to": "5511999999999",
  "message": "Olá! Esta é uma mensagem automatizada."
}
```

---

## 🛠 Tecnologias Utilizadas

- **Node.js** - Ambiente de execução JavaScript  
- **Express** - Framework web para Node.js  
- **whatsapp-web.js** - Biblioteca para interagir com o WhatsApp Web  
- **qrcode-terminal** - Exibição do QR Code no terminal  
- **cors** - Middleware para permitir requisições da interface web  

---

## 🐛 Possíveis Problemas e Soluções

### ❌ Erro: `Cannot find module 'cors'`
**Solução:**
Execute o comando abaixo para instalar o pacote que está faltando:

```bash
npm install cors
```

---

### ❌ Erro ao enviar mensagens para alguns DDDs
**Solução:**

- Certifique-se de que o número segue o formato correto:  
  **55 + DDD + Número** (Exemplo: `5511999999999`)
- Teste enviar uma mensagem manualmente pelo **WhatsApp Web** antes de usar o bot.
- Adicione o número aos contatos do WhatsApp.

---

## 📜 Licença
Este projeto é distribuído sob a licença **MIT**. Sinta-se à vontade para utilizá-lo e modificá-lo conforme necessário.

📌 **Mantenha-se atualizado e contribua para o projeto!** 🚀

