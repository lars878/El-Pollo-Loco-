class BackgroundObject extends MovableObject {

    width = 720; // Set width of the background object
    height = 480; // Set height of the background object
    constructor(imagePath, x) {
        super().loadImage(imagePath);
        this.x = x;
        this.y = 480 - this.height; // Position the background object at the bottom of the canvas
    }
}