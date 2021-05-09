const express = require('express')

const router = express.Router()

router.get('/', (req, res, next) => {
    res.json({
        message: 'Server is up and running'
    })
})

module.exports = router