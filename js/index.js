// Grabbing element ID in the HTML
const character = document.getElementById("mech"); 
const rocket1 = document.getElementById("rocket");
const rocket2 = document.getElementById("enemy");
const ship = document.getElementById("ship");

//sounds effects
const music = new Audio('asset/sounds/music.mp3'); 
const jumpSound = new Audio('asset/sounds/jump.mp3');
const hitSound = new Audio('asset/sounds/explosion.ogg');
music.loop = true;

music.volume = 0.5;
music.play(); // background music

//Collision Detection
let checkHit = setInterval(() => {
    let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    let rocket1Left = parseInt(window.getComputedStyle(rocket1).getPropertyValue("left"));
    let rocket2Left = parseInt(window.getComputedStyle(rocket2).getPropertyValue("left"));
    if ((rocket1Left < 60 && rocket1Left > 0 && characterTop >= 265) || (rocket2Left < 30 && rocket2Left > 0 && characterTop >= 265)) {
        let currentHighScore = localStorage.getItem(HIGHEST_SCORE);
            // Setting high score in local storage
        if (!currentHighScore || currentHighScore < `${counter}`) {
                localStorage.setItem(HIGHEST_SCORE, `${counter}`)
                highestScoreLocal.textContent = `High Score: ${localStorage.getItem(HIGHEST_SCORE)}`;
        }    
        
        // Music pause when game ended
        music.pause();
        music.currentTime = 0;
        jumpSound.pause();
        
        // to make objects display disappear 
            // // DRY how to simplify it //
            character.style.display = "none";
            rocket1.style.display = "none";
            rocket2.style.display = "none";
            ship.style.display = "none";
            scoreElement.style.display = "none"; // hitElement codes in score.js
        hitSound.play(); // explosion sound when game is over
        
        swal(`You Lost : "${counter}"`, "Try Again?", "error"); // Using sweetAlert vs ugly alert
        
        document.querySelector('#btn-jump').disabled = true;
        
        
    };
}, 10);



// To Do! create a refresh function using a "Space Bar"
function refresh() {
    window.location.reload();

   
}
