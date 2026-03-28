// scriptlv3.js

function iniciarContador() {
    const display = document.getElementById('timer');
    const msgFinal = document.getElementById('msg');
    const statusTxt = document.getElementById('status-txt');

    // CONFIGURAÇÃO GLOBAL: Defina aqui a data que o contador deve atingir
    // Formato: Ano, Mês (0-11), Dia, Hora, Minuto, Segundo
    // Exemplo: 31 de Março de 2026, às 15:00:00 (Mês 2 = Março)
    const dataAlvo = new Date(2026, 2, 31, 15, 0, 0).getTime();

    const intervalo = setInterval(() => {
        const agora = new Date().getTime();
        const distancia = dataAlvo - agora;

        // Cálculos de tempo
        const dias = Math.floor(distancia / (1000 * 60 * 60 * 24));
        const horas = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutos = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));
        const segundos = Math.floor((distancia % (1000 * 60)) / 1000);

        // Atualiza o display apenas se o tempo for maior que zero
        if (distancia > 0) {
            display.innerHTML = 
                (dias < 10 ? "0" + dias : dias) + ":" +
                (horas < 10 ? "0" + horas : horas) + ":" +
                (minutos < 10 ? "0" + minutos : minutos) + ":" +
                (segundos < 10 ? "0" + segundos : segundos);
        } else {
            // Quando o tempo acabar para todos
            clearInterval(intervalo);
            display.style.display = "none";
            statusTxt.style.display = "none";
            msgFinal.style.display = "block";
            // Opcional: tocar um som de alerta ou redirecionar
            console.log("O tempo global expirou.");
        }
    }, 1000);
}

// Lógica de áudio e segurança
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

// Bloqueio de teclas (F12, Ctrl+U, etc)
document.addEventListener('keydown', function(e) {
    if (e.keyCode === 123 || (e.ctrlKey && (e.keyCode === 85 || e.keyCode === 83 || e.keyCode === 67))) {
        e.preventDefault();
        return false;
    }
});

// Inicia o processo
window.onload = iniciarContador;