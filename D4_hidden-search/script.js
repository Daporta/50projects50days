const btn = document.querySelector('.btn'),
input = document.querySelector('.input');

btn.addEventListener('click', () => {
    input.classList.contains('show') ? input.classList.remove('show') : input.classList.add('show'),input.focus();
})