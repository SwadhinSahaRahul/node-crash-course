const express = require('express');
const {hostDetails} = require('../middlewares/host-details');
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

module.exports = {
    router
};
