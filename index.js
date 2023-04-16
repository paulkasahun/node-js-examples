const express = require('express');
const morgan = require('morgan');
const app = express();
app.listen(3000,()=>{console.log('listening on port 3000')})
app.set('view engine', 'ejs');
app.use(morgan("dev"))//third party midleware
app.get('/', (req, res)=>{
  
   let blogs = [
   //   {
   //     title: "How to use EJS to template your Node application",
   //     snippet: "EJS is a simple templating language that lets you generate HTML markup with plain JavaScript."
   //   },
     {
       title: "Understanding Express Template Engines",
       snippet: "Express can handle server-side template engines that allow you to populate your HTML pages with dynamic data and share templated pieces with other web pages."
     },
     {
       title: "What are the pros and cons of both Jade and EJS for Node.js templating?",
       snippet: "Jade and EJS are two popular template engines for Node.js, but they have different syntaxes, features, and performance. Learn about their advantages and disadvantages in this article."
     }
   ];
   


   res.render('index',{title:'Home',blogs});
});
// app.use((req,res,next)=>{
//    console.log(req.hostname);
//    console.log(req.method);
//    console.log(req.path);
//    next();//without this the next middleware cannot be known
// });
app.get('/about', (req, res)=>{
   res.render('about',{title:'About'});
});
app.get('/about-us', (req, res)=>{
   res.redirect('about');
});
app.get('/create', (req, res)=>{
   res.render('create',{title:'Create New blog'});
});
//404

app.use((req,res)=>{
   res.status(404).render('404',{title:'404'});
});

