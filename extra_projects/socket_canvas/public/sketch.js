var socket

function setup() {
    createCanvas(400,400)
    background(51)

    socket = io.connect('http://localhost:3000')
}

function draw() {
    
    ellipse(mouseX,mouseY,16,16)
}