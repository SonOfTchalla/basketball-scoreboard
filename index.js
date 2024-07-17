const p1h1 = document.querySelector(".p1 h1");
const p2h1 = document.querySelector(".p2 h1");

const p1plus1 = document.querySelector(".p1 #plus-1");
const p2plus1 = document.querySelector(".p2 #plus-1");

const p1plus2 = document.querySelector(".p1 #plus-2");
const p2plus2 = document.querySelector(".p2 #plus-2");

const p1plus3 = document.querySelector(".p1 #plus-3");
const p2plus3 = document.querySelector(".p2 #plus-3");

let p1score = 0;
let p2score = 0;

function increment(selector, display){
    selector.addEventListener('click', () => {
        if(selector === p1plus1){
            p1score += 1;
            p1h1.textContent = p1score;
        }else if(selector === p1plus2){
            p1score += 2;
            p1h1.textContent = p1score;
        }else if(selector === p1plus3){
            p1score += 3;
            p1h1.textContent = p1score;
        }else if(selector === p2plus1){
            p2score += 1;
            p2h1.textContent = p2score;
        }else if(selector === p2plus2){
            p2score += 2;
            p2h1.textContent = p2score;
        }else if(selector === p2plus3){
            p2score += 3;
            p2h1.textContent = p2score;
        }else{
            return 0;
        }
    });
}
