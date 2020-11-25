const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dustbin;
var ball;
var ground;

function preload(){

}
function setup() {
    createCanvas(800, 700);
    engine = Engine.create();
    world = engine.world;
    ball1 = new BALL(100,200,20);
    ground = new GROUND(750,580,1500,20)
    dustbin1 = new BIN (630,657,20,120)
     Engine.run(engine);  
}

function draw() {
  rectMode(CENTER);
  background(0);
    
    Engine.update(engine);

    ground.display();
    dustbin1.display();
    ball1.display();

  drawSprites();
}

function keyPressed(){
    if(keyCode===UP_ARROW){
        Matter.Body.applyForce(ball.body,ball.body.position,{x:85,y:-85});
    }
}

