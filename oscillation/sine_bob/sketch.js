function setup() {
    createCanvas(200,200)
}
function draw() {
    background(120)

    let period = 120
    let amplitude = 100
    let x = amplitude * sin (TWO_PI * frameCount / period)
    stroke (0)
    fill(0,120,120)
    translate(width/2, height/2)
    line(0,0,0,x)
    ellipse(0,x,20,20) 
}