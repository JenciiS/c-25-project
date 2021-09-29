class Player {
  constructor(x, y, width, height) {
    var options = {
      isStatic: true
    };

    this.body = Bodies.rectangle(x, y, width, height, options);

    this.width = width;
    this.height = height;
    this.image = loadImage("./assets/player.png");

    World.add(world, this.body);
  }

 
  display() {
  if (keyIsDown(RIGHT_ARROW && this.angle < 1.47)) {
     this.angle = this.angle + 0.02    
  }

  if (keyIsDown(LEFT_ARROW && this.angle > 1.47)) {
    this.angle = this.angle - 0.02    
 }
   
    var pos = this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image, 0, 0, this.width, this.height);
    pop();
  }
}
