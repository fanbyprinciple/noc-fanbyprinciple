var c_blobs = []

function Blob(id, x,y, radius) {
    this.x = x
    this.y = y
    this.id = id
    this.radius = radius
}




var express = require('express')

var app = express()

var server = app.listen('3000')
app.use(express.static('public'))


console.log("server is running")

var socket = require('socket.io')

var io = socket(server)

setInterval(heartbeat, 33) ;

function heartbeat(){
    io.sockets.emit('heartbeat', c_blobs)
}

io.sockets.on('connection', newConnection)

function newConnection (socket) {
    console.log("Connection made with " + socket.id)

   

    socket.on('start', 
        function (data) {
            //socket.broadcast.emit('server', data)
            //io.sockets.emit('server',data) //this will also send data to itself
            console.log(socket.id + " : " + data.x + " ," + data.y + " ," + data.radius)

            let blob = new Blob(socket.id,data.x,data.y,data.radius)
            c_blobs.push(blob)

            socket.emit('id', socket.id)
        }
    )

    socket.on('update',
        function (data) {
           //console.log(data.x)
            for(let i =0; i< c_blobs.length; i++){
                if(socket.id == c_blobs[i].id){
                    c_blobs[i].x = data.x
                    c_blobs[i].y = data.y
                    c_blobs[i].radius = data.radius
                }
                
            }
        }  

    )

    socket.on('disconnect', function(){
        console.log("client has disconnected")

    })
    
}
