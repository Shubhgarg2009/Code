const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var bg1,bg2,bg3,bg;
var box,boxIMG,player1,question1;
var bike,track,question2;
var trophy,pacman,ghost4,ghost3,ghost2,ghost1,question3;
var option11,option21,option12,option22,option13,option23 ;
var option11IMG,option21IMG,option12IMG,option22IMG,option13IMG,option23IMG ;
var bg1IMG,bg2IMG,bgIMG,player2,player2IMG;
var boxIMG,player1IMG,question1IMG;
var bikeIMG,trackIMG,question2IMG;
var trophyIMG,pacmanIMG,ghost4IMG,ghost3IMG,ghost2IMG,ghost1IMG,question3IMG;
var g1,g2,g3,g4,g5,g6,g7,g8,g9,g10,g11,g12;
var gameState = 'Level1';
//var gameState = Level2;
//var gameState = Level3;
var rules1,rules2,rules3;
var rules1IMG,rules2IMG,rules3IMG;
var track,bgreset,reset,resetIMG;
var rules11;
var question1,question1IMG,objIMG;


function preload(){
    option11IMG=loadImage("level1IMG/1level1.png");
    option21IMG=loadImage("level1IMG/2level1.png");
    option12IMG=loadImage("level2IMG/2level1.png");
    option22IMG=loadImage("level2IMG/2level2.png");
    option13IMG=loadImage("level3IMG/3level1.png");
    option23IMG=loadImage("level3IMG/3level2.png");
 bg1IMG=loadImage("level1IMG/bg1.png");
 bg2IMG=loadImage("level2IMG/bg2.png");

 bgIMG=loadImage("bg.png");

 boxIMG=loadImage("level1IMG/box.png");
 player1IMG=loadImage("level1IMG/player1.png");
 question1IMG=loadImage("level1IMG/question1.png");
 bikeIMG=loadImage("level3IMG/bike.png");
 trackIMG=loadImage("level3IMG/track.png");
 question2IMG=loadImage("level2IMG/question2.png");
trophyIMG=loadImage("level2IMG/trophy.png");
pacmanIMG=loadImage("level2IMG/pacman.png");
ghost4IMG=loadImage("level2IMG/ghost4.png");
ghost3IMG=loadImage("level2IMG/ghost3.png");
ghost2IMG=loadImage("level2IMG/ghost2.png");
ghost1IMG=loadImage("level2IMG/ghost1.png");
question3IMG=loadImage("level3IMG/question3.png");
rules1IMG=loadImage("level1IMG/Rules1.png");
rules11=loadImage("level1IMG/rules1level.png");
rules2IMG=loadImage("level2IMG/rules2level.png");
boxIMG=loadImage("level1IMG/box.png")
option11IMG=loadImage("level1IMG/1level1.png")
option12IMG=loadImage("level1IMG/2level1.png")
question1IMG=loadImage("level1IMG/question1.png")
player2IMG=loadImage("level1IMG/player2.png")
bgreset=loadImage("bgreset.png")
resetIMG=loadImage("reset.png")
}

function setup(){
    var canvas = createCanvas(windowWidth,windowHeight);
  
    GroundGroup=createGroup();
    level2Group=createGroup();

     player1=createSprite(50,50,50,50)
     player1.addImage(player1IMG)
     player1.scale=0.3;
     //player1.visible=false;

     rules1=createSprite(900,600,20,20)
     rules1.addImage(rules1IMG)
     rules1.scale=0.7;
     track=createSprite(500,470,20,20)
     track.scale=3.9;
     
   box=createSprite(540,450,20,20)
   box.addImage(boxIMG)
   box.scale=0.4;

   reset=createSprite(700,500,20,20)
   reset.addImage(resetIMG)
   reset.scale=0.5;
   reset.visible=false;

   pacman=createSprite(display9Width/2,displayHeight/2+200,20,20)

   question1=createSprite(880,100,10,10)
   question1.addImage(question1IMG)
   question1.scale=0.5;

   option11=createSprite(780,200,10,10)
   option11.addImage(option11IMG);
   option12=createSprite(980,200,10,10)
   option12.addImage(option12IMG);
   option11.scale=0.3;
   option12.scale=0.3;
option12.visible=false;
option11.visible=false;
question1.visible=false;

    engine = Engine.create();
    world = engine.world;

    g1=SpriteCreation(70,70,200,20)
    g2=SpriteCreation(250,170,300,20)
    g3=SpriteCreation(450,305,20,380)
    g4=SpriteCreation(150,270,300,20)
    g5=SpriteCreation(240,360,260,20)
    g6=SpriteCreation(100,470,230,20)
    g7=SpriteCreation(360,430,20,130)
    g8=SpriteCreation(200,590,20,60)
    g9=SpriteCreation(600,500,500,20)
    g10=SpriteCreation(535,110,190,20)
    g11=SpriteCreation(640,225,20,250)
    g12=SpriteCreation(840,340,400,20)
    

    GroundGroup.add(player1)
   GroundGroup.add(box)

   // GroundGroup.add(g1)
   // GroundGroup.add(g2)
  // // GroundGroup.add(g3)
   /// GroundGroup.add(g4)
  /// GroundGroup.add(g5)
  //  GroundGroup.add(g6)
  //  GroundGroup.add(g7)
   // GroundGroup.add(g8)
  //  GroundGroup.add(g9)
  //  GroundGroup.add(g10)
  //  GroundGroup.add(g11)
  //  GroundGroup.add(g12)
    GroundGroup.setVisibleEach(false)

    level2Group.add(pacman)

    level2Group.setVisibleEach(false)
   


}
function draw(){
    background(bgIMG)

    
edges=createEdgeSprites();
player1.bounceOff(edges);
player1.bounceOff(g1)
player1.bounceOff(g2)
player1.bounceOff(g3)
player1.bounceOff(g4)
player1.bounceOff(g5)
player1.bounceOff(g6)
player1.bounceOff(g7)
player1.bounceOff(g8)
player1.bounceOff(g9)
player1.bounceOff(g10)
player1.bounceOff(g11)
player1.bounceOff(g12)
    

   if(keyDown(UP_ARROW)) {
    player1.velocityX = 0;
    player1.velocityY = -4;
  }
  
  if(keyDown(DOWN_ARROW)) {
    player1.velocityX = 0;
    player1.velocityY = 4;
  }
  
  if(keyDown(RIGHT_ARROW)) {
    player1.addImage(player1IMG)
    player1.velocityX = 4;
    player1.velocityY = 0;
  }
  
  if(keyDown(LEFT_ARROW)) {
    player1.addImage(player2IMG)
    player1.velocityX = -4;
    player1.velocityY = 0;
  }
//  player1.velocityY=+1;
   player1.collide(g2)
   player1.collide(g1)
   player1.collide(g3)

     if (player1.isTouching(box)){
       player1.velocityX=0
       player1.velocityY=0
       option12.visible=true;
       option11.visible=true;
       question1.visible=true;
     }
     if (mousePressedOver(option11)){
       bgIMG=rules2IMG
       GroundGroup.setVisibleEach(false)
option12.visible=false
option11.visible=false
question1.visible=false
level2Group.setVisibleEach(true)
     }
     if (mousePressedOver(reset)){
       bgIMG=bgIMG
       option12.visible=false
option11.visible=false
question1.visible=false
     }
     if (mousePressedOver(option12)){
      bgIMG=bgreset
      GroundGroup.setVisibleEach(false)
option12.visible=false
option11.visible=false
question1.visible=false
   reset.visible=true;
    }
    if(keyDown(r)){
      bgIMG=bg2IMG
      level2Group.setVisibleEach(true)
    }
//track.display();

    drawSprites();
    textSize(55)
    if (mousePressedOver(option11)){
      bgIMG=rules2IMG
      GroundGroup.setVisibleEach(false)
option12.visible=false
option11.visible=false
question1.visible=false
text("Press r to Start",400,200)
    }
    if (mousePressedOver(rules1)){
      bgIMG=rules11
      rules1.visible=false;
      stroke("black")
      gameState="start"
      
    }
    if (gameState === "start"){
      textSize(55)
      text("Press Space To Start",400,200)
      if (keyDown ("space")){
        gameState='play'
        bgIMG=bg1IMG
        GroundGroup.setVisibleEach(true)
      }
    }
    
}   

function SpriteCreation(x,y,width,height){
    var obj=createSprite(x,y,width,height)
  //  obj.shapeColor="brown"
    player1.collide(obj);
    obj.visible=false;
    return obj;
    
}
