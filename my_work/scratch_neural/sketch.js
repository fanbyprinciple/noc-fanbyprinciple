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

// get a value
function predictLabel(result1, result2){
  if (result1 == -1){
    if(result2 == -1){
      return 1
    } else if (result2 == 1) {
      return 2
    }
  } else if (result1 == 1){
    if(result2 == -1){
      return 3
    } else if (result2 == 1) {
      return 4
    }
  }
}

class Perceptron{
  
  constructor(){
    this.weights1 = []
    this.weights2 = []
    this.weightlen = 2
    
    for(let i = 0; i < this.weightlen; ++i){
      let init1 = random(-1,1)
      console.log('init', init1)
      this.weights1.push(init1)   
    }
    
    
    for(let i = 0; i < this.weightlen; ++i){
      let init2 = random(-1,1)
      console.log('init', init2)
      this.weights2.push(init2)   
    }
    
    
    print(this.weights2)
    print(this.weights1)
    
    print('weights initialised: weight1 ', this.weights1, this.weights1[0], this.weights1[1], this.weights1.length) // why is this.weights different from this.weights1 and this.weights2
    print('weights initialised: weight2 ', this.weights2, this.weights2[0], this.weights2[1], this.weights2.length ) //wtf
  }
  
  guess(inputs){
    console.log('guessing>')
    let sum1 = 0
    let sum2 = 0
    
    let results1 = 0
    let results2 = 0
    
    // for input[0] x
    for(let i=0; i<this.weightlen; ++i){
      print('weights1 ', i, " : ", this.weights1[i] * inputs[0])
      sum1 += this.weights1[i] * inputs[0]
       results1 = signf(sum1)
    }
    
    for(let i=0; i<this.weightlen; ++i){
      print('weights2 ', i, " : ", this.weights2[i] * inputs[1])
      sum2 += this.weights2[i] * inputs[1]
      results2 = signf(sum2)
    }
    
    
    print(results1, results2)
    return predictLabel(results1, results2)
    
    
    
    // //console.log('relu : ', reluf(sum))
    // console.log('signf : ', signf(sum))
    // return signf(sum)
  }
  
  train(mouseClicksx, mouseClicksy, mouseClickst){
    for(let i=0; i<mouseClicksx.length; ++i){
      let inputs = [mouseClicksx[i], mouseClicksy[i]]
      let pred = this.guess(inputs)
      //console.log('Training pred: ', pred)
      let error = mouseClickst[i] - pred
      print("calculating error: ", mouseClickst[i], " - ", pred)
      
      let lr = 0.01
      for (let i=0; i<this.weightlen; ++i){
        this.weights1[i] += error * inputs[0] * lr
        this.weights2[i] += error * inputs[1] * lr
      } 
      print("error: ",error)
      print('weights updated: weight1 ', this.weights1[0], this.weights1[1], this.weights1)
      print('weights updated: weight2 ', this.weights2[0], this.weights2[1], this.weights2)
    }
    
  }
  
}
let brain

function setup() {
  createCanvas(400, 400);
  background(0)
  brain = new Perceptron()
  createDummyPoints(30) // training

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


