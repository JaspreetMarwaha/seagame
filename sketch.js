var seaBackground;
var mario;
var platformGroup, obstacleGroup;
var marioAnimation, obstacleAnimation, wallAnimation, groundAnimation,o2Animation;
var o3Animation,o3Animation,o4Animation,o5Animation,o6Animation;
var flag;
var LOSE=0;
var eel, lionfish,clownfish;
var PLAY=1;
var WIN=2;
var gameState=PLAY;
function preload()
{
  marioAnimation=loadAnimation("images/diver.png");
  obstacleAnimation=loadAnimation("images/crab2.png");
  o2Animation=loadAnimation("images/eel.png");
  o3Animation=loadAnimation("images/lionfish.png");
  o4Animation=loadAnimation("images/clownfish.png");
  o5Animation=loadAnimation("images/piranha.png")
  o6Animation=loadAnimation("images/conch.png")
seaBackground=loadImage("images/seaBackground.jpg")
}

function setup() {
  //Creating canvas equal to width and height of display
  createCanvas(displayWidth,668);
  var countDistanceX = 0;
  var platform;
  var gap;
  
  //creating a player mario
  mario = new Player();
  
  //creating a group
  platformGroup= createGroup();
  obstacleGroup=createGroup();
  //adding platforms to stand for mario
  for (var i=0;i<26;i++)
	 {
     frameRate(30);
      platform = new Platform(countDistanceX);
      platformGroup.add(platform.spt);//Adding each new platform to platformGroup
      
      countDistanceX = countDistanceX + platform.spt.width ; //counting x location of next platform to be build
      //adding wall to the game
      
      //adding obstacles to the game
      if(i%4==0)
      {
      obstacle=new Obstacle(countDistanceX);
      obstacleGroup.add(obstacle.spt);
      }
      if(i%50==0)
      {
      eel=new o2(countDistanceX);
      obstacleGroup.add(obstacle.spt);
      }
      if(i%150==0)
      {
      obstacle=new o3(countDistanceX);
      obstacleGroup.add(obstacle.spt);
      }
      if(i%250==0)
      {
      obstacle=new o4(countDistanceX);
      obstacleGroup.add(obstacle.spt);
      }
      if(i%350==0)
      {
      obstacle=new o5(countDistanceX);
      obstacleGroup.add(obstacle.spt);
      }
      if(i%400==0)
      {
      obstacle=new o6(countDistanceX);
      obstacleGroup.add(obstacle.spt);
      }
      
  }
  
}

function draw() {
  background(seaBackground);
  //code to move the camera
  translate(  -mario.spt.x + width/2 , 0);
  if(gameState==PLAY)//Play state
  {  
       //changing the game states
       if(obstacleGroup.isTouching(mario.spt) || mario.spt.y>height)
       {  
         gameState=LOSE;
       } 
    
       
       //apply gravity to mario and set colliding with platforms
        mario.applyGravity();
        mario.spt.collide(platformGroup);
     

        //Calling various function to controll mario
        if (keyDown("left"))  
        { 
          mario.moveLeft();
        }
        if (keyDown("right")) 
        { 
          mario.moveRight();
        }
        if (keyDown("up") && mario.spt.velocityY===0) 
        {
          mario.jump();
        }


   }

  if(gameState==LOSE)//END State
  {  
    stroke("white");
    fill("white");
    textSize(40);
    text("GAME OVER",mario.spt.x,300);
    obstacleGroup.destroyEach();
    mario.spt.setVelocity(0,0);
    mario.spt.pause();
    
  }

  if(gameState==WIN)//WIN state
  {  
    stroke("green");
    fill("green");
    textSize(40);
    text("Winner",mario.spt.x,300);
    obstacleGroup.destroyEach();
    mario.spt.setVelocity(0,0);
    mario.spt.pause();
  }
  

   drawSprites();
}



