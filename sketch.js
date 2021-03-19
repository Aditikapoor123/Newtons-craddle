
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint= Matter.Constraint;
const Body = Matter.Body;
var engine,world,roof1,bob1, bob2 , bob3 ,bob4,bob5
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    roof1= new Roof (400,150,400,30)
	bob1= new Bob (400,300,20)
	bob2= new Bob (360,300,20)
	bob3= new Bob (320,300,20)
	bob4= new Bob (440,300,20)
	bob5= new Bob (480,300,20)
    chain1=new Chain(bob1.body,{x:400,y:150})
	chain2=new Chain(bob2.body,{x:360,y:150})
	chain3=new Chain(bob3.body,{x:320,y:150})
	chain4=new Chain(bob4.body,{x:440,y:150})
	chain5=new Chain(bob5.body,{x:480,y:150})
	Engine.run(engine);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  roof1.display()
  bob1.display()
  bob2.display(
  )
  bob3.display()
  bob4.display()
  bob5.display()
  chain1.display()
  chain2.display()
  chain3.display()
  chain4.display()
  chain5.display()
  drawSprites();
 
}
keyPressed=()=>{
	if(keyCode==32){
		Body.applyForce(bob3.body,bob3.body.position,{x:-3,y:-4});
	}

}

