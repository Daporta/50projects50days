const ps = document.querySelector('.ps'),
xbox = document.querySelector('.xbox'),
wrapper = document.querySelector('.wrapper');

ps.addEventListener('mouseenter', () => wrapper.classList.add('hover-left'));
ps.addEventListener("mouseleave", () => wrapper.classList.remove("hover-left")
);

xbox.addEventListener("mouseenter", () => wrapper.classList.add("hover-right")
);
xbox.addEventListener("mouseleave", () => wrapper.classList.remove("hover-right")
);
