// Grabbing element in the HTML
const character = document.getElementById("mech"); 
const block1 = document.getElementById("rocket");
const block2 = document.getElementById("enemy");


//Collision Detection
const checkHit = setInterval(() => {
    let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    let blockLeft = parseInt(window.getComputedStyle(block1).getPropertyValue("left"));
    if (blockLeft < 50 && blockLeft > 20 && characterTop >= 230) {
        block1.style.animation = "none";
        block1.style.display = "none";
        block2.style.display = "none";
        alert("You Died!");  
    }
}, 10);

// To Do! create a refresh function using a "Space bar"
function refresh() {
    window.location.reload();
};

