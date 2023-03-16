var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;

var cloud, cloudsGroup, cloudImage;
var obstcale;
var obstcale1Image, obstcale2Image, obstcale3Image, obstcale4Image, obstcale5Image, obstcale6Image;
var score = 0



function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  trex_collided = loadAnimation("trex_collided.png");
  
  groundImage = loadImage("ground2.png");
  
  cloudImage = loadImage("cloud.png");

  obstcale1Image = loadImage("obstacle1.png")
  obstcale2Image = loadImage("obstacle2.png")
  obstcale3Image = loadImage("obstacle3.png")
  obstcale4Image = loadImage("obstacle4.png")
  obstcale5Image = loadImage("obstacle5.png")
  obstcale6Image = loadImage("obstacle6.png")
}

function setup() {
  createCanvas(600, 200);

  trex = createSprite(50,160,20,50);
  trex.addAnimation("running", trex_running);
  // trex.addAnimation("collided",trex_collided)
  trex.scale = 0.5;
  
  ground = createSprite(200,180,400,20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;
  ground.velocityX = -4;
  
  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;
  
  console.log("Hello"+ 5)
  
}

function draw() {
  background(180);
  
  text("score:" + score, 500, 50)
  score = score + frameCount/60
  if(keyDown("space")&& trex.y >= 100) {
    trex.velocityY = -10;
  }
  
  trex.velocityY = trex.velocityY + 0.8
  
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  
  trex.collide(invisibleGround);
  
  //spawn the clouds
  spawnClouds();
  spawnObstcale()
  drawSprites();
}

function spawnClouds() {
  //write code here to spawn the clouds
  if (frameCount % 60 === 0) {
    cloud = createSprite(600,100,40,10);
    cloud.addImage(cloudImage)
    cloud.y = Math.round(random(10,60))
    cloud.scale = 0.4;
    cloud.velocityX = -3;
    
    
    //assigning lifetime to the variable
    cloud.lifetime = 134
    
    //adjust the depth
    cloud.depth = trex.depth
    trex.depth = trex.depth + 1;
    }
}
function spawnObstcale(){
if(frameCount % 60 === 0){
 obstcale = createSprite(600, 165, 10, 40) 
obstcale.velocityX = -6

obstcale.lifetime = 100
obstcale.scale = 0.5
var ran = Math.round(random(1,6))
switch(ran){
  case 1: obstcale.addImage(obstcale1Image);
  break;

  case 2: obstcale.addImage(obstcale2Image);
  break;

  case 3: obstcale.addImage(obstcale3Image);
  break;

 case 4: obstcale.addImage(obstcale4Image);
  break;

  case 5: obstcale.addImage(obstcale5Image);
  break;

  case 6: obstcale.addImage(obstcale6Image);
  break;
default: break;

}
}
}
