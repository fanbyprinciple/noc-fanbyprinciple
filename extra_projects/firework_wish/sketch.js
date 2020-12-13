let fireworks = []
let gravity

let bebasfont

function preload(){
  bebasfont = loadFont('bebas.ttf')
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB)
  strokeWeight(4)
  gravity =  createVector(0,0.2)
  stroke(255)
  background(0)
  
  textFont(bebasfont);
  textSize(width /8);
  textAlign(CENTER, CENTER);
}

function draw() {
  colorMode(RGB)
  background(0,0,0,25);
  
  text('Happy Birthday', width/2, height/2);
  text('Ammaji', width/2, height/2 + width/8)
  if(random(1) < 0.03){
    fireworks.push(new Firework())  
  }
  
  for ( let i = fireworks.length -1; i>=0 ; i--){
    fireworks[i].update()
    fireworks[i].show() 
    
  if(fireworks[i].done()){
    fireworks.splice(i,1)
  }    
  }
  
}