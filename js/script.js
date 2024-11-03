
// Iki Vanta.js 
VANTA.CLOUDS({
    el: "#vanta-bg",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.00,
    minWidth: 200.00
});

let bgmusik = document.getElementById('bgmusik');
let quotemusik = document.getElementById('quotemusik'); 

// BG MUSIK
window.onload = function () {
    bgmusik.play().catch(error => {
        console.error('Error playing background music:', error);
    });
};

function unmuteAndPlayMusic() {
    bgmusik.muted = false;
    bgmusik.play().catch(error => {
        console.error('Error playing background music:', error);
    });
}

bgmusik.addEventListener('ended', () => {
    bgmusik.pause();
    bgmusik.currentTime = 0;
});

function submitName() {
    const nameInput = document.getElementById('nameInput').value;
    const sambutan = document.getElementById('sambutan');
    const mainCard = document.getElementById('mainCard');
    const nameCard = document.getElementById('nameCard');

    if (nameInput) {
        sambutan.textContent = `Maukah ${nameInput} Jadi Pacarku 👉👈`;
        nameCard.style.display = 'none';
        mainCard.style.display = 'block';
    } else {
        alert('Mohon masukkan nama kamu!');
    }
}

function playVideo() {
    bgmusik.pause();
    bgmusik.currentTime = 0;

    const video = document.createElement('video');
    video.src = 'video/videooi.mp4';
    video.controls = false;
    video.style.position = 'fixed';
    video.style.top = '0';
    video.style.left = '0';
    video.style.width = '100%';
    video.style.height = '100%';
    video.style.zIndex = '1000';
    video.autoplay = true;
    video.loop = false;
    document.body.appendChild(video);
    video.requestFullscreen();

    video.onended = function () {
        document.body.removeChild(video);
        bgmusik.pause(); 
        bgmusik.currentTime = 0; 

        document.getElementById('mainCard').style.display = 'none';
        document.getElementById('cardquote').style.display = 'block';

        quotemusik.muted = false;
        quotemusik.play().catch(error => {
            console.error('Quote Musik nya error cuy', error);
        });

        // Efek ngetik
        const textquote = document.getElementById('textquote');
        textquote.innerHTML = ""; 
        const quote = "Makasi uda jawab yes wkwk! I love you ❤️ to the moon 🌙 and back 😝"; 
        let i = 0;
        const typingSpeed = 50; 

        function typeQuote() {
            if (i < quote.length) {
                textquote.innerHTML += quote.charAt(i);
                i++;
                setTimeout(typeQuote, typingSpeed);
            }
        }
        typeQuote();
    };

    video.onerror = function () {
        console.error('Videonya error cuy:', video.error);
        document.body.removeChild(video);
        bgmusik.play().catch(error => console.error('Bg Musik nya error cuy', error));
    };
}

function moveCard() {
    const card = document.getElementById('mainCard');
    const randomX = Math.floor(Math.random() * 200) - 100;
    const randomY = Math.floor(Math.random() * 200) - 100;

    card.style.transition = "transform 0.2s ease";
    card.style.transform = `translate(${randomX}px, ${randomY}px)`;
}

document.getElementById('btnNo').addEventListener('mouseover', () => {
    moveCard();
});

document.querySelector('.btn-submit').addEventListener('click', unmuteAndPlayMusic);

function goBack() {

    document.getElementById('cardquote').style.display = 'none';
    document.getElementById('nameCard').style.display = 'block'; 

    quotemusik.pause();
    quotemusik.currentTime = 0; 
}
