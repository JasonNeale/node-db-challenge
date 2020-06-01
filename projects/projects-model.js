const pdb = require('../data/db-config')

function getAll(table) {
    return pdb(table)
}

function getAllResources(table) {
    return pdb(table)
}

async function getAllTasksById(id){
    return await pdb('tasks')
    .join('projects', 'tasks.projectId', 'projects.id')
    .where('projects.id', id)
    .select(
        {
            projectId: 'projects.id',
            projectName: 'projects.name',
            projectDescription: 'projects.description',
            tasksId: 'tasks.id',
            tasksDescription: 'tasks.description',
            tasksNotes: 'tasks.notes',
            tasksCompleted: 'tasks.completed',
            tasksCreatedAt: 'tasks.createdAt',
            tasksUpdatedAt: 'tasks.updatedAt'
        }
    )
    .orderBy('tasks.id')
}

async function add(table, data) {
    const newId = await pdb(table).insert(data)
    return pdb(table).where({id: `${newId}`}).first()
}

module.exports = {
    getAll,
    getAllResources,
    getAllTasksById,
    add
}