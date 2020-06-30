//var fixedRect, movingRect; 
var car,wall; 
var speed,weight; 

function setup() {
  createCanvas(1600,400); 
  speed = random(55,90); 
  weight = (400,1500); 
  car = createSprite(50,200,50,50); 
  wall = createSprite(1500,200,60,height/2); 
  wall.shapeColor = color(80,80,80); 
  car.velocityX=speed;





  /*fixedRect = createSprite(400, 200, 50, 50); 
  movingRect = createSprite(200,200,50,50); 
  fixedRect.shapeColor = "green"; 
  movingRect.shapeColor = "green"; 
  fixedRect.velocityX = -5; 
  movingRect.velocityX = 5; 
  fixedRect.debug = true; 
  movingRect.debug = true;
  */ 
}

function draw() {
  background(0,0,0);    
  if (wall.x - car.x < wall.width/2 +car.width/2){
      car.velocityX = 0; 
      var deformation = 0.5 * weight * speed * speed/22509;  
      
      console.log(deformation);
      
      if (deformation>180){ 
        car.shapeColor = color(255,0,0);
    } 
      if (deformation>100 &&deformation<180){  
        car.shapeColor = color(230,230,0);
    }  
      if (deformation<= 100){ 
        car.shapeColor = color(0,255,0)
    } 

  }

  /*movingRect.y = mouseY;
  movingRect.x = mouseX;  
  console.log(movingRect.x-fixedRect.x) 

  if(fixedRect.x - movingRect.x <= fixedRect.width/2 +movingRect.width/2
    && movingRect.x - fixedRect.x <= fixedRect.width/2+ movingRect.width/2
    && fixedRect.y - movingRect.y <= fixedRect.height/2 +movingRect.height/2 
    && movingRect.y - fixedRect.y <= fixedRect.height/2 + movingRect.height//){ 
      fixedRect.shapeColor = "red"; 
      movingRect.shapeColor = "red"; 
    } else { 
      fixedRect.shapeColor = "green"; 
      movingRect.shapeColor = "green";
    } 

    if (fixedRect.x - movingRect.x <= fixedRect.width/2 +movingRect.width/2 
      && movingRect.x - fixedRect.x <= fixedRect.width/2 + movingRect.width/2){
        fixedRect.velocityX=fixedRect.velocityX*(-1); 
        movingRect.velocityX = movingRect.velocityX*(-1);
      }

    if( fixedRect.y - movingRect.y <= fixedRect.height/2 +movingRect.height/2 
      && movingRect.y - fixedRect.y <= fixedRect.height/2 + movingRect.height/2){
        fixedRect.velocityY=fixedRect.velocityY*(-1); 
        movingRect.velocityY = movingRect.velocityY*(-1);
      }*/


  drawSprites();
}