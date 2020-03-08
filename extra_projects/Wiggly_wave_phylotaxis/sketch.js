var n = 0
var c = 4
var cslider 
var aslider

var goldenAngle = 137.3

function setup(){
  createCanvas(1200,1200)
  cslider = createSlider(1,10,4,1)
  aslider = createSlider(137,138,137.3,0.1)
  colorMode(HSB)
  angleMode(DEGREES)
  background(0)
}

function draw(){
  c = cslider.value()
  goldenAngle = aslider.value()
  var a = n * goldenAngle
  var r = c * sqrt(n)
  
  var x = r*cos(a) + width/2
  var y = r*sin(a) + height/2
  
  fill((a-r)%256,255,255)
  noStroke()
  ellipse(x,y,4,4)
  n++
}