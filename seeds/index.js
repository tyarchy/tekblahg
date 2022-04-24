const sequelize = require('../config/config');
const seedUser = require('./userData');
const seedPost = require('./postData');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('--------------');
  await seedUser();
  console.log('--------------');
  await seedPost();
  console.log('--------------');
  process.exit(0);
};

seedAll();