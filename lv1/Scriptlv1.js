window.addEventListener("load", () => {
    const musica = document.getElementById("musica");
    musica.volume = 0.2;

    // tenta tocar automaticamente
    musica.play().catch(() => {
        // se bloqueou, espera um clique do usuário
        document.addEventListener("click", () => {
            musica.muted = false; // desliga mute
            musica.play();         // toca música
        }, { once: true });
    });
});

// Função para abrir páginas com ou sem senha
function abrirPagina(pagina, precisaSenha = false, senhaCorreta = "") {
    if (!precisaSenha) {
        window.location.href = pagina;
        return;
    }

    const senha = prompt("Digite a senha para acessar este nível:");
    if (senha === senhaCorreta) {
        window.location.href = pagina;
    } else {
        alert("Senha incorreta!");
    }
}