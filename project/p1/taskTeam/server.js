const express=require('express');
const app=express();

const path= require('path');
// Getting our POSTS routers
const posts = require('./server/routes/posts');
//
const port=process.env.PORT || 3000;

app.use(express.static(path.join(__dirname,'dist')));
// Using middeleware
app.use('/posts',posts);


// Catch all other routes request and return it to the index
app.get('*', (req, res)=>{
  res.sendFile(path.join(__dirname,'dist/index.html'))
});

app.listen(port, (req, res) => {
  console.log("server run");
});
