let shapeClassifier;

let canvas

function setup() {
  canvas = createCanvas(400, 400);
  
  let options = {
    inputs: [128,128,4],
    task: "imageClassification",
    
  }
  
  shapeClassifier = ml5.neuralNetwork(options)
  
  
  const modelDetails = {
    model: 'model.json',
    metadata: 'model_meta.json',
    weights: 'model.weights.bin'
  }
  shapeClassifier.load(modelDetails, modelLoaded)
}

function modelLoaded(){
  print('model ready!')
}


function mousePressed(){
  
  let input = createGarphics(64,64)
  shapeClassifier.classify({image: canvas}, gotResults)
}


function gotResults(err, results){
  if (err){
    print(err)
    return
  }
  print(results)
}
function draw() {
  background(220);
  
  stroke(0)
  noFill()
  strokeWeight(4)
  circle(width/2,height/2, 64)
  
}