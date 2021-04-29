const sequelize = require('../config/connection');
const { Blogger, Post } = require('../models');

const bloggerData = require('./bloggerData.json');
const postData = require('./postData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const bloggers = await Blogger.bulkCreate(bloggerData, {
    individualHooks: true,
    returning: true,
  });

  for (const post of postData) {
    await Post.create({
      ...post,
      blogger_id: bloggers[Math.floor(Math.random() * bloggers.length)].id,
    });
  }

  process.exit(0);
};

seedDatabase();