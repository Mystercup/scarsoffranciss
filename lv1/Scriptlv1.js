// ============================================================
// 1. CONFIGURAÇÃO VISUAL E ANIMAÇÕES
// ============================================================
const style = document.createElement('style');
style.innerHTML = `
    @keyframes tremorLetra {
        0%   { transform: translate(0px, 0px); }
        25%  { transform: translate(1px, -1px); }
        50%  { transform: translate(-1px, 1px); }
        75%  { transform: translate(1px, 1px); }
        100% { transform: translate(-1px, -1px); }
    }
    .fala-flutuante {
        position: fixed;
        color: #FFD700;
        font-family: 'FonteSecundaria', Arial, sans-serif;
        font-size: 24px;
        text-shadow: 0 0 15px #FFD700;
        pointer-events: none;
        z-index: 10000;
        white-space: nowrap;
        transition: opacity 0.8s;
    }
    .letra-treme {
        display: inline-block;
        animation: tremorLetra 0.15s infinite linear;
    }
`;
document.head.appendChild(style);

// ============================================================
// 2. VARIÁVEIS GLOBAIS E EASTER EGG
// ============================================================
let paginaDestinoGlobal = "";
let senhaNecessariaGlobal = "";
let sequenciaDigitada = ""; // Armazena o que o usuário digita globalmente

const DATABASE_NIVEIS = {
    'senha3': 'Dante', 
    'senha4': 'Heraclito',
    'senha5': 'a', 'senha6': 'a', 'senha7': 'a', 'senha8': 'a',
    'senha9': 'a', 'senha10':'a', 'senha11':'a', 'senha12':'a',
};

// ============================================================
// 3. FUNÇÕES DE EXIBIÇÃO E LÓGICA
// ============================================================

function mostrarFalaCaotica(texto) {
    const containerFala = document.createElement("div");
    containerFala.className = "fala-flutuante";
    for (let i = 0; i < texto.length; i++) {
        const spanLetra = document.createElement("span");
        if (texto[i] === " ") {
            spanLetra.innerHTML = "&nbsp;";
        } else {
            spanLetra.textContent = texto[i];
            spanLetra.className = "letra-treme";
            spanLetra.style.animationDelay = (Math.random() * 0.2) + "s";
        }
        containerFala.appendChild(spanLetra);
    }
    const posX = Math.random() * (window.innerWidth - 400);
    const posY = Math.random() * (window.innerHeight - 150);
    containerFala.style.left = posX + "px";
    containerFala.style.top = posY + "px";
    document.body.appendChild(containerFala);
    setTimeout(() => {
        containerFala.style.opacity = "0";
        setTimeout(() => containerFala.remove(), 800);
    }, 2500);
}

function abrirPagina(pagina, precisaSenha = false, chaveSenha = "") {
    if (!precisaSenha) {
        window.location.href = pagina;
        return;
    }
    paginaDestinoGlobal = pagina;
    senhaNecessariaGlobal = DATABASE_NIVEIS[chaveSenha];
    document.getElementById("modal-senha").style.display = "flex";
    document.getElementById("input-modal").focus();
}

function fecharModal() {
    document.getElementById("modal-senha").style.display = "none";
}

function confirmarSenha() {
    const senhaDigitada = document.getElementById("input-modal").value;
    if (senhaDigitada === senhaNecessariaGlobal) {
        mostrarFalaCaotica("? - Que a verdade abra seus olhos");
        setTimeout(() => { window.location.href = paginaDestinoGlobal; }, 2500);
    } else {
        mostrarFalaCaotica("? - A verdade permanece oculta para você.");
        fecharModal();
    }
}

// ============================================================
// 4. EVENT LISTENERS (TECLADO GLOBAL)
// ============================================================

document.addEventListener("keydown", (e) => {
    // 1. Lógica do Modal (Enter)
    const modal = document.getElementById("modal-senha");
    if (modal && modal.style.display === "flex" && e.key === "Enter") {
        confirmarSenha();
        return; 
    }

    // 2. Lógica do Easter Egg "Eu sei"
    // Ignora teclas de controle como Shift, Alt, etc.
    if (e.key.length === 1) { 
        sequenciaDigitada += e.key;
        
        // Mantém apenas os últimos 6 caracteres (tamanho de "Eu sei")
        if (sequenciaDigitada.length > 6) {
            sequenciaDigitada = sequenciaDigitada.substring(1);
        }

        // Verifica se a frase foi digitada (case sensitive ou use .toLowerCase())
        if (sequenciaDigitada.toLowerCase() === "eu sei") {
            window.location.href = "void_gif.html"; // Ajuste o caminho da página do GIF
        }
    }
});

window.addEventListener("load", () => {
    const musica = document.getElementById("musica");
    if (musica) {
        musica.volume = 0.2;
        const playMusic = () => {
            musica.muted = false;
            musica.play().catch(() => {});
        };
        musica.play().catch(() => {
            document.addEventListener("click", playMusic, { once: true });
        });
    }
});