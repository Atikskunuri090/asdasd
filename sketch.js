const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world, backgroundImg;
var canvas, angle, tower, ground, cannon;
var balls = [];
var tobs = []
function preload() {
  backgroundImg = loadImage("./assets/background.gif");
  towerImage = loadImage("./assets/tower.png");
}

function setup() {
  canvas = createCanvas(1200, 600);
  engine = Engine.create();
  world = engine.world;
  angleMode(DEGREES);
  angle = 15;

  ground = Bodies.rectangle(0, height - 1, width * 2, 1, { isStatic: true });
  World.add(world, ground);

  tower = Bodies.rectangle(160, 350, 160, 310, { isStatic: true });
  World.add(world, tower);

  cannon = new Cannon(180, 110, 130, 100, angle);
  x = new Boat(700,420,100,100)
}

function draw() {
  background(189);
  image(backgroundImg, 0, 0, width, height);

  Engine.update(engine);

  
  rect(ground.position.x, ground.position.y, width * 2, 1);
 

  push();
  imageMode(CENTER);
  image(towerImage,tower.position.x, tower.position.y, 160, 310);
  pop();

  for (var i = 0; i < balls.length; i++) {
    showCannonBalls(balls[i]);
  }

  cannon.display();
  obt();
  x.boate()
}

function keyPressed() {
  if (keyCode === DOWN_ARROW) {
    var cannonBall = new CannonBall(cannon.x, cannon.y);
    cannonBall.trajectory = [];
    Matter.Body.setAngle(cannonBall.body, cannon.angle);
    balls.push(cannonBall);
  }
}

function showCannonBalls(ball) {
  if (ball) {
    ball.display();
  }
}

function keyReleased() {
  if (keyCode === DOWN_ARROW) {
    balls[balls.length - 1].shoot();
  }
}

function obt(){
  if (tobs.length > 0){
    if (tobs[tobs.length-1] === undefined||tobs[tobs.length-1].body.position.x<600){
      var obJJect = new Boat(500,90,250,150)
      tobs.push(obJJect)
    }
    else{

    
    var obJect = new Boat(500,90,250,150)
    tobs.push(obJect);
    }
    for (var i = 0; i<tobs.length;i=i+1){
      if (tobs[i]){
        Matter.body.setVelocity(tobs[i].body,{x:-2,y:0})
        tobs[i].boate()
      }
      else{
        tobs[i]
      }
    }
  }
  

}