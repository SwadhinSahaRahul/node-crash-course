const express = require('express');
const {hostDetails} = require('../middlewares/host-details');

const Blog = require('../models/blog');
// express app
const router = express.Router();

router.get('/', (req, res) => {
    // res.send(`<p>Home Page</p>`);
    //res.sendFile('./views/index.html', {root: __dirname});
    /*const blogs = [
        {title: 'Blog1', snippet: "Blog Snippet1"},
        {title: 'Blog2', snippet: "Blog Snippet2"},
        {title: 'Blog3', snippet: "Blog Snippet3"},
    ];*/


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
            res.send(blog)
        })
        .catch((error) => {

        });
});

router.get('/about', hostDetails, (req, res) => {
    res.render('about', {
        title: 'About'
    });
});

module.exports = {
    router
};

