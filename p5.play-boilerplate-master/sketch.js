var car, wall;
var speed, weight;

function setup() {
  createCanvas(1600,400);
  car = createSprite(50, 200, 50, 50);
  wall = createSprite(1500, 200, 30, height/2);
  wall.shapeColor= color(80, 80, 80);
  speed = random(75,90);
  weight = random(1000,1500);
  car.velocityX = speed;
}

function draw() {
  background(255,255,255);
  

  //console.log(car.velocityX);
  //console.log(car.shapeColor);

  if(wall.x - car.x < (car.width+wall.width)/2) {
    var deformation= (0.5 * weight * speed)/225;
    text(deformation, 350, 200);
    car.velocityX = 0;
    if(deformation < 100 && deformation > 0) {
      car.shapeColor="green"
      //color(0,255,0);
    }
    if(deformation < 180 && deformation > 100) {
      car.shapeColor="yellow"
      //(230,230,0);
    }
    if(deformation > 180) {
      car.shapeColor="red"
      //(255,0,0);
    }
  }
  drawSprites();
}