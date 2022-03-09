const express = require('express')
const app = express()

app.get("/", function(req, res){
    res.send("Welcome to the third party modules")
})

app.get("/user", function(req, res){
    res.send("Welcome to the user endpoint")
})

const PORT =3001

app.listen(PORT, function(){
    console.log(`Server listening at PORT ${PORT}`)
})