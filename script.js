function playSound(filename) {
    const audio = new Audio(`sounds/${filename}`);
    audio.play();
}
