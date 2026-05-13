# 🌐 Assistente Virtual - Frontend

Este é o projeto de interface (Frontend) que se conecta à API Flask hospedada no Render. Ele envia a pergunta do usuário via requisição POST e exibe a resposta da inteligência artificial diretamente na tela.

## 🛠️ Tecnologias
* HTML5
* CSS3
* JavaScript (Fetch API)

## 📁 Estrutura de Conexão Básica

O código abaixo realiza a integração obrigatória enviando os dados no formato JSON exigido pelo servidor backend.

```javascript
// Substitua pela URL gerada pelo seu Render
const API_URL = "onrender.com";

async function perguntarAoAssistente() {
    const inputMensagem = document.getElementById("mensagemUsuario").value;
    const campoResposta = document.getElementById("respostaIA");

    if (!inputMensagem) return alert("Digite uma mensagem!");

    campoResposta.innerText = "Carregando resposta...";

    try {
        const response = await fetch(API_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json" // Evita o erro 415 detectado nos logs
            },
            body: JSON.stringify({
                mensagem: inputMensagem
            })
        });

        if (!response.ok) {
            throw new Error(`Erro no servidor: ${response.status}`);
        }

        const dados = await response.json();
        
        // Exibe o retorno da função chat_whit_tools na tela
        campoResposta.innerText = dados; 

    } catch (error) {
        console.error("Erro completo:", error);
        campoResposta.innerText = "Falha ao obter resposta do assistente.";
    }
}
```

## 🚨 Observações Importantes para o Desenvolvimento

1. **Erro 415 (Unsupported Media Type):** 
   O cabeçalho `"Content-Type": "application/json"` está incluído na requisição JavaScript. Ele resolve o bloqueio de segurança do Flask identificado nos primeiros testes de deploy.
2. **CORS:** 
   O backend já possui a extensão `flask-cors` ativa no `main.py`, permitindo que este código JavaScript funcione rodando localmente (ex: via Live Server do VS Code) ou em qualquer servidor de hospedagem estática.
