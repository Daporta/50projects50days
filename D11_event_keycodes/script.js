const wrapper = document.querySelector('.wrapper');

window.addEventListener('keydown', (event) => {
    wrapper.innerHTML = `
    <div class="wrapper">
        <small>event.key</small>
        <p>${event.key === " " ? "Space" : event.key}</p>
    </div>

    <div class="wrapper">
        <small>event.keyCode</small>
        <p>${event.keyCode}</p>
    </div>

    <div class="wrapper">
        <small>event.code</small>
        <p>${event.code}</p>
    </div>
    `;
});