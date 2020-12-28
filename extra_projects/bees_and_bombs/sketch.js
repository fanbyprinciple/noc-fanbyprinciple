let angle = 0
let w = 24
let ma 
let maxD

function setup() {
  createCanvas(400, 400, WEBGL);
  ma = atan(1/sqrt(2))
  maxD = dist(0,0, 200,200)
}

function draw() {
  background(0);
  ortho (-300, 300,300,-300,0,1000)
  //ambientLight(255,255,255,0)
  
  //translate(0,0,-100)
  
  rotateX(QUARTER_PI)
  rotateY(ma)
  //rotateX(-PI/8)
  //translate(width/2, height/2)
  //rectMode(CENTER)
  //rotateX(angle* 0.25 )
  
  let offset=0
  for(let z=0; z<height; z+=w){
    for(let x=0; x<width; x+=w){
      push()
      let d = dist(x,z, width/2, height/2)
      let offset = map(d,0,maxD, -PI,PI)
      let a = angle + offset
      let h = floor(map(sin(a), -1,1,50,300))
      //fill(255)
      normalMaterial()
      translate(x-width/2,0,z-height/2)
      box(w-2,h,w-2)
      //rect(x-width/2 + w/2,0,w -2,h)
      
      pop()
    }
    offset -=0.1
  }
  
  angle += 0.05
}