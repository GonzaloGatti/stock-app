const express = require('express');
const app = express();

app.get('/', (req,res)=>{
    console.log("Peticion recibida");
    res.send("Hola mundo")
})

app.listen(4000, ()=>{
    console.log("App escuchando en el puerto 4000")
})