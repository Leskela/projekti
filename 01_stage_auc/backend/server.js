const express = require("express")
const mongoose =require("mongoose")

let app = express()

app.use(express.json())

const mongo_url = process.env.MONGODB_URL
const mongo_user = process.env.mongodb_user
const mongo_password = process.env.mongodb_password

let port = process.env.PORT || 3001

const url ="mongodb+srv://"+mongo_user+""+mongo_password+"@"+mongo_url+"/auctiontestbase?retryWrites=true&w=majority"

mongoose.connect(url)
.then(()=>("Yhteys on muodostettu - Connected to MongoDB")),
(error) => console.log("Yhteys ei onnistunut - tarkasta asia")

console.log(url)

app.listen(port)
console.log("Backline rullaa portissa", port)
