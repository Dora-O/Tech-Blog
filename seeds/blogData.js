const { Blog } = require('../models');

const blogdata = [
    {
        title: 'First Post',
        create_date: '02/22/2021',
        content: 'With the advancement in technology, one can now talk to anyone anywhere in the world.',
        id: 1,
    },
    {
        title: 'New Phone',
        create_date: '04/01/2021',
        content: 'I want to talk about the different type of phones and which ones are the best ones.',
        id: 2,
    },
];

const seedBlog = () => Blog.bulkCreate(blogdata);

module.exports = seedBlog;