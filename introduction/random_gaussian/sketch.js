let generator 

function setup(){
    
    createCanvas(640,240)
    background(51)
    generator = random()
}

function draw() {
    let sd =60
    let mean =320
    let num = randomGaussian(mean,sd)
    let x =sd*num +mean
    //console.log(floor(x/100))
    noStroke()
    fill(255,10)
    ellipse(floor(x/100),floor(x/100),floor(x/100),floor(x/100))
    
}