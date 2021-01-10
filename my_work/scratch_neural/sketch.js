// this needs to be of same length

let mouseClicksx = []
let mouseClicksy = []
let mouseClickst = []


// this is the function we are trying to emulate
// through neural network
function findQuadrant(x, y){
  if(x>width/2){
    if (y>height/2){
      return 3
    }
    else {
      return 2
    }
  } else {
    if (y>height/2){
      return 4
    }
    else {
      return 1
    }
  }
  
}


// this is the activation function for binary 1 and -1
function signf(n){
  if(n>0){
    return 1
  } else {
    return -1
  }
}

//using this activation function for hidden layers but wuold not work for us
function reluf(n){
  if(n<0){
    return 0
  } else {
    return n
  }
}

function softmax(){}

class Perceptron{
  
  constructor(){
    this.weights = []
    this.weightlen = 2
    for(let i = 0; i < this.weightlen; ++i){
      let init = random(-1,1)
      console.log('init', init)
      this.weights[i] = init   
    }
    console.log('weights initialised: ', this.weights[0], this.weights[1], this.weights) //wtf
  }
  
  guess(inputs){
    console.log('guessing>')
    let sum = 0
    
    for(let i=0; i<this.weightlen; ++i){
      console.log('weight ', i, " : ", this.weights[i] * inputs[i])
      sum += this.weights[i] * inputs[i]
    }
    //console.log('relu : ', reluf(sum))
    console.log('signf : ', signf(sum))
    return signf(sum)
  }
  
  train(mouseClicksx, mouseClicksy, mouseClickst){
    for(let i=0; i<mouseClicksx.length; ++i){
      let inputs = [mouseClicksx[i], mouseClicksy[i]]
      let pred = this.guess(inputs)
      //console.log('Training pred: ', pred)
      let error = mouseClickst[i] - pred
      
      let lr = 0.01
      for (let i=0; i<this.weightlen; ++i){
        this.weights[i] += error * inputs[i] * lr
      }
    }
    
  }
  
}
let brain

function setup() {
  createCanvas(400, 400);
  background(0)
  brain = new Perceptron()
  createDummyPoints(30)

}

function draw() {
  
}

function showSpot(x,y,i=0){
  stroke(0)
  if (i==1){
    fill(100,255,255)
  } else if(i==2){
    fill(100,255,50)
  } else if (i==3){
    fill(255,50,255)
  } else if(i==4) {
    fill(255,255,50)
  } else {
    fill(255)
  }
  ellipse(x,y,15)
}

//training data generator
function createDummyPoints(n){
  for(i=0; i<n; ++i){
    let dx = random(width)
    let dy = random(height)
    
    mouseClicksx.push(dx)
    mouseClicksy.push(dy)
    mouseClickst.push(findQuadrant(dx, dy))
  }
  
  brain.train(mouseClicksx, mouseClicksy, mouseClickst)
  
}

// testing function
function mousePressed(){
  let inputs = [mouseX, mouseY]
  let label = brain.guess(inputs)
  //console.log('label: ', label)
  //let label = findQuadrant(inputs[0], inputs[1])
  //mouseClicksx.push(inputs[0])
  //mouseClicksy.push(inputs[1])
  //mouseClickst.push(label)
  //inputs.push(label)
  //console.log(brain.guess(inputs), "label: ", label)
  showSpot(inputs[0],inputs[1],label)
}


