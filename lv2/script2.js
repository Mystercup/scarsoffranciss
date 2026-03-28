let comboSenha = "";
const SENHA_CORRETA = "0124234030434149";


window.inputPainel = function(num) {
    const display = document.getElementById("display-senha");
    
    if (comboSenha.length < 16) {
        comboSenha += num;
        
        let formatado = "";
        for (let i = 0; i < 16; i++) {
            if (i > 0 && i % 4 === 0) formatado += " ";
            formatado += comboSenha[i] || "_";
        }
        display.innerText = formatado;
    }
}

window.validarPainel = function() {
    const display = document.getElementById("display-senha");
    const painel = document.getElementById("painel-numerico");
    
    if (comboSenha === SENHA_CORRETA) {
        
        display.style.color = "#FFD700";
        display.innerText = "ACESSO AO CMD GARANTIDO";
        
        sessionStorage.setItem("acesso_final", "true");
        
        setTimeout(() => {
            window.location.href = "falsetruth.html"; 
        }, 1200);
    } else {
        
        display.style.color = "red";
        display.innerText = "CÓDIGO CORROMPIDO";
        
        setTimeout(() => {
            comboSenha = "";
            display.style.color = "#FFD700";
            display.innerText = "____ ____ ____ ____";
        }, 1200);
    }
}