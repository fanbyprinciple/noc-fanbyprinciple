let canvas
let clearButton

let doodleClassifier
let resultsDiv

let video

function setup() {
  canvas = createCanvas(windowWidth, windowHeight )
  clearButton = createButton('clear')
  clearButton.mousePressed(clearCanvas)
  clearButton.position(width/2 - 40, height +100);
  clearButton.size(72)
  background(255)
  
  doodleClassifier = ml5.imageClassifier('DoodleNet', modelReady)
  
  resultsDiv = createDiv('model loading')
  
  video = createCapture(VIDEO)
  video.hide()
  
}

function modelReady(){
  print('model loaded')
  doodleClassifier.classify(canvas, gotResults)
  
  
  
}

function gotResults(error,results){
  if (error){
    console.error(error)
    return
  }
    
  // print(results)
  
  let content = `I think its a ${results[0].label}, I am
                 ${nf(100*results[0].confidence,2,1)}% sure.<br/>
                 Though subjectively speaking, it may also be a ${results[1].label}, I feel.<br/>
                 hmm...If I am drunk enough, I may also say its a ${results[3].label}, hehe.<br/>`
  
  resultsDiv.html(content)
  doodleClassifier.classify(canvas, gotResults)
}

function clearCanvas(){
  background(255)  
}

function draw() {
  
  image(video, 0,0, width, height)
  filter(THRESHOLD, 0.5)
  
  
  
}