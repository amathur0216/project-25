class Paper {
    constructor(x, y){
        this.body = Matter.Bodies.circle(x, y, 70);
        this.image = loadImage("paper.png")
    }
    display(){
    }
}