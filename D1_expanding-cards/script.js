const images = document.querySelectorAll("div.image-container");

images.forEach(image => {
    image.addEventListener('click', () => {
        console.log('you are clicking')
        removeActiveClasses()
        image.classList.add('active');
    })
})

function removeActiveClasses() {
    images.forEach(image => {
        image.classList.remove('active')
    })
}