const gatilhos = {
    "morte": { msg: "O fim é apenas um novo ciclo de entropia.", som: "../music/laught.mp3" },
    "rei": { msg: "Ele observa através das estrelas negras.", som: "../music/laught.mp3" },
    "caos": { msg: "A ordem é uma ilusão temporária.", som: "../music/laught.mp3" },
    "nathan": { msg: "Sombra detectada... mas há algo quebrado nela.", som: "../music/laught.mp3" }
};

const gatilhosVermelhos = {
    "medo": { msg: "O medo é a única coisa real neste lugar.", som: "../music/laught.mp3" },
    "sangue": { msg: "O sacrifício foi aceito há muito tempo.", som: "../music/laught.mp3" },
    "intruder": { msg: "VOCÊ NÃO DEVERIA ESTAR AQUI.", som: "../music/laught.mp3" }
};

const respostasAleatorias = [
    { msg: "Você é insignificante perante o que está por vir.", som: "../music/laught.mp3" },
    { msg: "Não ouse falar sem entender o peso das palavras.", som: "../music/laught.mp3" },
    { msg: "Está perdido nesta imensidão?", som: "../music/laught.mp3" },
    { msg: "O silêncio às vezes é a melhor resposta.", som: "../music/laught.mp3" }
];

const input = document.getElementById('chat-input');
const logs = document.getElementById('chat-logs');
const somGatilho = document.getElementById('som-gatilho');
const bgMusica = document.getElementById('bg-music');

function adicionarMensagem(texto, classe) {
    const div = document.createElement('div');
    div.className = classe;
    logs.appendChild(div);

    if (classe === "msg-user") {
        div.textContent = texto;
        logs.scrollTop = logs.scrollHeight;
        return;
    }

    let i = 0;
    const speed = 40;
    function digitar() {
        if (i < texto.length) {
            div.textContent += texto.charAt(i);
            i++;
            logs.scrollTop = logs.scrollHeight;
            setTimeout(digitar, speed);
        }
    }
    digitar();
}

function dispararResposta(acao, classe = "msg-sistema") {
    const iconMuted = document.getElementById('svg-muted');
    const iconPlaying = document.getElementById('svg-playing');
    const iconContainer = document.getElementById('audio-status-icon');

    setTimeout(() => {
        adicionarMensagem(acao.msg, classe);
        if (somGatilho) {
            somGatilho.src = acao.som;
            somGatilho.volume = 0.5;
            somGatilho.play().then(() => {
                if (iconMuted) iconMuted.style.display = 'none';
                if (iconPlaying) iconPlaying.style.display = 'block';
                if (iconContainer) iconContainer.classList.add('active');
            }).catch(() => {});

            somGatilho.onended = () => {
                if (iconMuted) iconMuted.style.display = 'block';
                if (iconPlaying) iconPlaying.style.display = 'none';
                if (iconContainer) iconContainer.classList.remove('active');
            };
        }
    }, 500);
}

input.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
        const valor = this.value.toLowerCase().trim();
        if (valor === "") return;

        adicionarMensagem(">> " + valor, "msg-user");
        this.value = "";
        const acaoVermelha = gatilhosVermelhos[valor];
        const acaoNormal = gatilhos[valor];

        if (acaoVermelha) {
            dispararResposta(acaoVermelha, "msg-erro");
        } else if (acaoNormal) {
            dispararResposta(acaoNormal, "msg-sistema");
        } else {
            const randomIdx = Math.floor(Math.random() * respostasAleatorias.length);
            dispararResposta(respostasAleatorias[randomIdx], "msg-sistema");
        }
    }
});

const ativarAudio = () => {
    if (bgMusica) {
        bgMusica.volume = 0.3;
        bgMusica.play().catch(() => {});
    }
    window.removeEventListener('click', ativarAudio);
    window.removeEventListener('keydown', ativarAudio);
};

window.addEventListener('click', ativarAudio);
window.addEventListener('keydown', ativarAudio);
document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
});

window.addEventListener('load', () => {
    setTimeout(() => {
        adicionarMensagem("Sintonizando frequências...", "msg-sistema");
    }, 1000);
    setTimeout(() => {
        adicionarMensagem("Presença confirmada. [prototipe name: Slime]", "msg-sistema");
    }, 3500);
});