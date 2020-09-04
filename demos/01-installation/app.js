const express = require('express');
const app = express();

//Definition d'un route
app.get('/', (req,res,next) =>{
    console.log(req.hostname)
    res.send('Hello world');
})

app.get('/users/:name/:id', (req,res)=>{
    // res.send('user:' + JSON.stringify(req.params))
    res.json(req.params)
})

app.listen(8001,()=>{
    console.log('APplication started and listening at port 8001')
})