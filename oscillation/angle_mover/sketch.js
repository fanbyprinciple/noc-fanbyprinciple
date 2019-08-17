 class Mover {
     constructor(mass,x,y){
        this.loc = createVector(width/2,height/2)
        this.vel = createVector(0,0)
        this.acc = createVector(0.00,0.00)

        this.mass = mass
        
        this.angle = 0
        this.aVelocity = 0
        this.aAcceleration = 0.01

     }

     update() {
        this.vel.add(this.acc)
        this.loc.add(this.vel)

        //this.aAcceleration = this.acc.x/100

        this.aVelocity += this.aAcceleration
        this.angle += this.aVelocity
     }

     display() {
        stroke(0)
        fill(175,200)
        rectMode(CENTER)
        push()
        //console.log(this.loc.x,this.loc.y)
        translate(width/2,height/2)
        rotate(this.angle)
        //console.log(this.loc.x + this.mass*8)
        rect(this.loc.x-width/2,this.loc.y-height/2, this.mass * 16, this.mass * 16)
        pop()
     }
 }

 let mover
 function setup(){
     
     createCanvas(300,300)
     mover = new Mover(4)
 }
 function draw() {
    background(51)
     mover.display()
     mover.update()
 }