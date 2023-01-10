// Grabbing element ID in the HTML
const character = document.getElementById("mech"); 
const rocket = document.getElementById("rocket");
const enemy = document.getElementById("enemy");
const ship = document.getElementById("ship");

//sounds effects
const music = new Audio('asset/sounds/music.mp3'); 
const jumpSound = new Audio('asset/sounds/jump.mp3');
const hitSound = new Audio('asset/sounds/explosion.ogg');
music.loop = true;

music.volume = 0.5;
music.play();

//Collision Detection
let checkHit = setInterval(() => {
    let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    let rocketLeft = parseInt(window.getComputedStyle(rocket).getPropertyValue("left"));
    let enemyLeft = parseInt(window.getComputedStyle(enemy).getPropertyValue("left"));
    if ((rocketLeft < 60 && rocketLeft > 0 && characterTop >= 230) || (enemyLeft < 30 && enemyLeft > 0 && characterTop >= 230)) {
        let currentHighScore = localStorage.getItem(HIGHEST_SCORE);
            // Setting high score in local storage
        if (!currentHighScore || currentHighScore < `${counter}`) {
                localStorage.setItem(HIGHEST_SCORE, `${counter}`)
                highestScoreLocal.textContent = `High Score: ${localStorage.getItem(HIGHEST_SCORE)}`;
        }    
        
        // Music pause when game ended
        music.pause();
        music.currentTime = 0;
        // to make objects display disappear 
            // // DRY how to simplify it //
            character.style.display = "none";
            rocket.style.display = "none";
            enemy.style.display = "none";
            ship.style.display = "none";
            scoreElement.style.display = "none"; // hitElement codes in score.js
            
        swal(`You Lost : "${counter}"`, "Try Again?", "error"); // Using sweetAlert vs ugly alert
        hitSound.play();
        
    };
}, 10);



// To Do! create a refresh function using a "Space Bar"
function refresh() {
    window.location.reload();

   
}
