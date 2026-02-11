function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({
        behavior: 'smooth'
    });
}

const logo = document.querySelector(".dvd-logo");
const hero = document.querySelector(".hero");

let x = 100;
let y = 100;
let dx = 2;
let dy = 2;

function randomColor() {
    const colors = [
        "#ff0055",
        "#00ffff",
        "#f5c16c",
        "#8c9b6f",
        "#ff00ff",
        "#00ff00",
        "#ffffff"
    ];
    return colors[Math.floor(Math.random() * colors.length)];
}

function animate() {
    const heroRect = hero.getBoundingClientRect();
    const logoRect = logo.getBoundingClientRect();

    x += dx;
    y += dy;

    if (x + logoRect.width >= heroRect.width || x <= 0) {
        dx *= -1;
        logo.style.color = randomColor();
    }

    if (y + logoRect.height >= heroRect.height || y <= 0) {
        dy *= -1;
        logo.style.color = randomColor();
    }

    logo.style.left = x + "px";
    logo.style.top = y + "px";

    requestAnimationFrame(animate);
}

animate();