// from the playlist : https://www.youtube.com/watch?v=se9rsp2VMWk

const CRYSTAL_SIZE = 500
const sides = 6
let pallete = []

function setup() {
  createCanvas(500, 500);
  noLoop();
  angleMode(DEGREES)
  rectMode(CENTER)
  pallete = [
    color(255,0,154),
    color(4, 0, 152),
  ]
}

function draw() {
  background('teal')
  
  
  
}

function testlines(){
  noFill()
  translate(width/2, height/2)
  rotate(45)
  stroke(pallete[0])
  rect(0,0,CRYSTAL_SIZE,CRYSTAL_SIZE)
  ang
  for (let i=0; i<sides; i++){
    stroke(pallete[1])
    line(0,0,0,CRYSTAL_SIZE/2)
    rotate(360/sides)
  }
}