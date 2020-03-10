const express = require('express');

const Posts = require('../data/db');

const router = express.Router();

// Routes chained off of base /api/posts

router.post('/', (req, res) => {
  res.status(201).json();
  res.status(400).json({ errorMessage: "Please provide title and contents for the post." });
  res.status(500).json({ error: "There was an error while saving the post to the database" });
});

router.post('/:id/comments', (req, res) => {
  res.status(201).json();
  res.status(400).json({ errorMessage: "Please provide text for the comment." });
  res.status(404).json({ message: "The post with the specified ID does not exist." });
  res.status(500).json({ error: "There was an error while saving the comment to the database" });
});

router.get('/', (req, res) => {
  res.status(200).json();
  res.status(500).json({ error: "The posts information could not be retrieved." });
});

router.get('/:id', (req, res) => {
  res.status(200).json();
  res.status(404).json({ message: "The post with the specified ID does not exist." });
  res.status(500).json({ error: "The post information could not be retrieved." });
});

router.get('/:id/comments', (req, res) => {
  res.status(200).json();
  res.status(404).json({ message: "The post with the specified ID does not exist." });
  res.status(500).json({ error: "The comments information could not be retrieved." });
});

router.delete('/:id', (req, res) => {
  res.status(200).json();
  res.status(404).json({ message: "The post with the specified ID does not exist." });
  res.status(500).json({ error: "The post could not be removed" });
});

router.put('/:id', (req, res) => {
  res.status(200).json();
  res.status(400).json({ errorMessage: "Please provide title and contents for the post." });
  res.status(404).json({ message: "The post with the specified ID does not exist." });
  res.status(500).json({ error: "The post information could not be modified." });
});

module.exports = router;