const validarSenha = () => {
    const inputSenha = document.getElementById('input-senha');
    const popupSucesso = document.getElementById('popup-sucesso');

    if (!inputSenha) return;

    inputSenha.addEventListener('keydown', function(e) {
        
        if (e.key === 'Enter' || e.keyCode === 13) {
            e.preventDefault(); 

            const tentativa = this.value.toLowerCase().trim();
            const SENHA_CORRETA = "5129491";

            if (tentativa === SENHA_CORRETA) {
                
                this.style.borderColor = "#00ff00";
                this.style.boxShadow = "0 0 20px #00ff00";

                sessionStorage.setItem("acesso_elidria_autorizado", "true");

                if (popupSucesso) {
                    popupSucesso.style.display = 'flex';
                }

                setTimeout(() => {
                    window.location.href = "Elidria.html";
                }, 3000);
            } else {
                
                alert("Talvez números?");

                
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


if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', validarSenha);
} else {
    validarSenha();
}