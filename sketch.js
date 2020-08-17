
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;


var divisionsArray = [];
var plinkosArray = [];
var particlesArray = [];

function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world  = engine.world;
  ground = new Ground(240,795,480,10);
  for(var i = 0; i<=480; i=i+80){
    divisionsArray.push(new Division(i,700,8,300));
  }
  for (var i = 15;i<=470; i=i+50){
    plinkosArray.push(new Plinko(i,175,10));
  }
  for (var i=40;i<470; i=i+50){
    plinkosArray.push(new Plinko(i,75,10));
  }
  for (var i = 15;i<=470; i=i+50){
    plinkosArray.push(new Plinko(i,375,10));
  }
  for (var i=40;i<470; i=i+50){
    plinkosArray.push(new Plinko(i,275,10));
  }
  for (var i=40;i<470; i=i+50){
    plinkosArray.push(new Plinko(i,475,10));
  }
}

function draw() {
  Engine.update(engine);
  background(0,0,0);  
  ground.display();
  if(frameCount%60===0){
    particlesArray.push(new Particle(random(width/2-240, width/2+240),10,10));
  }
  for(var i =0; i<divisionsArray.length; i = i+1){
    divisionsArray[i].display();
  }
  for(var i =0; i<plinkosArray.length; i = i+1){
    plinkosArray[i].display();
  }
  for (var i=0; i<particlesArray.length; i = i+1){
    particlesArray[i].display();
  }
  drawSprites();
}