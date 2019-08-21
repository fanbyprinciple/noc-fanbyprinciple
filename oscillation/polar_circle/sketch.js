let r = 5
let theta = 0

function setup () {
    createCanvas(600,600)
    background(255)
    smooth ()
}

function draw() {
    let x = r * cos (theta)
    let y = r * sin (theta)
    
    noStroke()
    fill (0)
    ellipse(x+width/2, y+height/2, 16, 16)

    theta += 0.01
    r += 0.03
}