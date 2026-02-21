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
        "#0079FF",
        "#FE6244",
        "#5800FF",
        "#ff00ff",
        "#00ff00",
        "#FFCD38"
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

function openShop(){
  document.getElementById("shopModal").classList.add("active");
}

function closeShop(){
  document.getElementById("shopModal").classList.remove("active");
}

