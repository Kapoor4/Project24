class Iron {
    constructor(x, y, width, height) {
      var options2 = {
        density:30,
        friction: 3,
        restitution:0.8
      };
      this.body = Bodies.rectangle(x, y, width, height, options2);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    };
    display(){
      var pos = this.body.position;
  
      push();
      translate(this.body.position.x, this.body.position.y);
      rotate(this.body.angle);
      fill('black')
      rectMode(CENTER)
      rect(0, 0, this.width, this.height);
      pop();
    };
  };