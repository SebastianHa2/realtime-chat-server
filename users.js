const users = []

const addUser = ({id, name, room}) => {
    // Transforming the user name
    name = name.trim().toLowerCase()

    // Check if a user with this username is already in that room
    const existingUser = users.find(user => {
        user.room === room && user.name === name
    })

    if(existingUser){
        return { error: 'Username is taken...' }
    }

    // Create and add user to the room
    const user = {id, name, room}

    users.push(user)

    return { user } 
}

const removeUser = id => {
    // Find the index of the user to remove
    const index = users.findIndex(user => {
        user.id === id
    })

    // Splice the array at that index
    if(index !== -1){
        return users.splice(index, 1)[0]
    }
}

const getUser = id => {
    return users.find(user => {
        user.id === id
    })
}

const getUsersInRoom = room => {
    const usersInRoom = users.filter(user => {
        return user.room === room
    })

    return usersInRoom
}

module.exports = { addUser, removeUser, getUser, getUsersInRoom}