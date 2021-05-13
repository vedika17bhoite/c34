class Rope  {
    constructor ( bodyA, pointB) {
        var options = {
    bodyA:bodyA,
    pointB:pointB,
    stiffness:1,
    length:240
        }
   this.rope= Constraint.create(options)
   

    this.pointB = pointB
    
    World.add(world,this.rope)
    }
 display()
 {
     var pos=this.rope.bodyA.position
     var pos1=this.pointB
     push ()
    
     rotate (pos1)
     fill ("green")
     strokeWeight(4)
     stroke ("black")
     rectMode(CENTER)
     line (pos.x,pos.y,pos1.x,pos1.y)

     pop()
 }
    
}