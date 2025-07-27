class Cloud extends MovableObject {

    y = 20;
    width = 500; // Set width of the cloud
    height = 250; // Set height of the cloud

    constructor() {
        super().loadImage('img/5_background/layers/4_clouds/1.png');

        this.x = Math.random() * 500; // Random x position
        this.animate();

    }

    animate() {
        this.moveLeft();
    }

}
