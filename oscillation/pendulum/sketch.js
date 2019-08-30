class Pendulum {
    constructor(origin,r,ang) {
        this.r  = r
        this.ang = ang
        this.angvel = 0
        this.origin = origin
        this.damping = 0.995
        this.location = this.origin
        
    }

    update() {
        let gravity = 0.4
        this.angAcc = (-1 * gravity * sin ( this.ang)) / this.r
        this.angVel += this.angAcc
        this.ang += this.angVel
        this.angVel *= this.damping
        
    }

    display() {
        this.location.set(this.r*sin(this.ang),this.r*cos(this.ang))
        this.location.add(origin)
        stroke(0)
        fill (175)
        line ( this.origin.x, this.origin.y, this.location.x, this.location.y)
        ellipse (this.location.x,this.location.y,16,16)
    }

    go() {
        this.update()
        this.display()
    }
}



var p

function setup() {
    createCanvas(200,200)
    p = new Pendulum(createVector((width/2,10)),125,0)
         
}

function draw() {
    background(255)
    p.go()
}

