const express = require('express');
const app = express()
const PORT = process.env.PORT || 8008;

app.use(express.static(__dirname + '/'))

app.get('/', function (req, res){
    res.sendFile(__dirname + "/views/home.html")
})
app.get('/', function(req,res){
    res.sendFile(__dirname + "/views/register.html")
})
app.listen(PORT, () =>{
    console.log("Servidor iniciado en el port", PORT)
})