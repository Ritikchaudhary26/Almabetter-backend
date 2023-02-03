const express = require("express");

const app = require("./src/app")
const mongoose = require('mongoose');
const port = 3000;

// Connect to DATABASE
const DATABASE_URL = "mongodb+srv://ritikchaudhary11:3fsRORJewHoBXkdK@cluster0.hux0x86.mongodb.net/test";
mongoose.connect(DATABASE_URL,{ useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection
db.on('error', (err) => console.log(err))
db.once('open', () => console.log('connected to database'))


// Start Server 
app.listen(port, () => console.log(`App listening on port ${port}!`))