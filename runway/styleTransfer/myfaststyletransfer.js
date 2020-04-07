let img
let raw = new Image()

var socket = io.connect('http://127.0.0.1:3000/')

document.addEventListener("DOMContentLoaded", function(event){
    var status = document.getElementById('status')
    var startBtn = document.getElementById('start')
    var stopBtn = document.getElementById('stop')
    var video = document.querySelector('video')
    var canvas = document.querySelector('canvas')

    var ctx = canvas.getContext('2d')
    var localMediaStream = null
    var shouldLoop = false

    // getting user camera
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia){
        navigator.mediaDevices.getUserMedia({video: true})
            .then((stream)=>{
                video.srcObject = stream
                video.play()
            })
    }

    // when connection is established
    socket.on('connect', function(){
        status.innerHTML = 'Connected'
    })

    socket.on('data', function(data){
        if(shouldLoop){
            sendImage()
        }
    })

    // get current frame and send it to runway using the canvas API
    function sendImage(){
        ctx.drawImage(video, 0,0,300,280)
        socket.emit('query', {
            image:canvas.toDataURL('image/jpeg'),
        })
    }

    // Start the loop send an image wait for response and send another
    function start(){
        shouldLoop = true;
        sendImage()
    }

    //stop the loop
    function stop(){
        shouldLoop = false;
    }

    // listen to start and stop event
    startBtn = addEventListener('click', start, false)
    stopBtn = addEventListener('click', stop, false)

    // get the DOM
    var status = document.getElementById('status')
    var log = document.getElementById('log')

    // When a connection is established
    socket.on('data', newDrawing)

})

function setup(){
    cnv = createCanvas(windowWidth, windowHeight)
    cnv.parent('p5canvas')
    cnv.style('z-index', '-1')
    cnv.position(0,0)
    background(0)

    createMenu()
}

function createMenu(){
    textSize(20)
    fill(255)
    textAlign(CENTER)
    text("Fast StyleTransfer Demo: Sending Images via p5.js to Runway", width/2, 40)
}

let counter = 0

function newDrawing(data){
    if(data && data.output){
        raw.src = data.output
        raw.onload = function(){
            img = createImage(raw.width, raw.height)
            img.drawingContext.drawImage(raw,0,0)
            imageMode (CENTER)
            image(img, width/2, height/1.3, 400,400)
            img.save('image' + counter, 'png')
            counter++
        }
    }
}

function windowResized(){
    background(0)
    resizeCanvas(windowWidth, windowHeight)
}