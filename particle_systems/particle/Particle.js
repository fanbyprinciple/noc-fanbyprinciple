class Particle {

    constructor(l) {
        this.loc = l
        this.acc = createVector(0,0)
        this.vel = createVector(0,0)
        this.lifespan = 255
        this.rotate = true
        this.angle = 0
        this.angVel = 0.1
    }

    update() {
        this.vel.add(this.acc)
        this.loc.add(this.vel)
        this.lifespan -=2
        //this.acc =0
    }

    display() {
        if(this.rotate){
            push ()
            translate(this.loc.x,this.loc.y)
            this.angle += this.angVel
            rotate (this.angle)
            stroke(0)
            fill(this.lifespan)
            ellipse(this.loc.x, this.loc.y,12,0)
            ellipse(this.loc.x,this.loc.y,8,8)
            pop ()
        } else {
            stroke (0)
            fill (175)
            ellipse (this.loc.x,this.loc.y,8,0)
            ellipse (this.loc.x+7,this.loc.y,8,8)
        }
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

    applyForce(f){
        this.acc.add(f)
    }

    
}