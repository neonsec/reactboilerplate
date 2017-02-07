const express = require('express');
const app = express();
const path = require('path');
app.use(express.static('public'));
app.get('/',(req,res)=>{
res.sendFile(path.join('public','index.html'));
})

app.listen(3000,()=>{
  console.log("Server started in 3000")
})
