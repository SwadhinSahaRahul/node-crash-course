const express = require('express');
const mongoose = require('mongoose');
//const morgan = require('morgan');

// express app
const app = express();

// connect to MongoDB
const dbURI = 'mongodb+srv://root:Rahul04312173478@nodecrashcourse.1cxxb.mongodb.net/NodeCrashCourse?retryWrites=true&w=majority';
mongoose.connect(dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then((result) => {
        console.log('Connected to db.');
        // Listen for requests
        app.listen(3000);
    })
    .catch((error) => {
        console.log(error);
    });
// register view eninge

app.set('view engine', 'ejs');

app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));

//app.use(morgan('combined'));

const {router: commonRoutes} = require('./routes/CommonRoutes');
const {router: blogRoutes} = require('./routes/BlogRoutes');

app.use(commonRoutes);
app.use('/blogs', blogRoutes);

app.use((req, res) => {
    res.status(404).render('404', {
        title: 'Not Found'
    });
});
