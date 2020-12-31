var bullet,wall;
var speed,weight,thickness;


function setup() {
  createCanvas(1600,400);
 

  bullet=createSprite(200,200,50,5);
  bullet.velocityX=speed;
  bullet.shapeColor="white";

  wall=createSprite(1300,200,thickness,height/2);
  wall.shapeColour="white";

  speed=random(233,321);
  weight=random(30,52);
  thickness=random(22,83);
}

function draw() {
  background("pink");
  
  function hasCollided(lbullet,lwall){
    bulletRightEdge=lbullet.x +lbullet.width;
    wallLeftEdge=lwall.x;
    if(bulletRightEdge>=wallLeftEdge){
      return true
    }
    return false;
  }

  if(hasCollided(bullet,wall)){
    bullet.velocityX=0;
    var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);

    if(damage>10){
      wall.shapeColor=color(255,0,0);
    }

    if(damage<10){
      wall.shapeColor=color(0,255,0);
    }
  }



  drawSprites();
}