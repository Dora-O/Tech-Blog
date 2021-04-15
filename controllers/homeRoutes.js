const router = require('express').Router();
const { User, Blog, Comment } = require('../models');
const withAuth = require('../utils/auth');

//renders homepage
router.get('/', async (req, res) => {
    try {
        const blogData = await Blog.findAll({
            include: [{
                model: Comment,
                attributes: ['id', 'text', 'blog_id', 'user_id', 'date'],
                include: {
                    model: User,
                    attributes: ['username']
                }
            },
            {
                model: User,
                attributes: ['username']
            }
            ]
        });
        // Serialize data so the template can read it
        const blogs = blogData.map((blog) => blog.get({ plain: true }));

        // Pass serialized data and session flag into template
        res.render('homepage', {
            blogs,
            logged_in: req.session.logged_in
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

//renders login page
router.get('/login', (req, res) => {
    if (req.session.logged_in) {
        res.redirect('/');
        return;
    }
    res.render('login');
});

//renders signup page
router.get('/signup', (req, res) => {
    if (req.session.logged_in) {
        res.redirect('/');
        return;
    }
    res.render('signup');
});

//renders dashboard 
router.get('/dashboard', withAuth, async (req, res) => {
    try {
        const userData = User.findByPk(req.session.user_id, {
            attributes: ['id', 'title', 'content', 'create_date'],
            include: [{
                model: Blog,
            }]
        })
    } catch (err) {
        res.status(500).json(err);
    }
});

//add a new blog
router.get('/addnewBlog', (req, res) => {
    res.render('AddNewPost');
});

//edit blog by id
router.get('/dashboard/edit/:id', withAuth, async (req, res) => {
    try {
        const blogData = Blog.findOne({
            where: { id: req.params.id },
            attributes: ['id', 'title', 'content', 'create_date'],
            include: [{ model: User, attributes: ['username'] },
            {
                model: Comment, attributes: ['id', 'text', 'blog_id', 'user_id', 'date'],
                include: {
                    model: User, attributes: ['username']
                }
            }]
        })
    } catch (err) {
        res.status(500).json(err);
    }
});

//open blog
router.get('/blog/:id', withAuth, async (req, res) => {
    try {
        const blogData = Blog.findOne({
            where: {
                id: req.params.id
            },
            attributes: ['id', 'content', 'title', 'create_date',],
            include: [{
                model: Comment,
                attributes: ['id', 'text', 'blog_id', 'user_id', 'date'],
                include: {
                    model: User,
                    attributes: ['username']
                }
            },
            {
                model: User,
                attributes: ['username']
            }]
        })
    } catch (err) {
        res.status(500).json(err);
    }
})

module.exports = router;