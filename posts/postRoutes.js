const express = require('express');

const Posts = require('../data/db');

const router = express.Router();

// Routes chained off of base /api/posts

router.post('/', (req, res) => {
  if (!req.body.title || !req.body.contents) {
    res.status(400).json({ errorMessage: "Please provide title and contents for the post." });
  } else {
    Posts.insert(req.body)
    .then(posts => {
      res.status(201).json(posts);
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({ error: "There was an error while saving the post to the database" });
    });
  };
});

router.post('/:id/comments', (req, res) => {
  if (!req.body.text) {
    res.status(400).json({ errorMessage: "Please provide text for the comment." });
  } else {
    Posts.findPostComments(req.params.id)
    .then(post => {
      if (post) {
        res.status(201).json(post);
      } else {
        res.status(404).json({ message: "The post with the specified ID does not exist." });
      };
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({ error: "There was an error while saving the comment to the database" });
    });
  };
});

router.get('/', (req, res) => {
  Posts.find()
    .then(posts => {
      res.status(200).json(posts);
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({ error: "The posts information could not be retrieved." });
    });
});

router.get('/:id', (req, res) => {
  Posts.findById(req.params.id)
    .then(post => {
      if (post) {
        res.status(200).json(post);
      } else {
        res.status(404).json({ message: "The post with the specified ID does not exist." });
      };
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({ error: "The post information could not be retrieved." });
    });
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