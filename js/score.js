// score system
let counter = 0;
let HIGHEST_SCORE = 'Highest Score';


const scoreElement = document.querySelector('.scores');
const addHit = () => {
    counter++;
    renderHits();
};
const renderHits = () => {
    scoreElement.innerHTML = counter;
};
const resetHits = () => {
    counter = 0;
    renderHits();
};

// still working on the HighScore feature
// Highest score local storage
let highScore = localStorage.getItem(HIGHEST_SCORE)
if (!highScore) {
    localStorage.setItem(HIGHEST_SCORE, 0);
}

let highestScoreLocal = document.querySelector('.highScore');
highestScoreLocal.textContent = (`High Score: ${localStorage.getItem(HIGHEST_SCORE)}`);;
highestScoreLocal.classList.add("high-score");
game.appendChild(highestScoreLocal);

//(High Score: ${localStorage.getItem(HIGHEST_SCORE)};)  try (High Score: ${localStorage.getItem(HIGHEST_SCORE)};;) 