
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;
var ground;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

 options = { isStatic: true }

  ground = Bodies.rectangle(400,690,800,20,options)
  World.add(ground,world)

	

 paper_ball = new ball(50,660,40,options)


	Engine.run(engine);
  
}


function draw() {
    background(180);
  Engine.update(engine)

  rectMode(centre)
  rect(ground.position.x,ground.positon.y,800,20)

 
  paper_ball.display();

 
}

function keyPressed() {
  if (keyCode === UPPER_ARROW) {
    
    Matter.Body.applyForce(paper_ball.object,paper_ball.object.position,{x:85,Y:-85});

   }
 }

