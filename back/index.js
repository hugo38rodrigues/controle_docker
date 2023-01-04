const express = require('express')
const mongoose = require("mongoose");
const app = express()
const port = 3080

// Set up default mongoose connection

mongoose.connect('mongodb://root:example@mongo:27017');
// Bind connection to error event (to get notification of connection errors)

app.get('/', (req, res) => {
    // Get the default connection
    const db = mongoose.connection;
    db.on("error", console.error.bind(console, "MongoDB connection error:"));
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
