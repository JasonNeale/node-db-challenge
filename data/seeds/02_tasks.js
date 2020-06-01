exports.seed = function(knex) {
  return knex('tasks').del()
  .then(function () {
    return knex('tasks').insert([
      {
        id: 1, 
        projectId: '1',
        description: 'task description',
        notes: 'N/A',
        completed: 'false',
        createdAt: '1590709684',
        updatedAt: '1590709684'
      },
      {
        id: 2, 
        projectId: '1',
        description: 'task description',
        notes: 'N/A',
        completed: 'false',
        createdAt: '1590709684',
        updatedAt: '1590709684'
      },
      {
        id: 3, 
        projectId: '1',
        description: 'task description',
        notes: 'N/A',
        completed: 'false',
        createdAt: '1590709684',
        updatedAt: '1590709684'
      },
      {
        id: 4, 
        projectId: '2',
        description: 'task description',
        notes: 'N/A',
        completed: 'false',
        createdAt: '1590710488',
        updatedAt: '1590710488'
      },
      {
        id: 5, 
        projectId: '2',
        description: 'task description',
        notes: 'N/A',
        completed: 'false',
        createdAt: '1590710488',
        updatedAt: '1590710488'
      },
      {
        id: 6, 
        projectId: '3',
        description: 'task description',
        notes: 'N/A',
        completed: 'false',
        createdAt: '1590711485',
        updatedAt: '1590711485'
      },
      {
        id: 7, 
        projectId: '3',
        description: 'task description',
        notes: 'N/A',
        completed: 'false',
        createdAt: '1590711485',
        updatedAt: '1590711485'
      },
      {
        id: 8, 
        projectId: '3',
        description: 'task description',
        notes: 'N/A',
        completed: 'false',
        createdAt: '1590711485',
        updatedAt: '1590711485'
      }
    ])
  })
}