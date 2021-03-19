const express = require('express');
const {hostDetails} = require('../middlewares/host-details');

const Blog = require('../models/blog');
// express app
const router = express.Router();

router.get('/', (req, res) => {

    res.redirect('/blogs');

});

router.get('/about', hostDetails, (req, res) => {
    res.render('about', {
        title: 'About'
    });
});

// Blog Routes
router.get('/blogs', (req, res) => {

    Blog.find()
        .then((blogs) => {
            res.render('index', {
                title: 'Home', blogs
            });
        })
        .catch((error) => {

        });

});

router.get('/blog/:id', (req, res) => {
    Blog.findById(req.params.id)
        .then((blog) => {
            res.render('details', {
                title: 'Details', blog
            })
        })
        .catch((error) => {

        });
});

router.delete('/blog/:id', (req, res) => {
    const id = req.params.id;
    Blog.findByIdAndDelete(id)
        .then((result) => {
            res.json({
                redirect: `/blogs`
            });
        })
        .catch((error) => {
            console.log(error);
        });
});

router.get('/blogs/create', (req, res) => {
    res.render('create', {
        title: 'Create Blog'
    });
});

router.post('/blogs/create', (req, res) => {
    const blog = new Blog(req.body);
    blog.save()
        .then((result) => {
            res.redirect('/blogs');
        })
        .catch((error) => {

        });
});

module.exports = {
    router
};

