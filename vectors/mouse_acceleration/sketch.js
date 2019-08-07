var mover = []
var mousee
var dir

class Mover {
    constructor(i) {
        this.loc = createVector(random(width),random(height))
        this.vel = createVector(0,0)
        this.acc = createVector(0,0)
        this.topspeed =10
    }

    update () {

        mousee = createVector(mouseX, mouseY)
        dir = p5.Vector.sub(mousee, this.loc) 
        dir.normalize()
        dir.mult(0.5)
        this.acc = dir 

        console.log(dir)
        this.vel.add(this.acc)
        this.vel.limit(this.topspeed)
        this.loc.add(this.vel)
    }

    display() {
        stroke (0)
        fill (220)
        ellipse(this.loc.x,this.loc.y,16,16)
    }

    checkEdges() {
        if( this.loc.x > width) {
            this.loc.x = 0
        } else if (this.loc.x < 0) {
            this.loc.x = width
        }

        if(this.loc.y > height) {
            this.loc.y = 0
        } else if (this.loc.y < 0) {
            this.loc.y = height
        }

    }
}

function setup() {
    createCanvas(400,400)
    for(let i = 0; i < 20; ++i){
        mover[i] = new Mover()

    }
    
}

function draw() {
    background(255)
    for(let i=0; i <20; i++){
        mover[i].display()
        mover[i].update()
        mover[i].checkEdges()
    }
    

    

}