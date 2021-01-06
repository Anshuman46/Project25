
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var ball,ballImage,ground;
var log1,log2,log3;

function preload()
{
	
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball = new Paper(200,200,70/2);
	

	log1 = new Dustbin(600,520,10,100);
	log2 = new Dustbin(650,580,100,10);
	log3 = new Dustbin(700,520,10,100);


	ground = new Ground(400,600,800,20);



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("grey");
  
  ball.display();
  ground.display();
  log1.display();
  log2.display();
  log3.display();

  


  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball.body, ball.body.position,{x:40,y:-50});
	}
}



