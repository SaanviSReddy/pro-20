

var speed,weight;
var car;

var wall;

var deformation;
function setup() {
  createCanvas(800,100);
  
  car=createSprite(10,50,20,20);
  
  wall=createSprite(790,55,15,50);
  speed= Math.round(random(20,120));
 weight=Math.round(random(400,1500));
}

function draw() {
  background(0); 


  car.shapeColor="white";

  car.velocityX=4;
  car.velocityY=0;
  
if(wall.x-car.x < (car.width+wall.width)/2)
{
  car.velocityX=0;
  var deformation=0.5 * speed * speed * weight/22500;
console.log(speed);
console.log(weight);
console.log(deformation);

if(deformation>180){
  console.log(speed);
  car.shapeColor=color(255,0,0);
}
if(deformation<180 && deformation>100){
car.shapeColor=color(229,228,0);

}
if(deformation<100){
car.shapeColor=color(0,255,0);
}

}
   
  drawSprites();
}