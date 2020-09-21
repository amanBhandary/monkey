
var monkey,monkey_running;
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score;
var ground;
var player;
var survivalTime=0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
 
player=createSprite(70,350,20,20);
player.addAnimation("monkey",monkey_running);
player.scale=0.1; 
  
  ground=createSprite(200,370,400,20);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  

  
}


function draw() {
   background("white");
  
  
  if(keyDown("space")){
    player.velocityY=-12;
     
  }
    //add gravity
  player.velocityY=player.velocityY+0.8;
  player.collide(ground);
  
 
  
  if(ground.x>0){
   ground.x=ground.width/2; 
  }
  
  stroke("0")
  fill("0")
  textSize(20)
 survivalTime=Math.ceil(frameCount/frameRate())
  text("survivalTime:"+survivalTime,100,50);
  
  
  drawSprites();
}
