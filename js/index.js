// Grabbing element ID in the HTML
const character = document.getElementById("mech"); 
const block1 = document.getElementById("rocket");
const block2 = document.getElementById("enemy");

//Collision Detection
const checkHit = setInterval(() => {
    let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    let blockLeft = parseInt(window.getComputedStyle(block1).getPropertyValue("left"));
    if (blockLeft < 50 && blockLeft > 20 && characterTop >= 230) {
       // to make objects display "none" 
        // DRY how to simplify it
        character.style.display = "none";
        block1.style.display = "none";
        block2.style.display = "none";
        scoreElement.style.display = "none"; // hitElement codes in score.js
        swal("you lost", "Try Again?", "error"); // Using sweetAlert vs ugly alert
    }
}, 10);

// To Do! create a refresh function using a "Down Arrow"
function refresh() {
    window.location.reload();
};

