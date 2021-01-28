const express = require('express');

const morgan = require('morgan');

// express app
const app = express();

// register view eninge

app.set('view engine', 'ejs');

// Listen for requests
app.listen(3000);

app.use(express.static('public'));
app.use(morgan('combined'));

/*app.use((req, res, next) => {
    console.log('new request made');
    console.log(req.hostname);
    console.log(req.path);
    console.log(req.method);
    next();
});*/


app.get('/', (req, res) => {
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

/*app.use((req, res, next) => {
    console.log('in the next middleware');
    next();
});*/

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About'
    });
});

app.get('/blogs/create', (req, res) => {
    res.render('create', {
        title: 'Create Blog'
    });
});


app.use((req, res) => {
    res.status(404).render('404', {
        title: 'Not Found'
    });
});

