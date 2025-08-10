// Typing animation for hero title
const heroTitle = document.getElementById("hero-title");
const text = "Welcome to Our Landing Page";
let index = 0;

function typeEffect() {
    if (index < text.length) {
        heroTitle.textContent += text.charAt(index);
        index++;
        setTimeout(typeEffect, 100);
    }
}
typeEffect();

// Scroll reveal animation
function revealOnScroll() {
    const reveals = document.querySelectorAll(".reveal");
    reveals.forEach(el => {
        const windowHeight = window.innerHeight;
        const elementTop = el.getBoundingClientRect().top;
        const elementVisible = 100;

        if (elementTop < windowHeight - elementVisible) {
            el.classList.add("active");
        } else {
            el.classList.remove("active");
        }
    });
}
window.addEventListener("scroll", revealOnScroll);
