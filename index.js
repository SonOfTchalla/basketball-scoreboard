const p1h1 = document.querySelector(".p1 h1");
const p2h1 = document.querySelector(".p1 h1");

const p1plus1 = document.querySelector(".p1 #plus-1");
const p2plus1 = document.querySelector(".p2 #plus-1");

const p1plus2 = document.querySelector(".p1 #plus-2");
const p2plus2 = document.querySelector(".p2 #plus-2");

const p1plus3 = document.querySelector(".p1 #plus-3");
const p2plus3 = document.querySelector(".p2 #plus-3");

let score = 0;

p1plus1.addEventListener('click', () => {
    score += 1;
    p1h1.textContent = score;
})

p1plus2.addEventListener('click', () => {
    score += 2;
    p1h1.textContent = score;
})

p1plus3.addEventListener('click', () => {
    score += 3;
    p1h1.textContent = score;
})
