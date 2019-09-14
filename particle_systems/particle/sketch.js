let ps

let total =10

function setup() {

    createCanvas(200,200)
    ps = new Particlesystem(width/2,height/2)
    
    smooth ()
}

function draw() {
    background(255)
    ps.addParticle(mouseX,mouseY)
    ps.run()
    
}

