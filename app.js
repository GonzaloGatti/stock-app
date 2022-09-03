const express = require('express');
const app = express();
require('dotenv').config();

app.get('/', (req,res)=>{
    console.log("Peticion recibida");
    res.send("Hola mundo sin .env")
})

const PORT = process.env.PORT || 4000;

app.listen(PORT, ()=>{
    console.log(`App escuchando en el puert ${PORT}`)
})