let mouseClicksx = []
let mouseClicksy = []

let weightx
let weighty

class Perceptron{
  // need to do
}

function setup() {
  createCanvas(400, 400);
  weightx = random(-1,1)
  weighty = random(-1,1)
  console.log(weightx, weighty)
}

function draw() {
  background(220);
}

function mousePressed(){
   mouseClicksx.push(mouseX)
   mouseClicksy.push(mouseY)
  
   console.log(neural(mouseX,mouseY))
}

function signf(n){
  if(n>0){
    return 1
  } else {
    return -1
  }
}

function neural(x, y){
  if(x.length != y.length){
    console.log("xs and ys don't match")
    return 0
  }
  return signf(x*weightx + y*weighty)
}

function training(x, y, t){
  if (neural(x, y) != t){
    weightx -= lr * mse(x)
    weighty -= lr * mse(y)
  }
}

