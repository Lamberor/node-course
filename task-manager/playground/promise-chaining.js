require('../src/db/mongoose');
const User = require('../src/models/user');

User.findByIdAndUpdate('60f933e7e8a02d39e4e99698', { age: 1 })
  .then((user) => {
    console.log(user);
    return User.countDocuments({ age: 1 });
  })
  .then((result) => {
    console.log(result);
  })
  .catch((e) => {
    console.log(e);
  });
