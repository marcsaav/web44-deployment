const PORT = process.env.PORT || 5000

const express = require('express')
const cors = require('cors')
const helmet = require('helmet')

const server = express()

server.use(express.json())
server.use(cors())
server.use(helmet())

server.get('/', (req, res) => {
    res.send('<h1>Web 44 is in Deployment Mode!</h1>')
})

server.use('*', (req, res) => {
    res.json({ message: 'web 44 is great at deploying stuff..'})
})

server.listen(PORT, () => {
    console.log(`Listening on ${PORT}` )
})

