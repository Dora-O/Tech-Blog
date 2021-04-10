const { Comment } = require('../models');

const commentdata = [
    {
        user_id: '1',
        blog_id: '1',
        text: 'Wow! This is awesome!',
    },
    {
        user_id: '2',
        blog_id: '2',
        text: 'This is pretty cool!',
    },
    {
        user_id: '3',
        blog_id: '1',
        text: 'Great post!',
    },
    {
        user_id: '4',
        blog_id: '2',
        text: 'Love your post!',
    },
];

const seedComment = () => Comment.bulkCreate(commentdata);

module.exports = seedComment;