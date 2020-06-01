
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources').del()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        {
          id: 1, 
          projectId: '1',
          name: 'PC',
          description: 'Laptop',
          createdAt: '1590712054',
          updatedAt: '1590712054'
        },
        {
          id: 2, 
          projectId: '1',
          name: 'Conference Room',
          description: 'Conference Room A',
          createdAt: '1590712054',
          updatedAt: '1590712054'
        },
        {
          id: 3, 
          projectId: '1',
          name: 'Projector/Screen',
          description: 'HD projector with pull down screen',
          createdAt: '1590712054',
          updatedAt: '1590712054'
        },
        {
          id: 4, 
          projectId: '2',
          name: 'Microphone',
          description: 'Wireless microphone',
          createdAt: '1590712054',
          updatedAt: '1590712054'
        },
        {
          id: 5, 
          projectId: '3',
          name: 'Notebooks',
          description: 'Composition notebooks',
          createdAt: '1590712054',
          updatedAt: '1590712054'
        },
        {
          id: 6, 
          projectId: '3',
          name: 'Digital Audio Recorder',
          description: '1 GB digital audio recorder',
          createdAt: '1590712054',
          updatedAt: '1590712054'
        },
      ]);
    });
};