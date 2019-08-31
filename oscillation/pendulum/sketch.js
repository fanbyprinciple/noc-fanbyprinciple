class Pendulum {
    constructor(origin,r,ang) {
        this.r  = r
        this.ang = PI/4
        this.angVel = 0
        this.origin = origin.copy()

        this.damping = 0.995
        this.loc = createVector()
        this.angAcc = 0
        this.ballr = 48
        this.angVel = 0

    }

    update() {
        let gravity = 0.4
        //console.log("angAssng: ",sin(this.ang)* gravity/4 *-1)
        //this.angAcc = -1 * (gravity/this.r) * sin ( this.ang)
        this.angAcc = sin(this.ang)* gravity/4 *-1
        console.log(this.angAcc)

        this.angVel += this.angAcc
        
        this.angVel *= this.damping
        this.ang += this.angVel
        console.log(this.ang)

        

    

        
        
    }

    display() {
        this.loc.set(this.r*sin(this.ang),this.r*cos(this.ang),PI/4)
        this.loc.add(this.origin)
        stroke(0)
        strokeWeight(2)
        fill (175)
        //console.log(this.origin.x,',',this.origin.y,',',this.loc.x,',',this.loc.y)
        line ( this.origin.x, this.origin.y, this.loc.x, this.loc.y)
        ellipseMode(CENTER)
        fill(127)
        ellipse (this.loc.x,this.loc.y,16,16)
    }

    go() {
        this.update()
        this.display()
    }
}



var p

function setup() {
    createCanvas(200,200)
    p = new Pendulum(createVector((width/2,height/2)),125,0)
         
}

function draw() {
    background(255)
    p.go()
}

