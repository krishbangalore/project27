
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
const Render = Matter.Render;
var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5;
var roofObject;
var rope1, rope2, rope3, rope4, rope5;

var engine, world;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	

	roofObject = new Ground(380,200,700,20);
	bobObject1 = new Bob(300,400,70);
	rope1 = new rope(bobObject1.body,roofObject.body,-140 ,0 )
	bobObject2 = new Bob(370,400,70);
	rope2 = new rope(bobObject2.body,roofObject.body,-140 ,0 )
	bobObject3 = new Bob(440,400,70);
	rope3 = new rope(bobObject3.body,roofObject.body,-140 ,0 )
	bobObject4 = new Bob(510,400,70);
	rope4 = new rope(bobObject4.body,roofObject.body,-140 ,0 )
	bobObject5 = new Bob(580,400,70);
	rope5 = new rope(bobObject5.body,roofObject.body,-140 ,0 )

	var render = Render.create({
		element: document.body,
		engine: engine,
		options: {
		  width: 800,
		  height: 400,
		  wireframes: false
		}
	  });

	//bobObject4 = new Bob(450,500,70,70);
	//bobObject5 = new Bob(500,500,70,70);

	//Engine.run(engine);
	//Render.run(render);
	
}


function draw() {
  rectMode(CENTER);
 //Engine.update(engine);
//  background(0);
 bobObject1.display();
 rope1.display();
 bobObject2.display();
 rope2.display();
 bobObject3.display();
 rope3.display();
 bobObject4.display();
 rope4.display();
 bobObject5.display();
 rope5.display();

 roofObject.display();
 //keyPressed();
  drawSprites();
  
}

function keyPressed() {
	
	if (keyCode === UP_ARROW) {
       //alert(test);
	   //alert('test');
	   // Look at the hints in the document and understand how to make the package body fall only 
	   //on press of the Down arrow key.
	   //Body.setStatic(packageBody,false);
	   Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-50,y:-45})
	  //Matter.Body.applyForce(rope1.body,rope1.body.position,{x:-50,y:-300})
	  // alert('test1');
	 }
   }



