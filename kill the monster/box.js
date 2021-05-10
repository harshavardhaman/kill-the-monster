class Box {
    constructor(x,y,width,height) {
      var options = {
          restitution:0.7,
          friction:0.8
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      this.Visiblity = 255;
      World.add(world, this.body);
    }
    display(){
    
 
        if(this.body.speed < 3){
          var pos =this.body.position;
          rectMode(CENTER);
          fill("blue");
          rect(pos.x, pos.y, this.width, this.height);
         }
         else{
           World.remove(world, this.body);
         }
     
    }
  };
