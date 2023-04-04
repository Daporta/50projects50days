const app = document.querySelector('.app');
const circle = document.querySelector('.circle');
const open = document.getElementById('open');
const close = document.getElementById("close");
const nav = document.querySelector('.nav');

open.addEventListener('click', () => {
    app.classList.add('show-nav');
    circle.classList.add("show-nav");
    nav.classList.add("show-nav");
});

close.addEventListener("click", () => {
    circle.classList.remove("show-nav");
    app.classList.remove("show-nav");
    nav.classList.remove("show-nav");
});

