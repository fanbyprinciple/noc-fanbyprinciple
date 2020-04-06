let capture
let snapshot

let url = "http://localhost:8000/query"



let imageData

function setup() {
  createCanvas(800, 800);
  
  capture = createCapture(VIDEO)
  //capture.size(400,400)
  //capture.hide()
  createButton('snap').mousePressed(takesnap)
  createButton('show').mousePressed(showsnap)
  createButton('generateGAN').mousePressed(generateGAN)
  
}


function generateGAN(){
  console.log("sending to runway: ", imageData)
  //postData = {"contentImage" : }
}

function takesnap(){
  snapshot = (capture.get())
  //snapshot.push(capture.get())
  //console.log(snapshot)
  //image(capture,0,0)
}



function showsnap(){
  image(snapshot,0,0)
  imageData = snapshot.toDataURL('image/jpeg',1.0)
}
                                  
                                  

function draw() {
  //background(220);
  //image(capture,0,0)
  
}