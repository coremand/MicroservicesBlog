const express = require('express');
const bodyPaser = require("body-parser");
const { randomBytes } = require("crypto");
const cors = require("cors")


const app = express()
const port = 4001

app.use(cors());
app.use(bodyPaser.json());

const commentsByPostId = {};

app.get('/posts/:id/comments', (req, res) => {
  res.send(commentsByPostId[req.params.id] || []);
});

app.post("/posts/:id/comments", (req, res) => {
    const commentId = randomBytes(4).toString("hex");

    const comments = commentsByPostId[req.params.id] || [];

    const { content } = req.body;
    console.log(content)
    comments.push({ id: commentId, content });

    commentsByPostId[req.params.id] = comments;

    res.status(201).send(comments)
    console.log(comments)
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})