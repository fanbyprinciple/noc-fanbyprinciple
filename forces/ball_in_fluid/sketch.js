var mover = []
var liquid

class Liquid {
    constructor(x_,y_,w_,h_,c_,color) {
        this.x = x_
        this.y = y_
        this.h = h_
        this.w = w_
        this.c = c_
        this.color = color
    }

    display() {
        noStroke()
        fill (this.color)
        rect (this.x,this.y,this.w,this.h)
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
        stroke(0)
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

    isInside(liquid) {
        //return false
        if (this.loc.x > liquid.x && this.loc.x < liquid.x+ liquid.w && this.loc.y > liquid.y && this.loc.y < liquid.y + liquid.h ){

            return true
        } else {
            return false
        } 
    }

    drag(liquid) {
        console.log("drag")
        let speed = this.vel.mag()
        let dragMagnitude = liquid.c * speed * speed

        let drag = this.vel.copy()
        drag.mult(-1)
        drag.normalize()
        drag.mult(dragMagnitude)
        this.applyForce(drag)
    }

}

function setup() {
    createCanvas(400,400)
    liquid = new Liquid(0,height/2,width,height/8,0.01,130)
    liquid2 = new Liquid(0,height/1.55, width, height/2,0.02,110)

    for(let i = 0 ; i <10 ; ++i){
        mover[i] = new Mover(random(0.1,5), 0,random (0,height/2))
    }
    
}

function draw() {
    background(51)

    let wind = createVector(0.01,0)
    //let gravity = createVector(0,0.1)

    liquid.display()
    liquid2.display()

    for (let i =0; i < 10; ++i){
        mover[i].update()
        mover[i].display()

        if(mover[i].isInside(liquid)) {
            mover[i].drag(liquid)
        }

        if(mover[i].isInside(liquid2)) {
            mover[i].drag(liquid2)
        }

        let m = 0.1 * mover[i].mass

        let gravity = createVector(0,m)

        mover[i].applyForce(gravity)
        mover[i].applyForce(wind)

    
        mover[i].checkEdges()
    }


}
