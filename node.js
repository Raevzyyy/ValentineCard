function showMessage() {
    document.getElementById('specialMessage').style.display = 'block';
}
function createFallingElements(type, emoji) {
    for (let i = 0; i < 30; i++) {
        const element = document.createElement('div');
        element.className = type;
        element.innerHTML = emoji;
        element.style.left = Math.random() * 100 + 'vw';
        element.style.animationDuration = Math.random() * 3 + 2 + 's';
        document.body.appendChild(element);
    }
}
createFallingElements('love', '❤️');
createFallingElements('rose', '🌹');
