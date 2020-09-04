const express = require('express');
const app = express();

app.use((req,res,next)=>{
    console.log(req.path)
    next();
})

app.get('/members/:username',(req,res)=>{
    return res.send(`<h1>Hello ${req.params.username}</h1>`)
})

app.listen(8001,()=>{
    console.log('App running');
})