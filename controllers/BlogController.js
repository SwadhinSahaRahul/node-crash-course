const Blog = require('../models/Blog');

const index = (req, res) => {
    Blog.find()
        .then((blogs) => {
            res.render('blogs/index', {
                title: 'Home', blogs
            });
        })
        .catch((error) => {

        });
};

const create = (req, res) => {
    res.render('blogs/create', {
        title: 'Create Blog'
    });
};

const store = (req, res) => {
    const blog = new Blog(req.body);
    blog.save()
        .then((result) => {
            res.redirect('/blogs');
        })
        .catch((error) => {

        });
};

const details = (req, res) => {
    Blog.findById(req.params.id)
        .then((blog) => {
            res.render('blogs/details', {
                title: 'Details', blog
            })
        })
        .catch((error) => {

        });
};

const remove = (req, res) => {
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
};

module.exports = {
    index,
    create,
    store,
    details,
    remove
};