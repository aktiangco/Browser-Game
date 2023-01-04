let jumping = 0;


// // Creating a jump function
jump = () => {
    jumping = 1;
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
        addHit(); // invoke codes located in score.js
        jumpSound.play(); // invoke jump sound
    }
    // To activate Refresh in index.js line #19
    if (e.keyCode == '32') {
        refresh() // invoke code located in index.js
    }
}
