document.addEventListener('DOMContentLoaded', () => {
    const soundButton = document.getElementById('bubbleSoundButton');
    soundButton.addEventListener('click', () => {
        playBubbleSound(2); // Durée du son en secondes
    });
});

function playBubbleSound(duration = 5) {
    const sound = document.getElementById('bubbleSound');
    if (sound) {
        sound.volume = 0.2; // Ajuster le volume
        sound.currentTime = 0; // Démarrer depuis le début

        const endTime = Date.now() + duration * 1000; // Calculer la fin en millisecondes

        const playLoop = () => {
            if (Date.now() < endTime) {
                sound.currentTime = 0; // Réinitialiser
                sound.play().then(() => {
                    // Relancer le son lorsque la lecture est terminée
                    setTimeout(playLoop, sound.duration * 1000);
                }).catch((error) => {
                    console.warn("Erreur lors de la lecture du son :", error);
                });
            } else {
                sound.pause(); // Arrêter le son
                sound.currentTime = 0; // Réinitialiser pour la prochaine utilisation
            }
        };

        playLoop(); // Démarrer la boucle
    } else {
        console.error("L'élément audio 'bubbleSound' est introuvable.");
    }
}


function showLoadingWithProgress(url) {
    const loader = document.querySelector('.loading-container');
    const circle = document.querySelector('.progress-ring-circle');
    const text = document.querySelector('.percent');
    const circumference = 565.48;
    let progress = 0;

    document.body.classList.add('loading');
    loader.style.display = 'flex';
    createBubbles();

    const interval = setInterval(() => {
        progress += 1;
        circle.style.strokeDashoffset = circumference - (progress / 100) * circumference;
        text.textContent = `${progress}%`;

        if (progress >= 100) {
            clearInterval(interval);
            setTimeout(() => {
                document.body.classList.remove('loading');
                window.location.href = url;
            }, 500);
        }
    }, 30);
}

function createBubble() {
    const bubble = document.createElement('div');
    const size = Math.random() * 30 + 15;
    const left = Math.random() * 100;
    const moveX = Math.random() * 100 - 50;
    const duration = Math.random() * 3 + 2;

    bubble.className = 'bubble';
    bubble.style.cssText = `
        left: ${left}%;
        bottom: -50px;
        width: ${size}px;
        height: ${size}px;
        --moveX: ${moveX}px;
        animation: bubbleRise ${duration}s ease-in-out forwards;
    `;

    document.querySelector('.bubbles-background').appendChild(bubble);

    setTimeout(() => bubble.remove(), duration * 1000);
}

function createBubbles() {
    for (let i = 0; i < 10; i++) {
        createBubble();
    }
    setInterval(createBubble, 300);
}

document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
});
