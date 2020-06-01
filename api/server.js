const express = require('express')
const server = express()
const cors = require('cors')
const ProjectsRouter = require('../projects/projects-router')

server.use(express.json())
server.use(cors())
server.use(logger)
server.use('/api/projects', ProjectsRouter)

function logger(req, res, next) {
    console.log( `
    [API SERVER LOG]:
    DATE: ${new Date().toISOString()}
    METHOD: ${req.method}
    URL: ${req.url}
    <------------------------------------->` )
    next()
}

module.exports = server 