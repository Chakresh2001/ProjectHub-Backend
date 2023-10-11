const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Router = require('./Routes/server.routes');
const app = express()
app.use(express.json())
app.use(cors())
app.use("/", Router)


app.listen(8080, async () => {
    await mongoose.connect("mongodb+srv://chakresh1234:chakresh1234@cluster0.cqppmvp.mongodb.net/ProjectHub?retryWrites=true&w=majority")
    console.log("server started on 8080")
})