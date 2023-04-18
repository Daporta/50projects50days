const button = document.querySelector('.button'),
navBar = document.querySelector('.nav-bar');

button.addEventListener('click', () => {
    navBar.classList.toggle('close')
})

