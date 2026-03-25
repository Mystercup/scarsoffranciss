function verificarSenha() {
    const senhaCorreta = "Friedrich";
    const senhaDigitada = document.getElementById("senha").value;
    const mensagem = document.getElementById("mensagem");

    if (senhaDigitada === senhaCorreta) {
        mensagem.style.color = "lightgreen";
        mensagem.textContent = "Acesso permitido";

        // redireciona para "access_level_1.html" dentro da pasta lv1
        setTimeout(() => {
            window.location.href = "../lv1/access_level_1.html";
        }, 500);

    } else {
        mensagem.style.color = "red";
        mensagem.textContent = "Falha ao tentar acessar";
    }
}


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