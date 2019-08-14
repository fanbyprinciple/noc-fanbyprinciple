var socket

function setup() {
    createCanvas(400,400)
    background(51)

    socket = io.connect('http://localhost:3000')

    socket.on('server',newDrawing)
    
}

function newDrawing(data){
    noStroke()
    fill(155,0,155)
    ellipse(data.x,data.y,16,16)
}

function draw() {

    
    
    //ellipse(mouseX,mouseY,16,16)
}

function mouseDragged() {
    console.log("Sending "+ mouseX + "," + mouseY )

    var data = {
        x: mouseX,
        y: mouseY
    }

    socket.emit('mouse',data)

    noStroke()
    fill (255)
    ellipse(mouseX, mouseY, 16, 16)

}