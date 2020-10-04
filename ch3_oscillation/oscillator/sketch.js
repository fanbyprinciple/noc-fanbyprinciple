class Oscillator {
    constructor ()  {
        this.angle = createVector()
        this.velocity = createVector(random(-0.05,0.05), random(-0.05,0.05))
        this.acceleration = createVector(random(0.05,-0.05),random(0.05,-0.05))
        this.amplitude = createVector(random(width/2),random(height/2))


    }

    oscillate() {
        this.velocity.add(this.acceleration)
        this.angle.add(this.velocity)
    }

    display() {
        let x = sin (this.angle.x)*this.amplitude.x
        let y = sin (this.angle.y)*this.amplitude.y

        push () 
        translate (width/2, height/2)
        stroke (0)
        fill (0,130,25)
        line (0,0,x,y)

        ellipse(x,y,16,16)
        pop ()

 
    }
}

let oscillator

function setup () {
    createCanvas (200,200)
    background(255)

    oscillator = new Oscillator ()
}

function draw () {
    oscillator.oscillate()
    oscillator.display()
}