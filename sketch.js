
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score

function preload(){
   
  
  monkey_running =  loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
   createCanvas(600,200);
  
  ground = createSprite(200,180,1000,20);
  ground.x = ground.width /2;
  ground.velocityX = -4;
  
  
  monkey = createSprite(50,160,20,50);
  monkey.addAnimation("running", monkey_running);
  monkey.scale = 0.1;
  
   invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;
  
  
  
  
  

  
}


function draw() {
   background(180);
  
  monkey.collide(invisibleGround);
  
  
  
  
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  
  if(keyDown("space")&& monkey.y >= 100) {
    monkey.velocityY = -10;
  }
  
  monkey.velocityY = monkey.velocityY + 0.8;
  
  
  
  
  
  spawnBananas();
  SpawnObstacles();
  drawSprites();

  
}


function spawnBananas(){
 // write your code here 
  
  
  if (frameCount%80===0) { 
     
  banana=createSprite(500,80,20,20);
  banana.addImage(bananaImage);
  banana.velocityX=-4
  banana.scale=0.1;
  banana.y=Math.round(random(10,100))
  banana.lifetime=120;
  banana.depth=monkey.depth       
  monkey.depth=monkey.depth+1
   }
}


function SpawnObstacles() {
  if (frameCount % 60 === 0){
  Obstacles=  createSprite(600,170,20,20);
  Obstacles.addImage(obstacleImage)  
  Obstacles.velocityX=-3
  Obstacles.lifetime =200;
  Obstacles.scale=0.1;
  Obstacles.X=Math.round(random(1,6));
  Obstacles.depth = Obstacles.depth
  monkey.depth = monkey.depth + 1;  
  }
}



