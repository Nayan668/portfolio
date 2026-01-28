function updateDateTime() {
    const now = new Date();
    
    // Time Format (HH:MM:SS)
    const timeOptions = { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true };
    const timeString = now.toLocaleTimeString('en-US', timeOptions);
    
    // Date Format (DD Month, YYYY)
    const dateOptions = { day: 'numeric', month: 'long', year: 'numeric' };
    const dateString = now.toLocaleDateString('en-US', dateOptions);

    document.getElementById('current-time').innerText = timeString;
    document.getElementById('current-date').innerText = dateString;
}

// Protiti second-e update hobe
setInterval(updateDateTime, 1000);
updateDateTime(); // Initial call


const textElement = document.getElementById("typing-text");
const texts = ["Nayan | Portfolio", "Hi, I'm Monjurul Imam Nayan 👋"];
let speed = 100; // Type speed
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
    const currentText = texts[textIndex];
    
    if (isDeleting) {
        textElement.innerText = currentText.substring(0, charIndex - 1);
        charIndex--;
        speed = 50; // Deleting speed
    } else {
        textElement.innerText = currentText.substring(0, charIndex + 1);
        charIndex++;
        speed = 100; // Normal typing speed
    }

    if (!isDeleting && charIndex === currentText.length) {
        isDeleting = true;
        speed = 2000; // Pause at the end
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % texts.length;
        speed = 500;
    }

    setTimeout(typeEffect, speed);
}

// Start the effect
document.addEventListener("DOMContentLoaded", typeEffect);