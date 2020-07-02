let walls = []
let ray
let particle
let xoff = 0
let yoff = 0

function createBoundary(){
    walls = []
    for (let i=0; i<5; i++){
        walls.push(new Boundary(0,height,width,height))
        walls.push(new Boundary(0,0,width,0))
        walls.push(new Boundary(0,height,0,0))
        walls.push(new Boundary(width,height,width,0))
        let x1 = random(width)
        let x2 = random(width)
        let y1 = random(height)
        let y2 = random(height)
        walls.push(new Boundary(x1,x2,y1,y2))
    }
}

function setup(){
    createCanvas(400,400)
    
    createBoundary()
    ray = new Ray(100,200)
    particle = new Particle()
}

function draw(){
    background(0)
    particle.update(mouseX,mouseY)
    //particle.update(noise(xoff) *width, noise(yoff)* height)
    particle.show()
    for (let wall of walls){
        wall.show()
    }
    particle.look(walls)
    xoff += 0.01
    yoff += 0.01
    if (particle.checkEdges()) {
        createBoundary()
    }
    
    // ray.show()
    // ray.lookAt(mouseX, mouseY)
    
    // let pt = ray.cast(wall)
    // if (pt) {
    //     console.log("true")
    //     fill(255)
    //     ellipse(pt.x, pt.y, 8, 8)
    // }
}