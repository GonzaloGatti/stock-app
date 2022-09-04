const express = require('express');
const app = express();
require('dotenv').config();

app.get('/', (req,res)=>{
    console.log("Peticion recibida");
    res.send("Hola mundo")
})

const PORT = process.env.PORT;

app.listen(PORT, ()=>{
    console.log(`App escuchando en el puerto ${PORT}`)
})