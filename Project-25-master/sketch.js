const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dustbin1, paperObject,groundObject;
var world;


function setup() {
	createCanvas(1257, 600);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;
	
	paperObject = new Paper(200,450,70);
	groundObject = new Ground(width/2,620,width,20);
	dustbin1 = new Dustbin(1200,510,20,200);
	dustbin2 = new Dustbin(1000,510,20,200);
	dustbin3 = new Dustbin(1100,600,200,20);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(77,158,209);
 
  paperObject.display();
  groundObject.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();

  textSize(30);
  fill("black");
  text('Press the up arrow key to throw the trash in the dustbin',250,210);
  
}

function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:130,y:-145});

	}
}


