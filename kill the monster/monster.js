class Monster {
    constructor(x,y,width,height) {
      var options = {
          restitution:0.7,
          friction:0.8
      } 
      this.image=loadImage("images/Monster-01.png")
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      imageMode(CENTER);
      fill("blue");
      image(this.image,pos.x, pos.y, this.width, this.height);
    }
  };
