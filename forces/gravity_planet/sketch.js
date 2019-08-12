class Planet {
    constructor(mass,x,y) {
        this.mass = mass
        this.loc = createVector(x,y)
    }

    display() {
        stroke (0)
        fill (175,200)
        ellipse(this.loc.x,this.loc.y,this.mass*2,this.mass*2)
    }

    attract (m) {
        let f = p5.Vector.sub(this.loc,m.loc)
        let distance = f.mag()
        distance = constrain(distance, 5.0, 25.0)
        f.normalize()

        let G = 1
        let strength = (G * this.mass * m.mass)/ (distance * distance)
        f.mult(strength)
        return f

    }
}

class Comet {
    constructor(mass,x,y) {
        this.mass = mass
        this.loc = createVector(x,y)
        this.vel = createVector(0,0)
        this.acc = createVector(0,0)
    }

    display() {
        stroke(0)
        fill(130,180)
        //console.log(this.loc)
        ellipse(this.loc.x, this.loc.y,this.mass*2, this.mass*2)
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

    checKEdges() {
        if(this.loc.x > width) {
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

var comet 
var planet 

function setup () {
    createCanvas(200,200)
    comet = new Comet(10,0,0)
    planet = new Planet(20,width/2,height/2)
}

function draw() {
    background(0)

    let force = planet.attract(comet)
    let wind = createVector(0.01,0)
    let gravity = createVector(0,-0.1)
    comet.applyForce(force)
    comet.applyForce(wind)
    comet.applyForce(gravity)

    comet.update()

    planet.display()
    comet.display()
}