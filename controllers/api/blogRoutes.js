const router = require('express').Router();
const { Blog } = require('../../models');
const withAuth = require('../../utils/auth');

// CREATE new blog
router.post('/', withAuth, async (req, res) => {
    try {
        //collects the post data
        const blogData = await Blog.create({
            title: req.body.title,
            blog_content: req.body.blog_content,
            user_id: req.session.user_id
        });

        res.status(200).json(blogData);

    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// UPDATE new blog
router.put('/:id', async (req, res) => {
    // update a post by its `id` value
    try {
        const blogData = await Blog.update({
            title: req.body.title,
            blog_content: req.body.blog_content,
        }, {
            where: {
                id: req.params.id,
            },
        });
        if (!blogData[0]) {
            res.status(404).json({ message: 'No information was sent, try again' });
            return;
        }
        res.status(200).json(blogData);
    } catch (err) {
        res.status(500).json(err);
    }
});


// DELETE BLOG
router.delete('/:id', async (req, res) => {
    // delete a blog by its `id` value
    try {
        const blogData = await Blog.destroy({
            where: {
                id: req.params.id,
            },
        });

        if (!blogData) {
            res.status(404).json({ message: 'No blog found with that id!' });
            return;
        }

        res.status(200).json(blogData);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;