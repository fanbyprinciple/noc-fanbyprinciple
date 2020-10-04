class Ship{
    constructor(x,y){
        this.pos = createVector(x,y)
        this.vel = createVector(0,-2)
        this.acc = createVector()
        this.r =6
        this.maxspeed = 4
        this.maxforce =0.1
    }

    seek(target){
        let desired = p5.Vector.sub(target,this.pos)

        desired.normalize()
        desired.mult(this.maxspeed)

        let steer = p5.Vector.sub(desired,this.vel)
        steer.limit(this.maxforce)

        this.applyForce(steer)

    }

    flee(target){
        let desired = p5.Vector.sub(target,this.pos)
        
        desired.normalize()
        desired.mult(this.maxspeed)

        let steer = p5.Vector.sub(desired, target)
        steer.limit(this.maxforce)
        steer.mult(-1)

        this.applyForce(steer)
    
    }

    applyForce(force){
        this.acc.add(force)
    }

    update(){
        this.vel.add(this.acc)
        this.vel.limit(this.maxspeed)
        this.pos.add(this.vel)
        this.acc.mult(0)
    }

    display(){
        // My roomba
        // fill(51)
        // ellipse(this.pos.x, this.pos.y, this.r,this.r)
        
        let theta = this.vel.heading() + PI/2
        fill(175)
        stroke(0)
        push()
        translate(this.pos.x, this.pos.y)
        rotate (theta)
        beginShape()
        vertex(0, -this.r*2)
        vertex(-this.r, this.r*2)
        vertex(this.r, this.r*2)
        endShape()
        pop ()
    }
}



var v
function setup(){
    createCanvas(600,600)
    v = new Ship(width/2, height/2)
}

function draw(){
    background(255)

    let mouse = createVector(mouseX, mouseY)

    fill (200)
    stroke (0)
    strokeWeight(2)
    ellipse(mouse.x, mouse.y, 48, 48)

    v.seek(mouse)
    v.update()
    v.display()
}