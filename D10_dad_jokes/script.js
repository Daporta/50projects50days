const jokeElement = document.querySelector('.wrapper p'),
jokeBtn = document.querySelector('.wrapper button');

jokeBtn.addEventListener('click', generateJoke);

generateJoke();

async function generateJoke() {
    const config = {
        headers: {
            Accept: 'text/plain',
        },
    }

    const res = await fetch("https://icanhazdadjoke.com/", config);

    const data = await res.text();

    jokeElement.innerHTML = data
}