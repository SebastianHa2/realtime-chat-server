const express = require('express')
const socketio = require('socket.io')
const http = require('http')
const cors = require('cors')

const router = require('./router')
const {addUser, removeUser, getUser, getUsersInRoom} = require('./users')
const { groupEnd } = require('console')

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
        const usersInRoom = getUsersInRoom(user.room)
        if(error) {
            return callback({error})
        }
        // Emitting a welcome message
        socket.emit('message', {user: 'admin', text: `Welcome to the chat ${user.name}`})

        // Broadcasting to everyone except the connecting user
        socket.broadcast.to(user.room).emit('message', {user: 'admin', text: `${user.name} has joined ${user.room}`})

        // Broadcasting add joined user to present users list
        socket.broadcast.to(user.room).emit('user-joined', usersInRoom)

        socket.join(user.room)

        callback(usersInRoom)
    })

    socket.on('message-sent', (message, callback) => {
        console.log(socket.id)
        const user = getUser(socket.id)

        io.to(user.room).emit('message', {user: user.name, text: message} )

        callback()
    })

    socket.on("disconnect", () => {
        console.log("User has disconnected")

        const user = getUser(socket.id)

        removeUser(socket.id)

        const usersInRoom = getUsersInRoom(user.room)


        io.to(user.room).emit('message', {user: 'admin', text: `${user.name} has left ${user.room}`})
        socket.broadcast.to(user.room).emit('user-left', usersInRoom)
    })
})

const PORT = process.env.PORT || 8080

httpServer.listen(PORT, () => {
    console.log(`Sever running on port ${PORT}`)
})