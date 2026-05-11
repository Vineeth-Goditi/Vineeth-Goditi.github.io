/* ========================= */
/* script.js */
/* ========================= */

/* PARTICLES */

const particles = document.querySelector('.particles');

for(let i = 0; i < 100; i++){

    const particle = document.createElement('span');

    particle.style.left =
        Math.random() * window.innerWidth + 'px';

    particle.style.top =
        Math.random() * window.innerHeight + 'px';

    particle.style.animationDuration =
        Math.random() * 5 + 3 + 's';

    particle.style.width =
    particle.style.height =
        Math.random() * 4 + 2 + 'px';

    particles.appendChild(particle);
}

/* TYPING EFFECT */

const text = [

    "GENAI ENGINEER",

    "RAG ARCHITECTURE DESIGNER",

    "AI/ML ENGINEER",

    "CLOUD AI DEVELOPER"
];

let count = 0;

let index = 0;

let currentText = "";

let letter = "";

(function type(){

    if(count === text.length){

        count = 0;
    }

    currentText = text[count];

    letter = currentText.slice(0, ++index);

    document.getElementById("typing").textContent = letter;

    if(letter.length === currentText.length){

        count++;

        index = 0;

        setTimeout(type, 1000);

    }else{

        setTimeout(type, 100);
    }

})();
