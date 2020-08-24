let n=0
let d=0
let dSlider
let speed
let pauseButton

function setup() {
  createCanvas(800, 800);
  angleMode(DEGREES)
  dSlider = createSlider(0.001,3,0.001)
  pauseButton = createButton('freeze')
  pauseButton.mousePressed(resetDN)
}

function resetDN(){
  if(speed!=0){
    speed = 0
  } else {
    speed = dSlider.value
  }
}

function draw() {
  background(0);
  translate(width/2, height/2)
  //scale(10)
  stroke(255)
  if(speed !=0){
    speed = dSlider.value()
  }
  noFill()
  beginShape()
  strokeWeight(1)
  for (let i=0; i<361; i++){
    let k = i * d
    let r = 150 *  sin(n*k)
    let x = r * cos(k)
    let y = r * sin(k)
    vertex(x,y)
  }
  endShape(CLOSE)
  
  noFill()
  stroke(255,0,255,100)
  strokeWeight(5)
  beginShape()
  for (let i=0; i<361; i++){
    let k = i 
    let r = 150 *  sin(n*k)
    let x = r * cos(k)
    let y = r * sin(k)
    vertex(x,y)
  }
  endShape()
  
  n+=speed
  d+=speed*3
}