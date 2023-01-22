const express = require("express");
const app = express();
const db = require("./config/database");
// db();

// app.use(express.static("node_modules"));
// app.use(express.json());

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
});

const RouteEventsLocation = require("./routes/route-event-location");
app.use("/", RouteEventsLocation);

// app.get('/', (req, res) => {
//     res.send('jj')
// })

app.listen(5000, () => {
    console.log(" app is wokring on port 5000");
});