var d = 8
var n = 5

var sliderD
var sliderN

function setup(){
    createCanvas(400,400)
    sliderD = createSlider(1,20,10,1)
    sliderN = createSlider(1,20,10,1)

    sliderD.input(draw)
    sliderN.input(draw)
}

function draw(){
    d = sliderD.value()
    n = sliderN.value()

    var k = n /d

    background(255)
    
    push ()
    translate(width/2,  height/2)

    beginShape()
    stroke(255,0,0)
    noFill()
    strokeWeight(2)
    for (var a =0; a < TWO_PI* reduceDenominator(n, d); a+=0.2){
        let r = 200 * cos(k * a)
        let x = r * cos(a)
        let y = r * sin(a)
        vertex (x,y)
    }
    endShape(CLOSE)

    pop ()
    noLoop()
}

function reduceDenominator(numerator, denominator){
    return denominator / rec(numerator, denominator)
}

function rec(a,b){
    return b ? rec(b, a%b) : a
}