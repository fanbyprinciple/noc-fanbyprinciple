let video;
let videoSize = 40;
let ready =false
let slider

function setup() {
  createCanvas(400, 400);
  slider = createSlider(10,100,1)
  slider.position(10, 10);
  slider.style('width', '80px');
  video = createCapture(VIDEO, videoReady)
  video.size(videoSize,videoSize)
  video.hide()
}

function videoReady(){
  ready=true;
}

function draw() {
  background(0)
  // push()
  // videoSize = slider.value()
  // pop()
  division_factor = videoSize
  division_factor = slider.value()
  if(ready) {
    let w = width/division_factor
    video.loadPixels()
    for(let x=0; x<video.width; x++){
      for(let y=0; y <video.height; y++){
        let index = (x + y * video.width) * 4
        let r = video.pixels[index + 0]
        let g = video.pixels[index + 1]
        let b = video.pixels[index + 2]
        noStroke()
        fill(r,g,b)
        rect(x*w,y*w,w,w)
      }
    }
  }
}

function addExample(){}

function trainModel(){}

function finsihedTraining(){}

function predict(){}