// score system
var hits = 0;
const scoreElement = document.querySelector( '.hits' );
const addHit = () => {
    hits++;
    renderHits();
};
const renderHits = () => {
    scoreElement.innerHTML = hits;
};
const resetHits = () => {
    hits = 0;
    renderHits();
};


// To Do Save HighScore  
const highScore = document.querySelector('.highScore');
