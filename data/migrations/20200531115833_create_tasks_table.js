exports.up = function(knex) {
    return knex.schema
    .createTable('tasks', tbl => {
        tbl.increments()
        tbl.integer('projectId').notNullable()
        tbl.foreign('projectId').references('id').inTable('projects')
        tbl.text('description').notNullable()
        tbl.text('notes')
        tbl.boolean('completed').default(false)
        tbl.datetime('createdAt').notNullable()
        tbl.datetime('updatedAt').notNullable()
    })
}

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('tasks')
} 