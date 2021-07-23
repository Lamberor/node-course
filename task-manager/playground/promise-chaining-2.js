require('../src/db/mongoose');
const Task = require('../src/models/task');

// Task.findByIdAndDelete('60f918dc801c23388c6d862f')
//   .then((task) => {
//     console.log(task);
//     return Task.countDocuments({ completed: false });
//   })
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((e) => {
//     console.log(e);
//   });

const deleteTaskAndCount = async (id) => {
  const task = await Task.findByIdAndDelete(id);
  const count = await Task.countDocuments({ completed: false });
  return count;
};

deleteTaskAndCount('60f935fb91ec3042584166c3')
  .then((count) => {
    console.log(count);
  })
  .catch((e) => {
    console.log(e);
  });
