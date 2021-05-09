const express = require('express')
const socketio = require('socket.io')
const http = require('http')
const cors = require('cors')

const router = require('./router')

const app = express()
const httpServer = http.createServer(app)

app.use(router)

const io = socketio(httpServer)

io.on("connection", socket => {
    console.log("We have a new connection")

    socket.on("disconnect", () => {
        console.log("User has disconnected")
    })
})

const PORT = process.env.PORT || 8080

httpServer.listen(PORT, () => {
    console.log(`Sever running on port ${PORT}`)
})