class Character extends MovableObject {

    height = 280; // Set height of the character
    y = 155; // Set y position of the character
    width = 150; // Set width of the character
    speed = 10; // Set speed of the character

    IMAGES_WALKING = [
        'img/2_character_pepe/2_walk/W-21.png',
        'img/2_character_pepe/2_walk/W-22.png',
        'img/2_character_pepe/2_walk/W-23.png',
        'img/2_character_pepe/2_walk/W-24.png',
        'img/2_character_pepe/2_walk/W-25.png',
        'img/2_character_pepe/2_walk/W-26.png'
    ];

    world; // Reference to the world object

    constructor() {
        super().loadImage('img/2_character_pepe/2_walk/W-21.png');
        this.loadImages(this.IMAGES_WALKING);

        this.animate();
    }

    animate() {

        setInterval(() => {
            if (this.world.keyboard.RIGHT) {
                this.x += this.speed; // Move character to the right
                this.otherDirection = false; // Reset direction for animation
            }

            if (this.world.keyboard.LEFT) {
                this.x -= this.speed; // Move character to the left
                this.otherDirection = true; // Change direction for animation
            }
        }, 1000 / 60); // 60 FPS




        setInterval(() => {

            if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT) {


                // Walk Animation
                let i = this.currentImage % this.IMAGES_WALKING.length;
                let path = this.IMAGES_WALKING[i];
                this.img = this.imageCache[path];
                this.currentImage++;
            }
        }, 50); // Change image every 50 milliseconds
    }

    jump() {

    }
}