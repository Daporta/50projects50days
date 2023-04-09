const buttons = document.querySelectorAll('.question button');

buttons.forEach(button => {
    button.addEventListener('click', () =>{
        button.parentNode.classList.toggle('active');
        if (button.parentNode.classList.contains('active') === true) {
            button.innerHTML = `<i class="fas fa-times"></i>`;
        } else {
            button.innerHTML = `<i class="fas fa-chevron-down"></i>`;

        }
    })
})