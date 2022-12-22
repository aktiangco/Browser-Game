// // Creating a jump function
jump = () => {
    if (character.classList != "animate") {
        character.classList.add("animate");
    }
        setTimeout(() => {
            character.classList.remove("animate");
        }, 500);
}

//  Creating a jump function using the up and down arrow keys
document.onkeydown = checkKey;
function checkKey(e) {
    e = e || window.event;
    if (e.keyCode == '38') {
        jump() 
    }
    // To activate Refresh in index.js line #19
    if (e.keyCode == '40') {
        refresh() 
    }
}
