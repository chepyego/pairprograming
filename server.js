const express=require('express');
const bodyParser = require('body-parser');
const  hostname= 'localhost'
const port=8080;


const app =express();

app.use(bodyParser());
app.get('/', (req,res)=>{
    res.send('helo world')
}   )
app.post('/add' ,(req, res)=>{
    let name=req.body.name;
    let email=req.body.email;
    let age =req.body.age;

    var resp = {
        name: name,
        email: email,
        age: age
    };
     console.log(resp);
    res.send(resp);
})


app.listen( port, function () {
    console.log('its working')
})
