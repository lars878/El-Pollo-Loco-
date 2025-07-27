let canvas;
let world;
let keyboard = new Keyboard();

function init() {
    canvas = document.getElementById('canvas');
    world = new World(canvas, keyboard);

    console.log('My Character is', world.character);
}

window.addEventListener("keydown", (event) => {
    if (event.keyCode == 37) { // ArrowLeft
        keyboard.LEFT = true;
    }
    if (event.keyCode == 39) { // ArrowRight
        keyboard.RIGHT = true;
    }
    if (event.keyCode == 38) { // ArrowUp
        keyboard.UP = true;
    }
    if (event.keyCode == 40) { // ArrowDown
        keyboard.DOWN = true;
    }
    if (event.keyCode == 32) { // Space
        keyboard.SPACE = true;
    }

});

window.addEventListener("keyup", (event) => {
    if (event.keyCode == 37) { // ArrowLeft
        keyboard.LEFT = false;
    }
    if (event.keyCode == 39) { // ArrowRight
        keyboard.RIGHT = false;
    }
    if (event.keyCode == 38) { // ArrowUp
        keyboard.UP = false;
    }
    if (event.keyCode == 40) { // ArrowDown
        keyboard.DOWN = false;
    }
    if (event.keyCode == 32) { // Space
        keyboard.SPACE = false;
    }

});
