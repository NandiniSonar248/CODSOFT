// Tab switching
const tabButtons = document.querySelectorAll(".tab-btn");
const tabContents = document.querySelectorAll(".tab-content");

tabButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        tabButtons.forEach(b => b.classList.remove("active"));
        tabContents.forEach(c => c.classList.remove("active"));

        btn.classList.add("active");
        document.getElementById(btn.dataset.tab).classList.add("active");
    });
});

// Typing animation for name
const nameElement = document.querySelector(".logo");
const text = nameElement.textContent;
nameElement.textContent = "";
let index = 0;
function typeEffect() {
    if (index < text.length) {
        nameElement.textContent += text.charAt(index);
        index++;
        setTimeout(typeEffect, 100);
    }
}
typeEffect();

// Image popup viewer
document.querySelectorAll('.gallery img').forEach(img => {
    img.addEventListener('click', () => {
        const popup = document.createElement('div');
        popup.classList.add('img-popup');
        popup.innerHTML = `<img src="${img.src}" alt="${img.alt}">`;
        document.body.appendChild(popup);
        popup.addEventListener('click', () => popup.remove());
    });
});
