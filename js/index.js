// Grabbing element ID in the HTML
const character = document.getElementById("mech"); 
const rocket = document.getElementById("rocket");
const enemy = document.getElementById("enemy");

//sounds effects
const jumpSound = new Audio("assets/music/jump.wav");
const hitSound = new Audio("assets/music/explosion.ogg");



//Collision Detection
const checkHit = setInterval(() => {
    let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    let rocketLeft = parseInt(window.getComputedStyle(rocket).getPropertyValue("left"));
    let enemyLeft = parseInt(window.getComputedStyle(enemy).getPropertyValue("left"));
    if ((rocketLeft < 70 && rocketLeft > 10 && characterTop >= 230) || (enemyLeft < 30 && enemyLeft > 0 && characterTop >= 230)) {
            // working on HighScore feature
        let currentHighScore = localStorage.getItem(HIGHEST_SCORE);
            // Setting high score in local storage
            if (!currentHighScore || currentHighScore < counter) {
                localStorage.setItem(HIGHEST_SCORE, counter)
                highestScoreLocal.textContent = `High Score: ${localStorage.getItem(HIGHEST_SCORE)}`;
            }    
        // to make objects display "none" 
            // // DRY how to simplify it //
            character.style.display = "none";
            rocket.style.display = "none";
            enemy.style.display = "none";
            scoreElement.style.display = "none"; // hitElement codes in score.js
            ///////////////////////////
            swal(`You Lost : "${counter}"`, "Try Again?", "error"); // Using sweetAlert vs ugly alert
    };
}, 10);

// To Do! create a refresh function using a "Space Bar"
function refresh() {
    window.location.reload();
};

