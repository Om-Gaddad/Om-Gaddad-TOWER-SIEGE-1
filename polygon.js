class Polygon {
    constructor(x, y) {
      var options = {
          isStatic: true,
          'restitution':0.8,
          'friction': 1.0,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y, 70, 70, options);
      this.width = width;
      this.height = height;
      this.image = loadImage("polygon.png")    
      World.add(world, this.image);
    }
    display(){
      // var pos = this.image.position;
      push();
      image(this.image, 20, 520, 100, 100);
      pop();
    }
  };
  