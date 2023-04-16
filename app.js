// console.log('Hello world');
const express = require('express');
const app = express();
// app.get('/no', (req, res)=>{
//     res.send('<h1>Hello world</h1>');
// });
app.get('/', (req, res)=>{
    res.sendFile('./views/index.html',{root:__dirname});
});
app.get('/about', (req, res)=>{
    res.sendFile('./views/about.html',{root:__dirname});
});
app.get('/about-us', (req, res)=>{
    res.status(301).redirect('/about');
});
//404 page

//middleware

app.use((req, res)=>{
    res.status(404).sendFile('./views/404.html',{root:__dirname});
});
//listen for requests
app.listen(4000,'0.0.0.0',()=>{
    console.log('listening on port 4000');
});
// console.log(__dirname)