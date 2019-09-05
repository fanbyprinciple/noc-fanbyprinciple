class Box {
    constructor(x,y,size,angle) {
        this.loc = createVector(x,y)
        this.size = size
        this.vel =  createVector(0,0)
        this.angle = angle

    }

    display() {
        push()
        rotate (this.angle)
        fill(255)
        rect(this.loc.x,this.loc.y,this.size,this.size)
        pop()
    }

    move() {
        let gravity = createVector(0,-1 * sin (this.angle))
        this.vel.add(gravity)
        this.loc.add(this.vel)
        this.vel.mult(0)


    }
}



var boxy
function setup() {

    createCanvas(400,400)
    boxy = new Box(width/2,height/2,40,PI/4)
}

function draw() {
    background(0)
    boxy.display()
    boxy.move()
    //line (0,height,width,0)
}