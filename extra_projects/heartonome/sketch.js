heart =[]
let a = 0

let newSlider 

function setup() {
  createCanvas(400, 600);
  
  redd = 150
  greenn = 0
  bluee = 150
  
  newSlider=createSlider(2,6,5)
  
  createElement('h2', 'Equation:  -r * (13* cos(a) - 5*cos(2*a) - 2*cos(3*a) - cos(4 * a))')
}

function draw() {
  background(0);
  strokeWeight(8)
  
  
  fill(redd,greenn,bluee)
  
  translate(200, 200)

  stroke(255)
  beginShape()

  for (i=0 ;i<heart.length ; ++i){
    vertex(heart[i].x,heart[i].y)
  }
  endShape(CLOSE)
  
  let r = 10
  let x = r * 16 * pow(sin(a),3)
  let y = -r * (13* cos(a) - newSlider.value()*cos(2*a) - 2*cos(3*a) - cos(4 * a))
  
  heart.push(createVector(x,y))
  a += 0.01
  
  if(a > TWO_PI){
    a = 0
    redd = random(255)
    greenn = random(150)
    bluee = random(255)
    
    heart = []
  }
  
}