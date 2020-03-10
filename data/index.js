const express = require('express');

const postRoutes = require('./posts/postRoutes');

const server = express();

server.use('/posts', postRoutes);

server.listen(5000, () => console.log('API running on port 5000'));