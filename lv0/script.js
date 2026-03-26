function verificarSenha() {
    // Definimos a senha base e limpamos a entrada do usuário
    const senhaCorreta = "friedrich"; 
    const input = document.getElementById("senha");
    const senhaDigitada = input.value.trim().toLowerCase();
    const mensagem = document.getElementById("mensagem");

    // Verifica se a senha está correta (independente de maiúsculas/minúsculas)
    if (senhaDigitada === senhaCorreta) {
        // Estilo de Sucesso
        mensagem.style.color = "lightgreen";
        mensagem.textContent = "ACESSO PERMITIDO";
        mensagem.style.fontFamily = "'FonteBotao', sans-serif";

        // Redireciona para a próxima fase
        setTimeout(() => {
            window.location.href = "./lv1/access_level_1.html";
        }, 1200);

    } else {
        // Estilo de Erro
        mensagem.style.color = "red";
        mensagem.textContent = "Falha ao tentar acessar";
        mensagem.style.fontFamily = "'FonteBotao', sans-serif";
        
        // Limpa o campo para nova tentativa e foca o cursor
        input.value = "";
        input.focus();
    }
}

// Lógica da música (mantida para garantir o áudio)
window.addEventListener("load", () => {
    const musica = document.getElementById("musica");
    if (musica) {
        musica.volume = 0.2;
        musica.play().catch(() => {
            document.addEventListener("click", () => {
                musica.muted = false;
                musica.play();
            }, { once: true });
        });
    }
});