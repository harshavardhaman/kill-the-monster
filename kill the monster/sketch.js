const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies
const Constraint=Matter.Constraint
var engine,world
var box1,box2,box3,box4
var ground
function preload(){
    pg=loadImage("images/GamingBackground.png")
}
function setup(){
    engine=Engine.create();
    world=engine.world;
    createCanvas(600,400);
    ground=new Ground(300,350,600,50);
box1=new Box (400,320,50,100)
box2=new Box (300,320,50,100)
box3=new Box (500,320,50,100)
box4=new Box (450,320,50,100)
box5=new Box (350,320,50,100)
box6=new Box (550,320,50,100)
polygon=new Polygon(200,300,200,100)
chain=new Slingshot(polygon.body,{x:200,y:50})
monster=new Monster(500,300,100,100)
}

function draw(){
    background(pg);
    Engine.update(engine)
    ground.display();
    box1.display();  
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    polygon.display();
    monster.display();
    
}
function mouseDragged(){
Matter.Body.setPosition(polygon.body,{x:mouseX,y:mouseY})
}