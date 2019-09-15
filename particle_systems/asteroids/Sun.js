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
        console.log("Keythrust")
        this.applyForce(createVector(0,-1 ))
    }  

    run() {
        this.display()
        this.update()
    }
}


