// Grabbing element in the HTML
const character = document.getElementById("mech"); 
const block = document.getElementById("rocket");
const score = document.getElementById("score");
const refresh = document.getElementById("refresh");




//Collision Detection
const checkHit = setInterval(function() {
    let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    if (blockLeft < 50 && blockLeft > 20 && characterTop >=230) {
        block.style.animation = "none";
        block.style.display = "none";
        alert("You Lose!");  
    }
}, 10);

