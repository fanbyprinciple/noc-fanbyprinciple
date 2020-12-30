let angle = 0
let w = 24
let ma 
let maxD
var img
let txt

// function preload(){
//   img = loadImage('cat.jpg')
// }

function setup() {
  createCanvas(400, 400, WEBGL);
  ma = atan(1/sqrt(2))
  maxD = dist(0,0, 200,200)
  
  _text = createGraphics(window.innerWidth - 4, window.innerHeight - 4);
  _text.textFont('Source Code Pro');
  //_text.textAlign(CENTER);
  _text.textSize(68);
  _text.fill(255,255,255);
  _text.noStroke();
  _text.text('           Happy bday Saumya', height/2, width/2);
}

function mousePressed(){
  maxD -= 10 
  //print(maxD)
}

// function mouseReleased(){
//   maxD = dist(0,0,200,200)
// }

function draw() {
  
  background(0);
  ortho (-300, 300,300,-300,0,1000)
  //ambientLight(55,255,255,0)
  
  //translate(0,0,-100)
  
  //rotateX(QUARTER_PI)
  rotateY(ma)
  //rotateX(-PI/8)
  //translate(width/2, height/2)
  //rectMode(CENTER)
  //rotateX(angle* 0.25 )
  
  let offset=0
  
  texture(_text);
  rotateY(map(mouseX, 0, width, 0, 3));
  rotateX(map(mouseY, 0, height, 0, 3));
  //plane(300,300)
  plane(window.innerWidth - 4,window.innerHeight - 4);
  for(let z=0; z<height; z+=w){
    for(let x=0; x<width; x+=w){
      push()
      let d = dist(x,z, width/2, height/2)
      let offset = map(d,0,maxD, -PI,PI)
      let a = angle + offset
      let h = floor(map(sin(a), -1,1,0,300))
      //fill(255)
      normalMaterial()
      translate(x-width/2,0,z-height/2)
      box(w-2,h,w-2)
      //rect(x-width/2 + w/2,0,w -2,h)
      //texture(img);
      //plane(x-width/2, 0,z-width/2);
      
      pop()
    }
    offset -=0.1
  }
  
  angle += 0.05
  
}