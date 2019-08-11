var mover = []
var liquid

class Liquid {
    constructor(x_,y_,h_,c_) {
        this.x = x_
        this.y = y_
        this.h = h_
        this.c = c_
    }

    display() {
        noStroke()
        fill (130)
        rect (this.x,this.y,this.h,this.c)
    }

}

class Mover {
    constructor(m,x,y) {
        this.loc = createVector(x,y)
        this.vel = createVector(0,0)
        this.acc = createVector(0,0)
        this.mass = m
    }

    applyForce(force) {
        let f = p5.Vector.div(force,this.mass)
        this.acc.add(f)
    }

    update() {
        this.vel.add(this.acc)
        this.loc.add(this.vel)
        this.acc.mult(0)
    }

    display() {
        noStroke()
        fill (175)
        ellipse ( this.loc.x, this.loc.y, this.mass*16, this.mass*16)

    }

    checkEdges () {
        if (this.loc.x > width) {
            this.loc.x = width
            this.vel.x *=-1
        } else if (this.loc.x < 0) {
            this.loc.x =0
            this.vel.x *=-1
        }

        if (this.loc.y > height) {
            this.loc.y = height
            this.vel.y *=-1
        } else if (this.loc.y < 0){
            this.loc.y =0
            this.vel.y *=-1
        }
    }

}

function setup() {
    createCanvas(400,400)
    liquid = new Liquid(0,height/2,width,height/2,0.01)

    for(let i = 0 ; i <10 ; ++i){
        mover[i] = new Mover(random(0.1,5), 0,0)
    }
    
}

function draw() {
    background(51)

    let wind = createVector(0.01,0)
    let gravity = createVector(0,0.1)

    liquid.display()

    for (let i =0; i < 10; ++i){
        mover[i].update()
        mover[i].display()

        mover[i].applyForce(gravity)
        mover[i].applyForce(wind)

    
        mover[i].checkEdges()
    }


}
