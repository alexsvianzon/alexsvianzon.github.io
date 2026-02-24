const gameAspect = 1600 / 900; // your game’s width / height

function resizeIframe() {
    const iframe = document.getElementById('game-container');
    const width = iframe.clientWidth; // full page width
    const height = width / gameAspect; // calculate height to maintain aspect ratio
    iframe.style.height = height + 'px';
}

window.addEventListener('resize', resizeIframe);
window.addEventListener('load', resizeIframe);