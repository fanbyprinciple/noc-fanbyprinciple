var value= 0

class Mover {

    constructor(mass) {
        this.loc = createVector(width/2,height/2)
        this.vel = createVector(0,0)
        this.acc = createVector(0,0)
        this.mass = mass
    }

    applyForce( force ) {
        this.acc.add(force) 
    }

    update() {
        this.vel.add(this.acc)
        this.loc.add(this.vel)
        this.acc.mult(0)
    }

    display() {
        stroke (255)
        fill (0)
        ellipse(this.loc.x,this.loc.y, this.mass, this.mass)
    }

    checkEdges() {
        if (this.loc.y < 0){
            let backForce = createVector(0,0.3)
            this.applyForce(backForce)
        } 
    }

}

function mousePressed() {
    if (value === 0) {
        value = 255;
      } else {
        value = 0;
      }

    wind = createVector(0,-0.5)
    mover.applyForce(wind)
    console.log("mousePressedcalled")
}

function setup() {
    createCanvas(400,400)
    mover = new Mover(16)
}

function draw() {

    background(value) 
    mover.display()
    mover.update()
    mover.checkEdges()
    
}