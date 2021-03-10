const express = require('express');
const {hostDetails} = require('../middlewares/host-details');

const Blog = require('../models/blog');
// express app
const router = express.Router();

router.get('/', (req, res) => {
    // res.send(`<p>Home Page</p>`);
    //res.sendFile('./views/index.html', {root: __dirname});
    const blogs = [
        {title: 'Blog1', snippet: "Blog Snippet1"},
        {title: 'Blog2', snippet: "Blog Snippet2"},
        {title: 'Blog3', snippet: "Blog Snippet3"},
    ];

    res.render('index', {
        title: 'Home', blogs
    });
});


router.get('/about', hostDetails, (req, res) => {
    res.render('about', {
        title: 'About'
    });
});

router.get('/blogs/create', (req, res) => {
    res.render('create', {
        title: 'Create Blog'
    });
});

router.post('/blogs/create', (req, res) => {
    const blog = new Blog({
        title: req.params.title
    });
    blog.save();
});

module.exports = {
    router
};

