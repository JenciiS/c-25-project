class ComputerArcher{
    constructor(x, y, w, h){
        var option={
            isStatic : true
        };
        this.x =x;
        this.y = y;
        this.width = w;
        this.height = h;
        this.image = loadImage("./assets/computerArcher.png");
        this.body = Bodies.rectangle(x, y, width, height, option);

        World.add(world, this.body)
    }
    display(){
        push();
        translate(this.x, this.y);
        imageMode(CENTER);
        image(this.image, 0, 0, 20, 20);
        pop();
    }
}