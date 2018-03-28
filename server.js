const express=require('express');
const  hostname= 'localhost'
const port=8080;


const app =express();


app.get('/', function(req,res){
    res.send('helo world')
}   )


app.listen( port, function () {
    console.log('its working')
})
