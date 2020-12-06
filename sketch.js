
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var ground;
var survival_time = 0;
var back,backimage;

function preload(){
  monkey_running =     loadAnimation("monkey_0.png","monkey_1.png","monkey_2.png","monkey_3.png","monkey_4.png","monkey_5.png","monkey_6.png","monkey_7.png","monkey_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  //extra image of background
  backimage = loadImage("forest.png");
}

function setup() {
  createCanvas(700,600);
  
  back = createSprite(200,300,700,600);
  back.addImage(backimage);
  
  FoodGroup = new Group();
  obstacleGroup = new Group();
  
  monkey = createSprite(80,550,20,20);
  monkey.addAnimation("running",monkey_running);
  monkey.scale = 0.2;
  
  ground = createSprite(300,600,900,40);
  ground.velocityX = -4;
}

function draw() {
  background("white");
    obstacles();

  ground.x = ground.width/2;
  if(keyDown("space")&&monkey.y>500){
    monkey.velocityY = -20;
}
  monkey.velocityY = monkey.velocityY+0.8;
  console.log(monkey.y)
  food();

  monkey.collide(ground);
  
  drawSprites();
  survival_time = Math.ceil(frameCount/frameRate());
  textSize(20);
  fill("yellow");
  text("Survival Time: "+survival_time,250,60)
}
function obstacles(){
  if(frameCount%300==0){
    obstacle = createSprite(800,550,10,40);
    obstacle.velocityX = -4;
    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.2;
    obstacle.lifetime = 200;
    obstacleGroup.add(obstacle);
  }
}
function food(){
  if(frameCount%80==0){
    banana = createSprite(600,250,40,10);
    banana.velocityX = -5;
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.y = Math.round(random(200,300));
    banana.lifetime = 120;
    FoodGroup.add(banana);
    monkey.depth = banana.depth+1;
  }
}
  