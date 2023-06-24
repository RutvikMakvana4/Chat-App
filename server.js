const express = require('express');
const app = express();
require('dotenv').config();
const http = require('http').createServer(app)

const PORT = process.env.PORT || 3000

app.use(express.static(__dirname + '/public'))

app.get('/', (req,res)=> {
    res.sendFile(__dirname + '/index.html')
})

http.listen(PORT, (req,res) => {
    console.log(`Server running on ${PORT}`);
})


//socket

// Socket 
const io = require('socket.io')(http)

io.on('connection', (socket) => {
    console.log('Connected...')
    socket.on('message', (msg) => {
        socket.broadcast.emit('message', msg)
    })

})