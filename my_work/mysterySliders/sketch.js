// from:https://www.youtube.com/watch?v=vmhRlDyPHMQ

let jSlider
let rotateXSlider
let spinSlider

function setup() {
  createCanvas(400, 400, WEBGL);
  console.log(frameCount)
  angleMode(DEGREES)
  jSlider = createSlider(30, 360, 60, 30);
  jSlider.style('width', '80px');
  rotateXSlider = createSlider(30, 360, 60, 30);
  rotateXSlider.style('width', '80px');
  spinSlider = createSlider(30, 360, frameCount/3, 30);
  spinSlider.style('width', '80px');
}

function draw() {
  background(30)
  
  noFill()
  stroke(255)
  rotateX(rotateXSlider.value())
  for (var i=0;i < 15; ++i){
   
    
    var r = map(sin(frameCount), -1, 1,0, 255)
    var g = map(i,0,20,0,255)
    var b = map(cos(frameCount),-1,1,0,255)
    
    stroke(r,g,b)
    
    rotate(spinSlider.value())
    
    beginShape()
    for (var j=0; j < 360; j+=jSlider.value()){
      var rad = i*3
      var x = rad * cos(j) *3
      var y = rad * sin(j) *3
      var z = sin(frameCount * 2+ i *10) * 50
      if (j<300){
        vertex(x, y, z)  
      }
      else {
        ellipse(x+100,y+100,z,z)
      }
    }
    endShape(CLOSE)
  }
}