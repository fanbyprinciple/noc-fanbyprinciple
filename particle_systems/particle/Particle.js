class Particle {

    constructor(l) {
        this.loc = l
        this.acc = createVector()
        this.vel = createVector()
        this.lifespan = 255
    }

    update() {
        this.vel.add(this.acc)
        this.loc.add(this.vel)
        this.lifespan -=2
    }

    display() {
        stroke (0)
        fill (175)
        ellipse (this.loc.x,this.loc.y,25,25)
    }

    isDead () {
        if(this.lifespan <0.0){
            return true
        } else {
            return false
        }
    }

    run() {
        this.update()
        this.display()
    }
}