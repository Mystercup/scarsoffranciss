function iniciarContador() {
    const display = document.getElementById('timer');
    const msgFinal = document.getElementById('msg');
    const statusTxt = document.getElementById('status-txt');

    
    const dataAlvo = new Date(2026, 2, 31, 15, 0, 0).getTime();

    const intervalo = setInterval(() => {
        const agora = new Date().getTime();
        const distancia = dataAlvo - agora;

        
        const dias = Math.floor(distancia / (1000 * 60 * 60 * 24));
        const horas = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutos = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));
        const segundos = Math.floor((distancia % (1000 * 60)) / 1000);

        
        if (distancia > 0) {
            display.innerHTML = 
                (dias < 10 ? "0" + dias : dias) + ":" +
                (horas < 10 ? "0" + horas : horas) + ":" +
                (minutos < 10 ? "0" + minutos : minutos) + ":" +
                (segundos < 10 ? "0" + segundos : segundos);
        } else {
            
            clearInterval(intervalo);
            display.style.display = "none";
            statusTxt.style.display = "none";
            msgFinal.style.display = "block";
            
            console.log("O tempo global expirou.");
        }
    }, 1000);
}


const som = document.getElementById('bg-music');

const ativarEfeitos = () => {
    if (som) {
        som.volume = 0.3;
        som.play().catch(() => {});
    }
    window.removeEventListener('click', ativarEfeitos);
    window.removeEventListener('mousemove', ativarEfeitos);
};

window.addEventListener('click', ativarEfeitos);
window.addEventListener('mousemove', ativarEfeitos);


document.addEventListener('keydown', function(e) {
    if (e.keyCode === 123 || (e.ctrlKey && (e.keyCode === 85 || e.keyCode === 83 || e.keyCode === 67))) {
        e.preventDefault();
        return false;
    }
});


window.onload = iniciarContador;