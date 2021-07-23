require('../src/db/mongoose');
const Task = require('../src/models/task');

Task.findByIdAndDelete('60f918dc801c23388c6d862f')
  .then((task) => {
    console.log(task);
    return Task.countDocuments({ completed: false });
  })
  .then((result) => {
    console.log(result);
  })
  .catch((e) => {
    console.log(e);
  });
