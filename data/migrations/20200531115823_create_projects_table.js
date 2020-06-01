exports.up = function(knex) {
    return knex.schema
    .createTable('projects', tbl => {
        tbl.increments()
        tbl.text('name').notNullable().default('N/A')
        tbl.text('description')
        tbl.boolean('completed').default(false)
        tbl.datetime('createdAt').notNullable()
        tbl.datetime('updatedAt').notNullable()
    })
}

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('projects').onDelete('CASCADE')
}