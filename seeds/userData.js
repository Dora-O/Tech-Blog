const { User } = require('../models');

const userdata = [
{
    username: 'KyleTheDestroyer',
    password: 'password123'
},
{
    username: 'MannyMoon',
    password: 'password123'
},
{
    username: 'daddyRath',
    password: 'password123'
},
{
    username: 'DoraStark',
    password: 'password123'
},
];

const seedUser = () => User.bulkCreate(userdata);

module.exports = seedUser;