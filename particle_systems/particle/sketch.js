let p = []

let total =10

function setup() {
    createCanvas(200,200)
    for (i=0; i<total;++i){
        p[i] = new Particle(createVector(random(width),random(height)))
    }
    
    smooth ()
}

function draw() {
    background(255)
    for (i=0; i<total;++i){
        p[i].run()
        if (p[i].isDead()){
            console.log("Particle no more")
    }
    }
    
}

