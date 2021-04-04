const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, pig1;
var backgroundImg;



function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    
    ground = new Ground(600,height,1200,20)
   
    box1 = new Box(700,320,70,70);
    box2 = new Box(600,320,60,30);
   
    pig1 = new Pig(810, 350);
   

   

   

   
    
    bird = new Bird(100,100);

}

function draw(){
    background("lightblue");
    Engine.update(engine);
   
    box1.display();
    box2.display();
   
    ground.display();
    pig1.display();
   

  
    
   

   
  

    bird.display();
    
}
