

function playAudio(url) {
    let music = new Audio();
    music.pause();
    music = new Audio(url).play();
}
