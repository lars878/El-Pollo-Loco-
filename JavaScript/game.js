let canvas;
let ctx;
let character = new Image();

function init() {
    canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d');
    character.src = '../img/2_character_pepe/2_walk/W-21.png';

    character.onload = () => {
        ctx.drawImage(character, 0, 0, character.width, character.height, 0, 0, canvas.width, canvas.height);
    }
}