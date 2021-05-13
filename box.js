class Box {
    constructor ( x,y,width,height) {
        var options = {
     restitution: 0.8,
     friction:0.4,
     density:1
        }
    this.body = Bodies.rectangle(x,y,width,height,options)
    this.width= width
    this.height=height
    World.add(world,this.body)
    }
 display()
 {
     var pos=this.body.position
     var pos1=this.body.angle
     push ()
     translate(pos.x,pos.y)
     rotate (pos1)
     fill ("red")
     strokeWeight(4)
     stroke ("black")
     rectMode(CENTER)
     rect(0,0,this.width,this.height)
     pop()
 }
    
}

