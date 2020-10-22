let img
let white
let sliderR
let sliderG
let sliderB
let sliderA

function preload(){
  img = loadImage('kitten.jpg')
  white = loadImage('white.png')
}
function setup() {
  createCanvas(512, 256);
  sliderR = createSlider(7,14,7,1)
  sliderG = createSlider(3,9,3,1)
  sliderB = createSlider(5,10,5,1)
  sliderA = createSlider(1,10,1,1)
  
//   sliderR.input(sliderChanged)
//   sliderG.input(sliderChanged)
//   sliderB.input(sliderChanged)
//   sliderA.input(sliderChanged)
  
  image(img,0,0)
  makeDithered(img, 1)
  image(img,256,0)
  filter(GRAY)
}

// function draw(){
//   image(white,0,0)
//   //console.log(this.value())
//   makeDithered(img, 1)
//   image(img,256,0)
//   filter(GRAY)
//}

function sliderChanged(){
  image(white,256,0)
  //console.log(this.value())
  makeDithered(img, 1)
  image(img,256,0)
  filter(GRAY)
  
}

function imageIndex(img,x, y){
  return 4*(x +y * img.width)
}

function getColorAtindex(img, x, y) {
  let idx = imageIndex(img, x, y);
  let pix = img.pixels;
  let red = pix[idx];
  let green = pix[idx + 1];
  let blue = pix[idx + 2];
  let alpha = pix[idx + 3];
  return color(red, green, blue, alpha);
}

function setColorAtIndex(img, x, y, clr) {
  let random
  let idx = imageIndex(img, x, y);

  let pix = img.pixels;
  pix[idx] = red(clr);
  pix[idx + 1] = green(clr);
  pix[idx + 2] = blue(clr);
  pix[idx + 3] = alpha(clr);
}

function closestStep(max, steps, value){
  return round((steps * value)/255) * floor(255/steps)  
}

function makeDithered(img, steps){
  img.loadPixels()
  for  (let y=0; y<img.height; y++){
    for  (let x=0; x< img.width; x++){
      
      let pixy = getColorAtindex(img,x, y)
      
      let oldR = red(pixy)
      let oldG = green(pixy)
      let oldB = blue(pixy)
      
      let newR = closestStep(255,steps, oldR)
      let newG = closestStep(255,steps,oldG)
      let newB = closestStep(255,steps, oldB)
      
      let newClr = color(newR, newG, newB)
      setColorAtIndex(img, x,y , newClr)
      
      let errR = oldR - newR
      let errG = oldG - newG
      let errB = oldB - newB
      
      distributeError(img,x,y, errR, errG, errB)
    }
  }
  img.updatePixels()

}

function distributeError(img, x, y, errR, errG, errB) {
  
  addError(img, sliderR.value() / 16.0, x + 1, y, errR, errG, errB);
  addError(img, sliderG.value() / 16.0, x - 1, y + 1, errR, errG, errB);
  addError(img, sliderB.value() / 16.0, x, y + 1, errR, errG, errB);
  addError(img, sliderA.value() / 16.0, x + 1, y + 1, errR, errG, errB);
}

function addError(img, factor, x, y, errR, errG, errB){
  if (x < 0 || x >= img.width || y < 0 || y >= img.height) return;
  let clr = getColorAtindex(img, x, y);
  let r = red(clr);
  let g = green(clr);
  let b = blue(clr);
  clr.setRed(r + errR * factor);
  clr.setGreen(g + errG * factor);
  clr.setBlue(b + errB * factor);

  setColorAtIndex(img, x, y, clr);
}