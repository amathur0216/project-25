
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper1;
var box1, box2, box3;
var dustbinImage;

function preload()
{
	dustbinImage = loadImage("dustbin.png");
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	var options = {
		isStatic: false,
		restitution: 0.3,
		friction: 0.5,
		density: 1.2
	}


box1 = createSprite (500, 650, 200, 20);
	box1.shapeColor = color("red");
	box1.addImage("dustbinImage", dustbinImage);

	box2 = createSprite(400, 600, 20, 100);
	box2.shapeColor = color("red");

	box3 = createSprite(600, 600, 20, 100);
	box3.shapeColor = color("red");

	paper1 = new Paper(200, 600, options);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  paper1.display();
  keyPressed();
  drawSprites();
 
}

function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(paper1.body, paper1.body.position,{x:85, y:-85});
	}
}

