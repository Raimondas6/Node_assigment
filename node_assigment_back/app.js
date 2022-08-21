const express = require("express")
const app = express()
const cors = require("cors")
const http = require('http').createServer(app)
const socketIo = require('socket.io')
const mongoose = require("mongoose");
const io = socketIo(http, {cors: {origin: "http://localhost:3000"}})

mongoose.connect("mongodb+srv://admin:admindatabase@cluster0.kpo13.mongodb.net/?retryWrites=true&w=majority")
    .then(res => {
        console.log("connected")
    }).catch(e => {
    console.log(e)
})

http.listen(4000)

let requests = []


app.use(cors())
app.use(express.json())

const router = require("./router/mainRouter")
app.use("/", router)

app.set('socket', io)

io.on("connect", () => {

})
