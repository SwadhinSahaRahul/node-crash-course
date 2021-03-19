const express = require('express');

const router = express.Router();

const BlogController = require('../controllers/BlogController');

router.get('', BlogController.index);

router.get('/create', BlogController.create);

router.post('/create', BlogController.store);

router.get('/:id', BlogController.details);

router.delete('/:id', BlogController.remove);

module.exports = {
    router
};
