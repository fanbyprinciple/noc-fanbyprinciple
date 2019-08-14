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

    socket.on('mouse', mouseMsg)

    function mouseMsg(data) {
        socket.broadcast.emit('server', data)
        //io.sockets.emit('server',data) //this will also send data to itself
        //console.log(data)
    }

    
}
