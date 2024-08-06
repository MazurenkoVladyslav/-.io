function playSound(filename) {
    const audio = new Audio(`${filename}`);
    audio.play();
}
