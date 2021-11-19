let brain
let trainButton
let sel
let isTrained = false
let currentLabel = 'red'
let mouseInputX =[]
let mouseInputY =[]
let mouseLabels =[]

function setup() {
  
  let canvas = createCanvas(400, 400);
  canvas.mousePressed(trainingData)
  
  background(220);
  
  sel = createSelect();
  sel.option('red');
  sel.option('blue');
  sel.changed(changeLabel)
  
  let options = {
    // inputs : ["mouseX"],
    // outputs : ["left", "right"],
    task: "classification",
    debug: true
  }
  
  brain = ml5.neuralNetwork(options)
  
  trainButton = createButton("train")
  trainButton.mousePressed( function(){
    brain.normalizeData()
    brain.train({epochs: 50}, finishedTraining)
  })
}

function changeLabel(){
  currentLabel = sel.value()
}

function finishedTraining(){
  console.log('training complete')
  isTrained = true
}

function trainingData(){
  
  let mx = mouseX
  let my = mouseY

  mouseInputX.push(mouseX)
  mouseInputY.push(mouseY)
  let inputs = {
    mouseX, mouseY
  }
  
   // console.log(mouseX, mx, mouseInputX[0], inputs)
  
  mouseLabels.push(currentLabel)
  
  let label = currentLabel
  
  brain.addData(inputs, {label})
  console.log(`input: ${mx,my, mouseX, mouseY} ,  output: ${label}`)
}



function draw() {
  if (isTrained){
    console.log('in draw: ', isTrained)
    let inputs = {mouseX, mouseY}
    let output = brain.classifySync(inputs)
    console.log(output[0].label)
    if (output[0].label == 'red'){
      background("red")
    }
    else {
      background("blue")
    }  
  }
  for(i=0; i<mouseInputX.length;++i) {
      stroke(255)
      fill(mouseLabels[i])
      circle(mouseInputX[i],mouseInputY[i], 10)    
  }
  
  
}
