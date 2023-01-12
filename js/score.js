// score system
let counter = 0;
let HIGHEST_SCORE = 'Highest Score';


const scoreElement = document.querySelector('.scores');
const addJump = () => {
    counter++;
    renderJumps(); 
};
const renderJumps = () => {
    scoreElement.innerHTML = `${counter}`;
};
const resetJumps = () => {
    counter = 0;
    renderJumps();
}; 


// Highest score local storage
let highScore = localStorage.getItem(HIGHEST_SCORE)
if (!highScore || highScore < `${counter}`) {
    localStorage.setItem(HIGHEST_SCORE, `${counter}`);
}

let highestScoreLocal = document.querySelector('#highScores');

highestScoreLocal.textContent = `High Score: "${localStorage.getItem(HIGHEST_SCORE)}"`;

highestScoreLocal.classList.add("high-score");
highScore.innerHTML = (highestScoreLocal);
