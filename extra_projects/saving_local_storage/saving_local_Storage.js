let rSlider, gSlider, bSlider
let button
let canvas

function setup() {
  canvas = createCanvas(400, 400)
  
  let imgData = getItem("canvas")
  if (imgData !== null){
    loadImage(imgData, function(drawing){
      image(drawing, 0, 0, width, height)
    })
  }
  
  button = createButton('clear');
  button.position(0, 0);
  button.mousePressed(changeBG);
  
  rSlider = createSlider(0,255,0)
  gSlider = createSlider(0,255,0)
  bSlider = createSlider(0,255,0)
  let colors = getItem("colors")
  
  if(colors != null){
    rSlider.value(colors.r)
    gSlider.value(colors.g)
    bSlider.value(colors.b)
  }
  
  rSlider.changed(storeData)
  gSlider.changed(storeData)
  bSlider.changed(storeData)
  
  background(0)
  
}

function changeBG(){
  background(0)
}

function storeData() {
  let colors = {
    r : rSlider.value(),
    g : gSlider.value(),
    b : bSlider.value()    
  }
  storeItem("colors", colors)
}

function mouseReleased(){
  storeItem("canvas", canvas.elt.toDataURL())
  print(canvas.elt.toDataURL())
}

function draw() {
  let r = rSlider.value()
  let g = gSlider.value()
  let b = bSlider.value()
  
  noStroke()
  fill(r,g,b)
  rect(0, height-10, width, 10)
  
  if (mouseIsPressed) {
    strokeWeight(8)
    stroke(r,g,b)
    line(pmouseX, pmouseY, mouseX, mouseY)
  }
  
}
