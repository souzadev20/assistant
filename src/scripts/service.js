export const enviarPergunta = async (mensagemUsuario) => {
    const url = "https://api-assistant-3xhq.onrender.com/assistant"; // Sua rota Flask

    try {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json" // Avisa o Flask/Express que é um JSON
            },
            body: JSON.stringify({ mensagem: mensagemUsuario }) // Converte objeto para string JSON
        });

        if (!response.ok) {
            throw new Error(`Erro no servidor: ${response.status}`);
        }

        const dados = await response.json(); // Transforma a resposta em objeto JS
        console.log("Resposta da IA:", dados);
        
        // Aqui você atualizaria o seu painel de resposta no HTML
        document.getElementById("output").innerText = dados;

    } catch (erro) {
        console.error("Falha ao buscar dados:", erro);
    }
};
