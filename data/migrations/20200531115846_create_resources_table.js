exports.up = function(knex) {
    return knex.schema
    .createTable('resources', tbl => {
        tbl.increments()
        tbl.integer('projectId').notNullable()
        tbl.foreign('projectId').references('id').inTable('projects')
        tbl.text('name').notNullable()
        tbl.text('description')
        tbl.datetime('createdAt').notNullable()
        tbl.datetime('updatedAt').notNullable()
    })
}

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('resources')
} 