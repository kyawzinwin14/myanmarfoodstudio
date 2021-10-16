// UI
const leftbtn = document.querySelector(".left"),
    rightbtn = document.querySelector(".right");

const slides = document.querySelectorAll(".slide");

let current = 0;

// Event Listener
rightbtn.addEventListener("click", () => {
    if (current === slides.length - 1) {
        slides[current].style.animation = "rightbtnout 0.5s ease";
        slides[current].style.left = "-100%";
        slides[0].style.animation = "rightbtnin 0.5s ease";
        slides[0].style.left = "0%";
        current = 0;
    }
    else {
        slides[current].style.animation = "rightbtnout 0.5s ease";
        slides[current].style.left = "-100%";
        slides[current + 1].style.animation = "rightbtnin 0.5s ease";
        slides[current + 1].style.left = "0%";
        current++;
    }
});

leftbtn.addEventListener("click", () => {
    if (current === 0) {
        slides[current].style.animation = "leftbtnout 0.5s ease";
        slides[current].style.left = "100%";
        slides[2].style.animation = "leftbtnin 0.5s ease";
        slides[2].style.left = "0%";
        current = 2;
    }
    else {
        slides[current].style.animation = "leftbtnout 0.5s ease";
        slides[current].style.left = "100%";
        slides[current - 1].style.animation = "leftbtnin 0.5s ease";
        slides[current - 1].style.left = "0%";
        current--;
    }
});
