const textArea = document.querySelector('textarea'),
tags = document.querySelector('.tags');

textArea.focus();

textArea.addEventListener('keyup', (event) => {
    createTags(event.target.value);

    if (event.key === 'Enter') {
        setTimeout(() =>{
            event.target.value = ''
        }, 10)

        randomSelect()
    }
});

function createTags(input) {
    const inputValueArray = input.split(','). filter(tag => tag.trim !== '').map(tag => tag.trim());

    tags.innerHTML = ''

    inputValueArray.forEach((tag) => {
      const newSpan = document.createElement("span");
      newSpan.classList.add("tag");
      newSpan.innerText = tag;
      tags.appendChild(newSpan);
    });
};

function randomSelect() {
    const times = 30;

    const interval = setInterval(() => {
        const randomTag = pickRandomTag();

        if (randomTag !== undefined) {
            randomTag.classList.add('highlight')

            setTimeout(() => {
                randomTag.classList.remove("highlight")
            }, 100);
        }
    }, 100);

    setTimeout(() => {
        clearInterval(interval);
        
        setTimeout(() => {
            const randomTag = pickRandomTag();
            randomTag.classList.add("highlight");
        }, 100)
        
    }, times * 100)
}

function pickRandomTag() {
    const tags = document.querySelectorAll('.tag');
    return tags[Math.floor(Math.random() * tags.length)]
}