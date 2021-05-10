const express = require('express')
const socketio = require('socket.io')
const http = require('http')
const path = require('path')
const cors = require('cors')

const router = require('./router')
const {addUser, removeUser, getUser, getUsersInRoom} = require('./users')

const app = express()
const httpServer = http.createServer(app)

app.use(cors())

// Serve all static files from the build directory
const buildPath = path.join(__dirname, '..', 'build');
app.use(express.static(buildPath));

// Keep routing functional, serve the index.html file for unknown routes
app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
  });

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
        // Emitting a welcome message to the user that joined
        socket.emit('message', {user: 'admin', text: `Welcome to the chat ${user.name}`})

        // Broadcasting a message that user has joined
        socket.broadcast.to(user.room).emit('message', {user: 'admin', text: `${user.name} has joined ${user.room}`})

        // Broadcasting the user that joined to the list of users present in the room
        socket.broadcast.to(user.room).emit('user-joined', usersInRoom)

        // subscribing socket to the room that user entered
        socket.join(user.room)

        // Sending back information about the list of users in the room
        callback(usersInRoom)
    })

    // Listener for messages sent in the room
    socket.on('message-sent', (message, callback) => {
        const user = getUser(socket.id)

        io.to(user.room).emit('message', {user: user.name, text: message} )

        callback()
    })


    // Listener for user leaving the room
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