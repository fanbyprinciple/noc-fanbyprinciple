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
        }
    )
    
}
