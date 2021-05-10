class Slingshot{
    constructor(bodyA,pointB){
        var options={
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.2,
            length:200
        }
        this.pointB=pointB
        this.sling=Constraint.create(options);
        World.add(world,this.sling);
    }fly(){
        this.sling.bodyA=null;
    }
    display(){
        if(this.sling.bodyA){

        
        var pointA=this.sling.bodyA.position;
        var pointB=this.pointB;
        strokeWeight(5);
        fill("black")
        line(pointA.x,pointA.y-50,pointB.x,pointB.y)
        }
    }
}