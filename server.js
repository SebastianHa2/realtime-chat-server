const express = require('express')
const socketio = require('socket.io')
const http = require('http')
const cors = require('cors')

const router = require('./router')
const {addUser, removeUser, getUser, getUsersInRoom} = require('./users')

const app = express()
const httpServer = http.createServer(app)

app.use(router)

const io = socketio(httpServer, {
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"]
      }
})

io.on("connection", socket => {
    socket.on("join", ({ name, room }, callback) => {
        const { error, user } = addUser({id: socket.id, name, room})

        if(error) {
            return callback(error)
        }
        // Emitting a welcome message
        socket.emit('message', {user: 'admin', text: `Welcome to the chat ${user.name}`})

        // Broadcasting to everyone except the connecting user
        socket.broadcast.to(user.room).emit('message', {user: 'admin', text: `${user.name} has joined ${user.room}`})

        socket.join(user.room)

        callback()
    })

    socket.on('message-sent', (message, callback) => {
        const user = getUser(socket.id)

        io.to(user.room).emit('message', {user: user.name, text: message} )

        callback()
    })

    socket.on("disconnect", () => {
        console.log("User has disconnected")
    })
})

const PORT = process.env.PORT || 8080

httpServer.listen(PORT, () => {
    console.log(`Sever running on port ${PORT}`)
})