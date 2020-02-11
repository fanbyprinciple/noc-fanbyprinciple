let x = 0.01
let y = 0
let z = 0

let a = 10
let b = 28
let c = 8.0/3.0

let points = new Array()

function setup(){
    createCanvas(800,600,WEBGL)
    colorMode(HSB)

}

function cammove(){
    let camX = map(mouseX, 0, width, -200, 200);
  let camY = map(mouseY, 0, height, -200, 200);
  camera(camX, camY, height / 2.0 / tan((PI * 30.0) / 180.0), 0, 0, 0, 0, 1, 0);
}

function draw(){
    background(0)
    let dt = 0.01
    let dx =  a * ( y - x) * dt
    x = x + dx

    let dy = dt * ( x * ( b - z ) - y)
    y = y + dy

    let dz = dt * ((x * y) - (c * z) )
    z = z + dz

    points.push(new p5.Vector(x,y,z))

    //translate(width/2, height/2)
    translate(0,0,-80)
    scale (5)
    stroke (255)

    let hu = 0
    beginShape()
    noFill()
    for(let i=0; i < points.length; ++i){
        stroke(hu,255,255)
        
        vertex (points[i].x,points[i].y)
        
        // offset = p5.vector.random3D()
        // offset .mult(0.1)
        // v.add(offset)
        
        hu +=0.1
        if(hu >255){
            hu =0
        }
    }
    endShape()
    
    //console.log(dx,dy,dz)
    
}