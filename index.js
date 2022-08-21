const express = require('express');

const app = express();

require('dotenv').config();

const PORT = process.env.PORT || 3000;

const posts = require('./posts');

app.get('/', (req, res) =>{
    res.send('Express is running')
})

app.get('/api/posts', (req, res) => {
    res.json(posts)
})

app.listen(PORT, () => {
    console.log("server is running, at http://localhost:"+PORT+"/")
})