function limiting (vel,maximum) {
    if (vel> maximum) {
        vel = max
    }
}

class Mover { 
    constructor () {
        this.vel = createVector(0,0)
    
        this.loc = createVector(width/2,height/2)
        this.acc = createVector(-0.001,0.01)

        this.topspeed =10
        
    }

    update () {

        this.acc = p5.Vector.random2D ()

        this.vel.add(this.acc)
        this.vel.limit(this.topspeed)
        this.loc.add(this.vel)
    }

    display() {
        stroke (0)
        fill (175)
        ellipse(this.loc.x,this.loc.y,32,32)
    }

    checkEdges() {
        if (this.loc.x > width) {
            this.loc.x = 0
        } else if (this.loc.x < 0) {
            this.loc.x = width
        }

        if (this.loc.y > height) {
            this.loc.y = 0
        } else if (this.loc.y < 0) {
            this.loc.y = height
        }
    }
}

function setup () {
    createCanvas (600,600)
    mover = new Mover()
    
}

function draw () {
    mover.update()
    mover.checkEdges()
    mover.display()
}