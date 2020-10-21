var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var box1, box2, box3;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 240, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 9 , {restitution:0.5, isStatic:false});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	World.add(world, ground);
	 

   box1 = new Box(400,650,30,10);
   box1.shapeColor=color("red")
   box2 = new Box(390,650,10,30);
   box2.shapeColor=color("red")
   box3 = new Box(410,650,10,30);
   box3.shapeColor=color("red")



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);


  box1.display();
  box2.display();
  box3.display();

  drawSprites();
  keyPressed();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	 

	Matter.Body.setStatic(packageBody,false);
	packageSprite.x= packageBody.position.x 
	packageSprite.y= packageBody.position.y 
	
    
    
  }
}



 
	

  



