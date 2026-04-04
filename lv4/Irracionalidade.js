const audio = document.getElementById('tape-audio');
const btnPlay = document.getElementById('btn-play-tape');
const btn2x = document.getElementById('btn-2x-tape');
const btnRev = document.getElementById('btn-rev-tape');
const reels = document.querySelectorAll('.reel');
const led = document.getElementById('led');

const FILE_NORMAL = "../music/Sebastion.mp3";
const FILE_REVERSE = "../music/Sebastion reverso.mp3";

btnPlay.addEventListener('click', () => {
    if (audio.paused) {
        audio.play();
        btnPlay.textContent = "STOP";
        reels.forEach(r => r.classList.add('playing'));
        led.classList.add('active');
    } else {
        audio.pause();
        btnPlay.textContent = "PLAY";
        reels.forEach(r => r.classList.remove('playing', 'fast', 'reverse'));
        led.classList.remove('active');
    }
});

// 2X SPEED HOLD
btn2x.addEventListener('mousedown', () => {
    audio.playbackRate = 2.0;
    btn2x.classList.add('holding');
    reels.forEach(r => r.classList.add('playing', 'fast'));
});

const stop2x = () => {
    if (!btn2x.classList.contains('holding')) return;
    audio.playbackRate = 1.0;
    btn2x.classList.remove('holding');
    reels.forEach(r => {
        r.classList.remove('fast');
        if (audio.paused) r.classList.remove('playing');
    });
};
btn2x.addEventListener('mouseup', stop2x);
btn2x.addEventListener('mouseleave', stop2x);

// REVERSE HOLD
btnRev.addEventListener('mousedown', () => {
    const wasPlaying = !audio.paused;
    const currentTime = audio.currentTime;
    const duration = audio.duration || 0;

    btnRev.classList.add('holding');
    reels.forEach(r => {
        r.classList.add('reverse');
        r.classList.add('playing');
    });

    audio.src = FILE_REVERSE;
    if (duration > 0) audio.currentTime = duration - currentTime;
    audio.play();
    led.classList.add('active');
});

const stopRev = () => {
    if (!btnRev.classList.contains('holding')) return;
    const currentTime = audio.currentTime;
    const duration = audio.duration || 0;

    btnRev.classList.remove('holding');
    reels.forEach(r => r.classList.remove('reverse'));

    audio.src = FILE_NORMAL;
    if (duration > 0) audio.currentTime = duration - currentTime;

    if (btnPlay.textContent === "PLAY") {
        audio.pause();
        reels.forEach(r => r.classList.remove('playing'));
        led.classList.remove('active');
    } else {
        audio.play();
    }
};
btnRev.addEventListener('mouseup', stopRev);
btnRev.addEventListener('mouseleave', stopRev);

document.addEventListener('keydown', (e) => {
    if (e.keyCode === 123 || (e.ctrlKey && [67, 85, 83, 73].includes(e.keyCode))) e.preventDefault();
});