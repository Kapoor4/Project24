class Stone {
    constructor(x, y, width, height) {
      var opt = {
        density:12,
        friction: 0.9,
        restitution:0.8
      };
      this.body = Bodies.rectangle(x, y, width, height, opt);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    };
    display(){
      var pos = this.body.position;
  
      push();
      translate(this.body.position.x, this.body.position.y);
      rotate(this.body.angle);
      strokeWeight(3);
      fill('red')
      rectMode(CENTER)
      rect(0, 0, this.width, this.height);
      pop();
    };
  };