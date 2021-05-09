const express = require('express')
const socketio = require('socket.io')
const http = require('http')
const cors = require('cors')

const app = express()
const httpServer = http.createServer(app)

const io = socketio(httpServer)

const PORT = process.env.PORT || 8080

httpServer.listen(PORT, () => {
    console.log(`Sever running on port ${PORT}`)
})