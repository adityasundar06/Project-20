var car;
var wall;
var speed;
var weight;
var deformation;

function setup() {
  createCanvas(800,400);
  speed = random(55,90);
  weight = random(400,1500);
}

function draw() {
  background(255,255,255);

  car = createSprite(50,200,50,50);
  wall = createSprite(1500,200,60,height/2);

  car.velocityX = speed;

  if(car.isTouching(wall)){
    deformation = (0.5*weight*speed*speed)/22500;
    if(deformation < 100){
      car.shapeColor = "green";
    }
    if(deformation > 100 && deformation < 180){
      car.shapeColor = "yellow";
    }
    if(deformation > 180){
      car.shapeColor = "red";
    }
  }
  drawSprites();
}