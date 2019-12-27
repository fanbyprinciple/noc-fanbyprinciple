var font
var vehicles = []

function preload() {
  font = loadFont('AvenirNextLTPro-Regular.otf')
}

function setup() {
  createCanvas(660, 400)
  background(51)
  // textFont(font)
  // textSize(164)
  // fill(255)
  // noStroke()
  // text('Ammaji', 30, 240)
  
  var points = font.textToPoints('Ammaji', 30, 240, 164)
  
  for (var i=0; i < points.length; ++i){
    var pt = points[i]
    var vehicle = new Vehicle(pt.x, pt.y)
    vehicles.push(vehicle)
    
  }
  
  
  
  
}

function draw() {
  background(51)
  for (var i = 0; i < vehicles.length; ++i){
    vehicles[i].update()
    vehicles[i].behaviors()
    vehicles[i].show(i)
  }
  
}