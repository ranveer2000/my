class Pinks{
constructor(x,y){
var options ={
    isStatic:true
}
this.w = 30;
this.h = 30;
this.body = Bodies.rectangle(x,y,this.w,this.h,options)
World.add(world,this.body);
this.x = x;
this.y = y;
 }
 show(){
push();
rectMode(CENTER);
fill(233, 40, 90);
stroke(168, 29, 65);
strokeWeight(6);
rect(this.x,this.y,this.w+40,this.h+40);
pop();
 }
}