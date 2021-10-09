var points = []
var mult = 0.005

var r1
var r2
var g1
var g2
var b1
var b2

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  var density = 50
  var space = width/density
  noiseDetail(1)
  angleMode(DEGREES)
  
  for (var x=0; x<width; x+=space){
    for (var y=0; y<height; y+= space){
      var p = createVector(x + random(10,-10),y + random(10,-10))
      points.push(p)
    }
  }
  
  shuffle(points, true)
  
  background(20);
  
  r1 = random(255)
  r2 = random(255)
  g1 = random(255)
  g2 = random(255)
  b1 = random(255)
  b2 = random(255)
  
  mult = random([0.001,0.01,0.007,0.005,0.0001])
  density = random([10,20,30,5,15])
  
}

function draw() {
  var max_length
  // if (frameCount <= points.length){
  //   max_length = frameCount * 5
  // } else {
  //   max_length = points.length
  // }
  
  noStroke()
  var circleSize = 300
  //for (var i=0; i < max_length; ++i){
  for (var i=0; i < points.length; ++i){
    
    var r = map(points[i].x, 0, width, r1, r2)
    var g = map(points[i].y, 0, height, g1, g2)
    var b = map(points[i].x, 0, width, b1, b2)
    var alpha = map(dist(width/2, height/2, points[i].x, points[i].y),0,circleSize,400,10)
    
    fill(r,g,b, alpha)
    
    var angle = map(noise(points[i].x * mult, points[i].y * mult),0,1,0,width)
    points[i].add(createVector(cos(angle), sin(angle)))
    
    if (dist(width/2, height/2, points[i].x, points[i].y)<circleSize){
      ellipse(points[i].x, points[i].y,1)  
    }
    
  }
}

function mouseClicked(){
  saveCanvas('yourmoon', 'png')
}