const express = require('express');
const bodyParser = require("body-parser");
//Generates a new id to be assigned to posts
const { randomBytes } = require("crypto");
const cors = require("cors");


const app = express();
app.use(bodyParser.json());
app.use(cors());


const port = 4000

//store all posts
const posts = {};

app.get('/posts', (req, res) => {
  res.send(posts);
});

app.post("/posts", (req,res) => {
  //Randomly generate an id for every user post
    const id = randomBytes(4).toString("hex");
    const { title } = req.body;
    posts[id] = {
      id, title
    };

    res.status(201).send(posts[id]);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})