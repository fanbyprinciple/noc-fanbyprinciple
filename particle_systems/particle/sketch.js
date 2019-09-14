let ps
//let p

let total =10

function setup() {

    createCanvas(600,600)
    ps = new Particlesystem(width/2,height/2)
    //p = new Particle(createVector(width/2,height/2))
    smooth ()
}

function draw() {
    background(255)
    ps.addParticle(mouseX,mouseY)
    ps.addForce()
    ps.run()
    let gravity = createVector(0,1)
    //p.applyForce(gravity)
    //p.run()
    

    
}

