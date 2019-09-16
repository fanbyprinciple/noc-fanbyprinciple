class Sun {
    constructor(x,y, size) {
        this.loc = createVector(x,y)
        this.acc = createVector(0,0)
        this.vel = createVector(0,0)
        this.size = size
    }

    display() {
        push ()
        fill (120,45,45)
        ellipse(this.loc.x,this.loc.y,this.size,this.size)
        pop ()
    }

    update() {
        this.vel.add(this.acc)
        this.loc.add(this.vel)
        this.acc.mult(0)
    }

    applyForce(force){
        this.acc.add(force)
    }

    applyThrust() {
        this.applyForce(createVector(0,-1 ))
    }  

    checkEdges() {
        if (this.loc.x > width ) {
            this.loc.x =0
        } else if (this.loc.x < 0) {
            this.loc.x =width
        }

        if (this.loc.y > height) {
            this.loc.y =0
        } else if (this.loc.y< 0) {
            this.loc.y = height
        }
    }

    run() {
        this.display()
        this.checkEdges()
        this.update()
        
    }
}


