
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball,ground;
var color = 0;
var roomN;
var pink1,yellow1,blue1;
var done =0;

function setup() {
  createCanvas(windowWidth,windowHeight);

  engine = Engine.create();
  world = engine.world;

  var options={
    isStatic:true
  }
  var options1={
    restitution:0.95,
    frictionAir:0.01
  } 

ground = Bodies.rectangle(width/2,height-30,width+100,110,options)
World.add(world,ground);
  
ball = Bodies.circle(100,height-150,50,options1)
World.add(world,ball);

color = 0;
roomN = 1;
done =0;
}


function draw() 
{
  background(51);
if(keyIsDown(LEFT_ARROW)){
  Matter.Body.setVelocity(ball,{x:-5,y:ball.velocity.y});
}
if(keyIsDown(RIGHT_ARROW)){
  Matter.Body.setVelocity(ball,{x:5,y:ball.velocity.y});
} 
if(keyIsDown(UP_ARROW) && ball.position.y>485){
  Matter.Body.setVelocity(ball,{x:ball.velocity.x,y:-8});
}
if(ball.position.x>width+30){
  Matter.Body.setPosition(ball,{x:-30,y:ball.position.y});
  roomN +=1;
}
if(ball.position.x<-30){
  Matter.Body.setPosition(ball,{x:width+30,y:ball.position.y});
  roomN -=1;
}
if(roomN!=2){
  if(pink1!=undefined || pink1!=null){
    Matter.Body.setPosition(pink1.body,{x:-100,y:-100});
  }
}
if(roomN===1){
  fill("white");
  textSize(30)
  text("Use arrow keys to move and jump.",width/3,height/2);
}
if(roomN===2){
  fill("white");
  textSize(30)
  text("You can change colors by hitting the color block.",width/4,height/2-50);
  if(pink1==undefined || pink1==null){
    pink1 = new Pinks(200,350);
  }
  if(yellow1==undefined || yellow1==null){
    yellow1 = new Yellows(width-200,350);
  }
  if(blue1==undefined || blue1==null){
    blue1 = new Blue(width/2,350);
  }
}
if (pink1!=undefined || pink1!=null ){
  var collision = Matter.SAT.collides(ball.body,pink1.body);
if(collision.collided){
  color = 1;
}
}
//var collide2= Matter.SAT.collides(yellow1.body,ball.body);
//if(collide2.collided){
//  color = 2;
//}
//var collide3= Matter.SAT.collides(blue1.body,ball.body);
//if(collide3.collided){
//  color = 3;
//}
  push();
  fill("white");
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y-25,width,110);
  noStroke();
  if(pink1!=undefined || pink1 != null){
    pink1.show();
  }
  if(yellow1!=undefined || yellow1 != null){
    yellow1.show();
  }
  if(blue1!=undefined || blue1 != null){
    blue1.show();
  }
  pop();
  if(color===0){
    fill("white");
    ellipse(ball.position.x,ball.position.y,50)
    noStroke();
    }
    if(color===1){
      fill(233, 40, 90);
      ellipse(ball.position.x,ball.position.y,50)
      noStroke();
      }
      if(color===2){
        fill(252, 186, 3);
        ellipse(ball.position.x,ball.position.y,50)
        noStroke();
        }
        if(color===3){
          fill(0, 111, 203);
          ellipse(ball.position.x,ball.position.y,50)
          noStroke();
          }
  Engine.update(engine);
  
}

