// score system
var hits = 0;
const hitElement = document.querySelector( '.hits' );
document.body.onkeyup = function(e) {
  if( e.keyCode == '38' ) {
    addHit();
  }
}
const addHit = function() {
  hits++;
  renderHits();
}
const renderHits = function() {
  hitElement.innerHTML = hits;
}
const resetHits = function() {
  hits = 0;
  renderHits();
}


//////////////// to do still

// Save HighScore  
function showHighScores() {
    //saving to local storage
    const highScores = JSON.parse(localStorage.getItem(HIGH_SCORES)) ?? [];
    const highScoreList = document.getElementById(HIGH_SCORES);
    
    highScoreList.innerHTML = highScores
      .map((score) => `<li>${score.score} - ${score.name}`)
      .join('');
};
// to display HighScore
function showHighScores() {
    const highScores = JSON.parse(localStorage.getItem('highScores')) || [];
    const highScoreList = document.getElementById('highScores');
  
    highScoreList.innerHTML = highScores
      .map((score) => `<li>${score.score} - ${score.name}`)
      .join('');
  }
  
  function checkHighScore(score) {
    const highScores = JSON.parse(localStorage.getItem('highScores')) || [];
    const lowestScore = highScores[NO_OF_HIGH_SCORES - 1]?.score ?? 0;
  
    if (score > lowestScore) {
      const name = prompt('You got a highscore! Enter name:');
      const newScore = { score, name };
      saveHighScore(newScore, highScores);
      showHighScores();
    }
  }
 //Saving name and score 
function saveHighScore(score, highScores) {
    // 1. Add to list
    highScores.push(score);
    // 2. Sort the list 
    highScores.sort((a, b) => b.score - a.score);
    // 3. Select new list 
    highScores.splice(NO_OF_HIGH_SCORES);
    // 4. Save to local storage 
    localStorage.setItem('highScores', JSON.stringify(highScores));
  }