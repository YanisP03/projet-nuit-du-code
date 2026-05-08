document.addEventListener('DOMContentLoaded', () => {
    const soundButton = document.getElementById('bubbleSoundButton');
    soundButton.addEventListener('click', () => {
        playBubbleSound(2); // Durée du son en secondes
    });
});

function playBubbleSound(duration = 5) {
    const sound = document.getElementById('bubbleSound');
    if (sound) {
        sound.volume = 0.4; // Ajuster le volume
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

document.addEventListener('DOMContentLoaded', () => {
    const brainContainer = document.querySelector('.brain-container');
    const fishEmojis = [' ', ' ', ' ', ' ', ' ', ' '];
    
    function createFish(count) {
        for (let i = 0; i < count; i++) {
            const fish = document.createElement('div');
            fish.className = 'fish';
            fish.textContent = fishEmojis[i % fishEmojis.length];
            brainContainer.appendChild(fish);
            
            const angle = (i * (360 / count));
            const radius = 150;
            const duration = 15 + Math.random() * 10;
            
            function animate() {
                const now = Date.now() / 1000;
                const currentAngle = angle + (now * (360 / duration));
                const x = Math.cos(currentAngle * Math.PI / 180) * radius;
                const y = Math.sin(currentAngle * Math.PI / 180) * radius;
                
                fish.style.transform = `translate(${x}px, ${y}px) rotate(${currentAngle}deg)`;
                requestAnimationFrame(animate);
            }
            
            animate();
        }
    }

    function createBubble() {
        const bubble = document.createElement('div');
        bubble.className = 'bubble';
        bubble.textContent = '🫧';
        bubble.style.left = Math.random() * 100 + '%';
        document.querySelector('.ocean-section').appendChild(bubble);

        bubble.addEventListener('animationend', () => {
            bubble.remove();
        });
    }

    // Créer les poissons
    createFish(6);

    // Créer des bulles périodiquement
    setInterval(createBubble, 500);

    // Animation du cerveau au clic
    const brainButton = document.querySelector('.brain-button');
    brainButton.addEventListener('click', () => {
        brainButton.style.transform = 'scale(0.9)';
        setTimeout(() => {
            brainButton.style.transform = '';
        }, 200);
    });
});
window.addEventListener('scroll', function() {
    let scrollPosition = window.scrollY;


    // Appliquer l'effet parallax à .hero
    const hero = document.querySelector('.hero');
    const heroBgPosition = -0.6 * scrollPosition; // Ajustez la vitesse de l'effet
    hero.style.backgroundPosition = `center ${heroBgPosition}px`;
    });

          
document.addEventListener("DOMContentLoaded", () => {
    const videoCards = document.querySelectorAll(".video-card");
    const modal = document.getElementById("videoModal");
    const modalVideo = document.getElementById("modalVideo");
    const closeModal = document.getElementById("closeModal");

    videoCards.forEach(card => {
        card.addEventListener("click", () => {
            const videoSrc = card.getAttribute("data-video");
            modalVideo.querySelector("source").src = videoSrc;
            modalVideo.load();
            modal.style.display = "flex";
        });
    });

    closeModal.addEventListener("click", () => {
        modal.style.display = "none";
        modalVideo.pause();
    });

    modal.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.style.display = "none";
            modalVideo.pause();
        }
    });
});