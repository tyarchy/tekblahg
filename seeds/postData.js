const { Post } = require('../models');

const postdata =
[
  {
    "postTitle": "Something Stinks",
    "postContent": "Who done it?",
    "userId": 1
  },
  {
    "postTitle": "what so reisty",
    "postContent": "those eggs are rotten",
    "userId": 2
  },
  {
    "postTitle": "JP is a bit non-descript",
    "postContent": "Its his glasses",
    "userId": 3
  }
];

const seedPost = () => Post.bulkCreate(postdata);

module.exports = seedPost;