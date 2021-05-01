let brain
let trainButton

let isTrained = false

function setup() {
  
  createCanvas(400, 400);
  background(220);
  
  let options = {
    inputs : ["mouseX"],
    outputs : ["left", "right"],
    task: "classification",
    debug: true
  }
  
  brain = ml5.neuralNetwork(options)
  
  trainButton = createButton("train")
  trainButton.mousePressed( function(){
    brain.normalizeData()
    brain.train({epochs: 50}, finished)
  })
}

function finished(){
  console.log('training complete')
  isTrained = true
}

function mousePressed(){
  let inputs = {
    mouseX
  }
  let fillcolor = "red"
  
  let label = "left"
  
  if (mouseX > width/2){
    fillcolor = "blue"
    label = "right"
  } else {
    
    label = "left"
  }
  
  noStroke()
  fill(fillcolor)
  circle(mouseX,mouseY, 10)
  
  
  brain.addData(inputs, {label})
  
  console.log(`input: ${mouseX}, output: ${label}`)
 
}



function draw() {
  
  
  // if (mouseX > width/2){
  //   background(255,0,0)
  // } else {
  //   background(0,0,255)
  // }
  
  if (isTrained){

    let inputs = {mouseX}
    let output = brain.classifySync(inputs)
    console.log(output[0].label)
    if (output[0].label == "left"){
      background("red")
    }
    else {
      background("blue")
    }
    
  }
  
  strokeWeight(8)
  stroke(255)
  line(width/2,0,width/2, height)
  
  
}

