// Creating a jump function
jump = () => {
    if (character.classList != "animate") {
        character.classList.add("animate");
    }
        setTimeout(function () {
            character.classList.remove("animate");
        }, 500);
    }

document.onkeydown = checkKey;
//  Creating a jump function using the up and down arrow keys
function checkKey(e) {
    e = e || window.event;
    if (e.keyCode == '38') {
        jump() 
    }
    if (e.keyCode == '40') {
        jump() 
    }
}


