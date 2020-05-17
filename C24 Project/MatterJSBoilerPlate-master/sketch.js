var db,dbimg
var engine, world;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1270, 800);
	
	engine = Engine.create();
	world = engine.world;
	
	Paper = new Ball()
	db = new Dustbin()
	ground = new ground1(635,790,1270,20)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  ground.display();
  Paper.display()
  db.display()
  keypress();
  
  drawSprites();
 
}

function keypress(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(Paper.body,Paper.body.position,{x:15,y:-20})
	}
	if (keyCode === DOWN_ARROW){
		Matter.Body.applyForce(Paper.body,Paper.body.position,{x:2,y:15})
	}
}


