/**
 * SCRIPT2_5.JS - VERSÃO COM ALERTA PADRÃO DO NAVEGADOR
 */

const validarSenha = () => {
    const inputSenha = document.getElementById('input-senha');
    const popupSucesso = document.getElementById('popup-sucesso');

    if (!inputSenha) return;

    inputSenha.addEventListener('keydown', function(e) {
        // Captura a tecla Enter
        if (e.key === 'Enter' || e.keyCode === 13) {
            e.preventDefault(); 

            const tentativa = this.value.toLowerCase().trim();
            const SENHA_CORRETA = "5129491";

            if (tentativa === SENHA_CORRETA) {
                // SUCESSO: Mostra o seu popup dourado de Elidria
                this.style.borderColor = "#00ff00";
                this.style.boxShadow = "0 0 20px #00ff00";

                if (popupSucesso) {
                    popupSucesso.style.display = 'flex';
                }

                setTimeout(() => {
                    window.location.href = "Elidria.html";
                }, 3000);
            } else {
                // ERRO: ABRE O POPUP PADRÃO DO NAVEGADOR
                alert("Talvez números?");

                // Reseta o campo após o jogador fechar o alerta
                this.value = "";
                this.style.borderColor = "#ff0000";
                this.style.boxShadow = "0 0 20px #ff0000";

                setTimeout(() => {
                    this.style.borderColor = "#4d3d00";
                    this.style.boxShadow = "none";
                }, 500);
            }
        }
    });
};

// Executa a função
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', validarSenha);
} else {
    validarSenha();
}