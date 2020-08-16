let pi
let digits
let counts = new Array(10)
let index = 0
let colors = ['red', 'green','blue', 'yellow', 'pink', 'purple', 'orange', 'magenta', 'cyan', 'violet']
    
function preload(){
  pi = loadStrings("one_million.txt")
  
}

function setup() {
  createCanvas(420, 420);
  
  const sdigits = pi[0].split("")
  digits = int(sdigits)
  
  background(0)
  stroke(255)
  noFill()
  translate(width/2, height/2)
  ellipse(0,0,400,400)
  
  
}

function draw() {
  translate(width/2, height/2)
  let digit = digits[index]
  let nextDigit = digits[index + 1]
  index ++
  let diff = TWO_PI /10
  let a1 = map(digit,0,10,0,TWO_PI) + random(-diff, diff)
  let a2 = map(nextDigit,0,10,0,TWO_PI) + random(-diff, diff)
  
  let x1 = 200 * cos(a1)
  let y1 = 200 * sin(a1)
  
  let x2 = 200 * cos(a2)
  let y2 = 200 * sin(a2)
  
//   colorMode(RGB, 100)
//   stroke(colors[digit])
  stroke(255,120,255,100)
  line(x1, y1, x2, y2)
    
}