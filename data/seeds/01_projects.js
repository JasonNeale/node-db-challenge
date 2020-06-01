exports.seed = function(knex) {
  return knex('projects').del()
  .then(function () {
    return knex('projects').insert([
      {
        id: 1, 
        name: 'Project 1',
        description: 'some description about project 1',
        completed: 'false',
        createdAt: '1590709660',
        updatedAt: '1590709660'
      },
      {
        id: 2, 
        name: 'Project 2',
        description: 'some description about project 22',
        completed: 'false',
        createdAt: '1590709888',
        updatedAt: '1590709888'
      },
      {
        id: 3, 
        name: 'Project 3',
        description: 'some description about project 3',
        completed: 'false',
        createdAt: '1590710245',
        updatedAt: '1590710245'
      },
    ])
  })
}