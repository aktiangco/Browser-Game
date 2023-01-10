let jumping = 0;

// let jump = document.getElementById("btn-jump")

// // Creating a jump function
jump = () => {
    jumping = 1;
    jumpSound.play(); // invoke jump sound
    addJump(); // invoke codes located in score.js
    if (character.classList != "animate") {
        character.classList.add("animate");
    }
        setTimeout(() => {
            character.classList.remove("animate");
        }, 500);
}




//  Creating a jump function using the keyCode
document.onkeydown = checkKey;
function checkKey(e) {
    e = e || window.event;
    if (e.keyCode == '38', '40') {
        jump(); // invoke codes above  
    }
    // To activate Refresh in index.js line #19
    if (e.keyCode == '32') {
        refresh()   // invoke code located in index.js
      
    }
}
