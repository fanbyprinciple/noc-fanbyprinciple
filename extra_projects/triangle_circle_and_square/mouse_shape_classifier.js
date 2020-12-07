let shapeClassifier
let canvas
let resultsDiv
let inputImage
let clearButton

function setup(){
  canvas = createCanvas(300,300)
  pixelDensity(1)
  
  let options = {
    task : 'imageClassification'
  }
  
  shapeClassifier = ml5.neuralNetwork(options)
  
  const modelDetails = {
    model : 'model/model.json',
    metadata : 'model/model_meta.json',
    weights: 'model/model.weights.bin'
  }
  
  shapeClassifier.load(modelDetails, modelLoaded)
  
  background(255)
  clearButton = createButton('clear')
  clearButton.mousePressed(function(){
    background(255)
  })
  
  resultsDiv = createDiv('loading model')
  inputImage = createGraphics(128,128)
}

function modelLoaded(){
  print('model loaded bruh')
  classifyImage()
}

function classifyImage(){
  inputImage.copy(canvas,0,0,400,400,0,0,128,128)
  
  shapeClassifier.classify(
    {
    image: inputImage,
  },
  gotResults

  )    
}

function gotResults(err, results){
  if (err){
    print(err)
    return
  }
    
  let label = results[0].label
  let confidence = nf(100 * results[0].confidence, 2, 1)
  resultsDiv.html(`${label} ${confidence}%`)
  classifyImage()
}
  
  
  
function draw(){
  if (mouseIsPressed){
    strokeWeight(8)
    //point(mouseX, mouseY)
    line(mouseX, mouseY, pmouseX, pmouseY)
  }
}