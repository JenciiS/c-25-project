class PlayerArcher{
    constructor(x, y, width, height){
        var option={
            isStatic : true
        };
        this.x =x;
        this.y = y;
        this.image = loadImage("./assets/playerArcher.png");
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