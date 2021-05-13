//create 2 more buldings 
//chnage the x position




const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies
const Constraint=Matter.Constraint

var box; 
var ball;
var engine ,world ; 
var box2 , box3, box4 , box5 ;
var b1 ,b2, b3 , b4, b5 ,b6 , b7;
var a1 ,a2,a3,a4,a5;






function setup(){
    createCanvas(1500,800);
    engine=Engine.create()
    world=engine.world
    box = new Box(400,50,80,80)
   ground = new Ground(700,700,1500,50)
   ball =new Ball(100,200,50,50)
   rope = new Rope(ball.body,{x:200, y:100})
   box2 = new Box(400,40,80,80)
   box3 = new Box(400,30,80,80)
   box4 = new Box(400,20,80,80)
   box5 = new Box(400,10,80,80)
   box6 = new Box(400,5,80,80)
   
   //2
   b1 = new Box(600,50,80,80)
   b2 = new Box(600,50,80,80)
   b3 = new Box(600,50,80,80)
   b4 = new Box(600,50,80,80)
   b5 = new Box(600,50,80,80)
   b6 = new Box(600,50,80,80)
   b7 = new Box(600,50,80,80)

   //3
   a1 = new Box(800,50,80,80)
   a2 = new Box(800,50,80,80)
   a3 = new Box(800,50,80,80)
   a4 = new Box(800,50,80,80)
   a5 = new Box(800,50,80,80)
}





function draw(){

background("lightblue")
Engine.update(engine)

box.display();
ground.display()
ball.display();
rope.display();
box2.display();
box3.display();
box4.display();
box5.display();
box6.display();
b1.display();
b2.display();
b3.display();
b4.display();
b5.display();
b6.display();
b7.display();
a1.display();
a2.display();
a3.display();
a4.display();
a5.display();

}

function mouseDragged() {
    Matter.Body.setPosition(ball.body,{x:mouseX, y:mouseY})
}