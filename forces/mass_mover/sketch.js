class Mover {
    constructor(mass,x,y) {
        this.mass = mass
        this.loc = createVector(x,y)
        this.vel = createVector(0,0)
        this.acc = createVector(0,0)

    }

    applyForce(force) {
        f = p5.Vector.div(force,this.mass)
        this.acc.add(f)
    }

    update() {
        this.vel.add(this.acc)
        this.loc.add(this.vel)
        this.acc.mult(0)

    }

    display() {
        stroke(0)
        fill(175)
        ellipse(loc.x,loc.y,mass*16,mass*16)
    }

    checkEdges() {
        if(this.loc.x > width) {
            this.loc.x = width
            this.vel.x *= -1
        } else if (this.loc.x < 0) {
            this.vel.x *= -1
            this.x = 0
        }

        if(this.loc.y > height) {
            this.vel.y *= -1
            this.loc.y = height
        }
    }

}

function setup() {
    createCanvas(400,400)
    let mover = [100]
    for(let i =0; i <100; ++i){
        mover[i] = new Mover(random(0.1,5),0,0)
    }


}
function draw() {
    
}