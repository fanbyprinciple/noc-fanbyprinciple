 class Mover {
     constructor(mass,x,y){
        this.loc = createVector(x,y)
        this.vel = createVector(0,0)
        this.acc = createVector(0,0)

        this.mass = mass
        
        this.angle = 0
        this.aVelocity = 0
        this.aAcceleration = 0.01

     }

     update() {
        this.vel.add(this.acc)
        this.loc.add(this.vel)

        this.aVelocity += this.aAcceleration
        this.angle += this.aVelocity
     }

     display() {
        stroke(0)
        fill(175,200)
        rectMode(CENTER)
        push()
        translate(this.loc.x,this.loc.y)
        rotate(this.angle)
        rect(this.loc.x,this.loc.y, this.mass * 16, this.mass * 16)
        pop()
     }
 }

 let mover
 function setup(){
     createCanvas(300,300)
     mover = new Mover(2,width/2,height/2)
 }
 function draw() {
     mover.display()
     mover.update()
 }