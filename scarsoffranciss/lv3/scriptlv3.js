function iniciarContador() {
    const display = document.getElementById('timer');
    const msgFinal = document.getElementById('msg-container');
    const statusTxt = document.getElementById('status-txt');
    const galeria = document.querySelector('.grid-galeria');


    const dataAlvo = new Date(2026, 3, 2, 15, 0, 0).getTime();

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
            msgFinal.style.display = "flex";
            if (galeria) galeria.style.display = "grid";
            
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

const modal = document.getElementById('modal-container');
const imgPopup = document.getElementById('img-popup');
const imagens = document.querySelectorAll('.moldura-img img');

imagens.forEach(img => {
    img.addEventListener('click', () => {
        modal.style.display = 'flex';
        imgPopup.src = img.src;
    });
});

const fechar = document.getElementById('btn-fechar');
if (fechar) {
    fechar.onclick = () => modal.style.display = 'none';
}
window.onclick = (e) => {
    if (e.target == modal) modal.style.display = 'none';
};

document.addEventListener('keydown', function(e) {
    if (e.keyCode === 123 || (e.ctrlKey && (e.keyCode === 85 || e.keyCode === 83 || e.keyCode === 67))) {
        e.preventDefault();
        return false;
    }
});

document.addEventListener('contextmenu', function(e) {
    if (e.target.tagName !== 'IMG') {
        e.preventDefault();
    }
});

function atualizarTimerPrototipo() {
    const targetStr = localStorage.getItem('prototipo_target_date');
    const display = document.getElementById('timer-prototipo');
    if (!targetStr || !display) return;

    const target = parseInt(targetStr);
    const agora = Date.now();
    const diff = target - agora;

    if (diff <= 0) {
        display.innerHTML = "00:00:00:00";
        return;
    }

    const d = Math.floor(diff / (1000 * 60 * 60 * 24));
    const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const s = Math.floor((diff % (1000 * 60)) / 1000);

    display.innerHTML = 
        (d < 10 ? "0" + d : d) + ":" + 
        (h < 10 ? "0" + h : h) + ":" + 
        (m < 10 ? "0" + m : m) + ":" + 
        (s < 10 ? "0" + s : s);
}

const btnPrototipo = document.getElementById('btn-prototipo-trigger');
const modalPrototipo = document.getElementById('modal-prototipo');
const fecharPrototipo = document.getElementById('fechar-prototipo');

if (btnPrototipo && modalPrototipo) {
    btnPrototipo.onclick = () => {
        modalPrototipo.style.display = 'flex';
        if (!localStorage.getItem('prototipo_target_date')) {
            const targetDate = Date.now() + (4 * 24 * 60 * 60 * 1000);
            localStorage.setItem('prototipo_target_date', targetDate.toString());
        }
        atualizarTimerPrototipo();
    };
}

if (fecharPrototipo) {
    fecharPrototipo.onclick = () => modalPrototipo.style.display = 'none';
}

setInterval(atualizarTimerPrototipo, 1000);

window.onload = iniciarContador;