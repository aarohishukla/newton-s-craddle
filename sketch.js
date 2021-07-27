const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
//Create multiple bobs, mulitple ropes varibale here
var bob1,bob2,bob3,bob4,bob5,bob9, rope,rope2,rope3,rope4,rope5;

function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	bob1 = new Bob9(250,300);
	bob2 = new Bob9(300,300);
	bob3 = new Bob9(350,300);
	bob4 = new Bob9(400,300);
	bob5 = new Bob9(450,300);

	rope = new Rope(bob1.body,roof.Body,-100,0);
	World.add(world,rope);

	rope = new Rope(bob2.body,roof.Body,-50,0);
	World.add(world,rope2);

	rope = new Rope(bob3.body,roof.Body,0,0);
	World.add(world,rope3);

	rope = new Rope(bob4.body,roof.Body,+50,0);
	World.add(world,rope4);

	rope = new Rope(bob5.body,roof.Body,+100,0);
	World.add(world,rope5);

	var roof_options={
		isStatic:true			
	}

	roof = Bodies.rectangle(400,100,230,20,roof_options);
    World.add(world,roof);

	Engine.run(engine);
	
  
}

function draw() {
  rectMode(CENTER);
  background("#99004d");

  rect(roof.position.x,roof.position.y,230,20);

  //call display() to show ropes here
 bob1.display();
 bob2.display();
 bob3.display();
 bob4.display();
 bob5.display();
  
 rope.display();
 rope2.display();
 rope3.display();
 rope4.display();
 rope5.display();
 

  //create ellipse shape for multiple bobs here

 
}

//Write keyPressed function and apply force on pressing up_arrow key on the first bob.
function keyPressed(){
	if(keyCode===32){
		Matter.Body.applyForce(bob1.body,bob1.position,{x:-730,y:0});
	}
}