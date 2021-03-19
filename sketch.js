
var monkey , monkey_running,ground;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score;
var survivalTime;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png");
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  
  FoodGroup= new Group()
  obstacleGroup= new Group()
 
}



function setup() {
createCanvas(400,400);  
  score=0;
   survivalTime=0
  
monkey=createSprite(50,380,20,50);
  monkey.addAnimation("running", monkey_running)
  monkey.scale=0.1;
  
  ground=createSprite(400,400,800,20)
  ground.x = ground.width /2;
ground.velocityX = -4;
  
  
}


function draw() {
background("skyblue");
  
  if(keyDown("space")&& monkey.y >=100){
    monkey.velocityY=-15;
  }
   
  
 monkey.velocityY = monkey.velocityY + 0.8 
  
 if (ground.x < 0){
      ground.x = ground.width/2;
    }
  if(monkey.isTouching(FoodGroup)){
     FoodGroup.destroyEach()
    score=score+1
      }
   
 monkey.collide(ground);
  spawnbanana();
  spawnobstacle();
  drawSprites();
  
  fill("white") 
  text("Score: "+ score, 350,50);
  
  fill("black")
  var survivalTime=Math.ceil(frameCount/frameRate());
  text("Survival Time: "+ survivalTime,200,50)
  
  
  
  
  
  
  
  
  
  monkey.collide(ground);
  spawnbanana();
  spawnobstacle();
  drawSprites();
  
}

function spawnbanana(){
 if (frameCount % 80 === 0) { 
 banana=createSprite(400,200,10,40);
   banana.addImage( bananaImage)
   banana.Y=Math.round(random(50,60,70))
 banana.velocityX = -3;  
 banana.scale=0.1;
  
  banana.lifetime=-5;
    FoodGroup.add(banana)
  
 } 
}
function spawnobstacle(){
 if (frameCount % 80 === 0) { 
 obstacle=createSprite(400,365,30,30);
   obstacle.addImage( obstacleImage)
   obstacle.velocityX = -6;  
obstacle.scale=0.2;
  
  obstacle.lifetime=-5;
    obstacleGroup.add(obstacle)
  
 } 
}
