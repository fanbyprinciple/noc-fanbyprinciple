let p

function setup() {
    createCanvas(200,200)
    p = new Particle(createVector(width/2,10))
    smooth ()
}

function draw() {
    background(255)
    p.run()
    if (p.isDead()){
        console.log("Particle no more")
    }
}

