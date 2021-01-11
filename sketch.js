
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var survivalTime=0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  //backgroundImage=loadImage("jungle.png")
 
}



function setup() {
 createCanvas(600,600) 
  
 // background=createSprite(600,600)
 // background.addImage(backgroundImage)
  

  monkey=createSprite(100,540)
  monkey.addAnimation("monkey",monkey_running)
  monkey.scale=0.1
   
  
  obstacle=createSprite(600,550)
  obstacle.addImage(obstacleImage)
obstacle.scale=0.1
  obstacle.velocityX=-3
  
  ground=createSprite(100,580,600,20)
  ground.velocityX=-3
 // ground.visible=false;
  
  bananaGroup=new Group()
  obstacleGroup=new Group()

}


function draw() {

background(220)
if(ground.x<300){
  ground.x=300
}
 
if(keyDown("space")){
  monkey.velocityY=-10
}
  monkey.velocityY+=0.8;
  monkey.collide(ground)
  bananas()
  
  if(monkey.isTouching(bananaGroup)){
    score=score+1
  }
 
  stroke("white")
  textSize(20)
  fill("white")
  text("Score:"+score,500,50)
  
  stroke("black")
  textSize(20)
  fill("black")
  survivalTime=Math.ceil(frameCount/frameRate())
  text("Survival Time:"+survivalTime,100,50)
  
  if(monkey.isTouching(obstacleGroup)){
    monkey.scale=0.1
  }
    
    switch(score){
      case 10:monkey.scale=0.12;
        break;
     case 20:monkey.scale=0.12;
        break;
     case 30:monkey.scale=0.12;
        break;
     case 40:monkey.scale=0.12;
        break;
        default:break;

    }
    
drawSprites()
  
}
function bananas(){
  if(frameCount%200===0){
    banana=createSprite(600,300)
  banana.addImage(bananaImage)
  banana.scale=0.1
    banana.velocityX=-3
    bananaGroup.add(banana)
  }
}

function obstacles(){
  if(frameCount%200===0){
    obstacle=createSprite(100,580)
  ostacle.addImage(obstacleImage)
  obstacle.scale=0.1
    obstacle.velocityX=-3
    obstacleGroup.add(obstacle)
  }
}



