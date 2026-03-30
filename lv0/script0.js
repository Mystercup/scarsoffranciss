function verificarSenha() {
 
    const senhaCorreta = "friedrich"; 
    const input = document.getElementById("senha");
    const senhaDigitada = input.value.trim().toLowerCase();
    const mensagem = document.getElementById("mensagem");

    
    if (senhaDigitada === senhaCorreta) {
    
        mensagem.style.color = "lightgreen";
        mensagem.textContent = "ACESSO PERMITIDO";
        mensagem.style.fontFamily = "'FonteBotao', sans-serif";

        sessionStorage.setItem("acesso_lv1_autorizado", "true");
       
        setTimeout(() => {
            window.location.href = "./lv1/access_level_1.html";
        }, 1200);

    } else {
        
        mensagem.style.color = "red";
        mensagem.textContent = "Falha ao tentar acessar";
        mensagem.style.fontFamily = "'FonteBotao', sans-serif";
        
       
        input.value = "";
        input.focus();
    }
}


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