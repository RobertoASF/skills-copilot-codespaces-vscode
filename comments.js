// Create web server
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var fs = require('fs');

app.use(bodyParser.json());

// Read from json file
var comments = JSON.parse(fs.readFileSync('comments.json', 'utf8'));

// Get all comments
app.get('/comments', function(req, res) {
  res.json(comments);
});

// Get comment by id
app.get('/comments/:id', function(req, res) {
  var comment = comments.filter(function(comment) {
    return comment.id == req.params.id;
  });
  if (comment.length > 0) {
    res.json(comment[0]);
  } else {
    res.sendStatus(404);
  }
});

// Add a comment
app.post('/comments', function(req, res) {
  var comment = {
    id: Date.now()
};
    comments.push(comment);
    res.json(comment);
    });
