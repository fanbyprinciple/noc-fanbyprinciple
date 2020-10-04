class Globule {
    constructor(x,y) {
        this.loc = createVector(width/2,height/2)
        this.acc = createVector(0,0)
        this.vel = createVector(0,0)
        this.lifespan = 255

    }

    display() {
        // fill (this.lifespan)
        // ellipse(this.loc.x,this.loc.y,100,100)

        push ()
        fill (120,45,45)
        console.log(this.loc.x,this.loc.y)
        ellipse(this.loc.x,this.loc.y,20,20)
        pop ()
    }

    update () {
        this.vel.add(this.acc)
        this.loc.add(this.vel)
        this.acc.mult(0)
    }
      
    applyForce(force){
        console.log(force)
        this.acc.add(force)
    }

    run() {
        this.update()
        this.display()
        console.log(this.lifespan)
        this.lifespan -= 1
    }

    isDead() {
        if(this.lifespan){
            return false
        } else {
            return true
        }
    }
}