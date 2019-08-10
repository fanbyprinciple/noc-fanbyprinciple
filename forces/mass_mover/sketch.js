class Mover {
    constructor(mass,x,y) {
        this.mass = mass
        this.loc = createVector(x,y)
        this.vel = createVector(0,0)
        this.acc = createVector(0,0)

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
        fill(175)
        ellipse(this.loc.x,this.loc.y,this.mass*16,this.mass*16)
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
        } else if (this.loc.y < 0) {
            this.vel.y *= 1
            this.vel.y = 0
        }
    }

    pushEdges() {
        let pushBack 
        if(this.loc.x > width){
            pushBack = createVector(-50,0)
            this.loc.x = width
            this.applyForce(pushBack)
            
            console.log("pushback -x")
        } else if (this.loc.x < 0) {
            pushBack = createVector(50,0)
            this.loc.x = 0
            this.applyForce(pushBack)
            
            console.log("pushback x")
        }

        if(this.loc.y > height) {
            pushBack = createVector(0,-50)
            this.loc.y = height
            this.applyForce(pushBack)
            
            console.log("pushback y")
        } else if (this.loc.y < 0){
            pushBack = createVector(0,50)
            this.loc.y = 0
            this.applyForce(pushBack)
            
            console.log("pushback -y")
        }
    }

}

var mover = []

function setup() {
    createCanvas(400,400)
    for(let i =0; i <1; ++i){
        mover[i] = new Mover(random(0.1,5),10,10)
    }


}
function draw() {
    background(0)

    let wind = createVector(0.01,0)
    let gravity = createVector(0,0.1)
    for(let i = 0 ; i< 1 ; ++i){
        mover[i].pushEdges()
        mover[i].update()
        mover[i].display()
        mover[i].applyForce(gravity)
        mover[i].applyForce(wind)
        //mover[i].checkEdges()
        

    }
}