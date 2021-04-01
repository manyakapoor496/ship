var seaImage;
var sea;
var ship;
var shipImg;

function preload(){
shipImg1 = loadAnimation("ship-1.png","ship-1.png","ship-2.png","ship-1.png"); 
  shipImg2 = loadAnimation("ship-3.png","ship-3.png","ship-4.png","ship-3.png");
  seaImg = loadImage("sea.png")
}

function setup(){
  createCanvas(400,400);
  
  //Moving Background
  sea=createSprite(400,300);
  sea.addImage(seaImg);
  sea.velocityX = -3;
  
  ship=createSprite(130,200,30,30);
  ship.addAnimation("movingship",shipImg1);
  ship.scale=0.3;
  
  createEdgeSprites();
  
}

function draw() {
  background(0);
  
  ship.velocityX= -3;
 
  if(sea.X < 0){
    sea.X = sea.width/8;
  }
  
  
    if(keyDown("space")){
      ship.addAnimation("shiplightOn",shipImg2);
    }
  drawSprites();
  
  }