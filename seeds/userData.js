const { User } = require('../models');

const userdata =
[
    {
      "username": "test",
      "password": "password"
    }
  ];

  const seedUser = () => User.bulkCreate(userdata, {
    individualHooks: true,
    returning: true,
  });
  
  module.exports = seedUser;