class Mover { 
    constructor () {
        this.vel = createVector(random(-2,2),random(-2,2))
        this.loc = createVector(random(width),random(height))
    }

    update () {
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