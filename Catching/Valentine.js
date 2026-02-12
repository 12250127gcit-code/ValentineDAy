// script.js
const noBtn = document.getElementById('no-btn');
const yesBtn = document.getElementById('yes-btn');
const question = document.getElementById('question');
const gif = document.getElementById('valentine-gif');

// 1. The "Runaway" Logic
noBtn.addEventListener('mouseover', () => {
    // Calculate a random position within the viewport
    // Subtraction ensures the button doesn't go off-screen
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);

    noBtn.style.position = "fixed"; // Switch to fixed to move across entire screen
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
});

// 2. The "Success" Logic
yesBtn.addEventListener('click', () => {
    question.innerHTML = "Yay! See you on the 14th! ❤️";
    gif.src = "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNHpueW52Z3R2Z3R2Z3R2Z3R2Z3R2Z3R2Z3R2Z3R2Z3R2Z3R2Z3JmJmVwPXYxX2ludGVybmFsX2dpZl9ieV9pZCZjdD1z/UMon96CcKMTlUByR/giphy.gif";
    
    // Hide the No button
    noBtn.style.display = "none";
    
    // Optional: Add some confetti effect or make the Yes button huge
    yesBtn.style.transform = "scale(1.5)";
});