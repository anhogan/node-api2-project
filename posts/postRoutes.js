const express = require('express');

const router = express.Router();

// Routes chained off of base /api/posts

router.post('/', (req, res) => {

});

router.post('/:id/comments', (req, res) => {

});

router.get('/', (req, res) => {

});

router.get('/:id', (req, res) => {

});

router.get('/:id/comments', (req, res) => {

});

router.delete('/:id', (req, res) => {

});

router.put('/:id', (req, res) => {

});

module.exports = router;