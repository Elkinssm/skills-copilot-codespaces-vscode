// Create web server
// Create a server that listens on port 3000 and listens for a request to the /comments endpoint. When a request is made to /comments, the server should respond with an array of comments. The array should have at least 2 comments.

const express = require('express');
const app = express();

app.get('/comments', (req, res) => {
  res.json([
    { username: 'Todd', comment: 'I love this movie!' },
    { username: 'Sally', comment: 'I love this movie!' }
  ]);
});

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});

