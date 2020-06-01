const express = require('express')
const projectDb = require('./projects-model')
const router = express.Router()

// ### Projects ###
router.get('/', (req, res) => {
    projectDb.getAll('projects')
    .then(project => {
        res.status(200).json(project)
    })
    .catch(err => {
        res.status(500).json({ message: `There was an internal server error.`})
    })
})

router.post('/', (req, res) => {
    const projectData = req.body

    projectDb.add('projects', projectData)
    .then(newProjectEntry => {
        res.status(201).json(newProjectEntry)
    })
    .catch(err => {
        res.status(500).json({ message: `There was an internal server error.`})
    })
})

// ### Tasks ###
router.get('/:id/tasks', (req, res) => {
    const {id} = req.params
    projectDb.getAllTasksById(id)
    .then(tasks => {
        res.status(200).json({tasks})
    })
})

router.post('/tasks', (req, res) => {
    const taskData = req.body

    projectDb.add('tasks', taskData)
    .then(newTaskEntry => {
        res.status(201).json(newTaskEntry)
    })
    .catch(err => {
        res.status(500).json({ message: `There was an internal server error.`})
    })
})

// ### Resources ###
router.get('/resources', (req, res) => {
    projectDb.getAll('resources')
    .then(resource => {
        res.status(200).json(resource)
    })
    .catch(err => {
        res.status(500).json({ message: `There was an internal server error.`})
    })
})

router.post('/resources', (req, res) => {
    const resourceData = req.body

    projectDb.add('resources', resourceData)
    .then(newResourceEntry => {
        res.status(201).json(newResourceEntry)
    })
    .catch(err => {
        res.status(500).json({ message: `There was an internal server error.`})
    })
})

module.exports = router