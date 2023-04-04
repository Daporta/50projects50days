const progress = document.getElementById('progress');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const circles = document.querySelectorAll('.circle');

let state = 1;

next.addEventListener('click', () => {
    state++;

    update();
});

prev.addEventListener('click', () => {
    state--;

    update();
});

function update() {
    circles.forEach((circle, index) => {
        if (index < state) {
            circle.classList.add('active');
        } else {
            circle.classList.remove('active');
        }
    });

    const actives = document.querySelectorAll('.active');

    progress.style.width = (actives.length - 1) / (circles.length - 1) * 100 + '%'

    if (state === 1) {
        prev.disabled = true;
    } else if (state === circles.length) {
        next.disabled = true;
    } else {
        next.disabled = false
        prev.disabled = false
    }
};

