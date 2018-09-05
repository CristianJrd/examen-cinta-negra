const express = require('express');
const bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.get('/', (req,res)=>{
    res.send('Estoy funcionando, sí sirvo :D');
})

app.listen(8000, ()=> console.log('Server on port 8000'));