const express = require('express')();
const http = require('http').Server(express);
const bodyParser = require('body-parser');
var cors = require("cors");
const options = { cors: { origin: "*" } };
const Socketio = require('socket.io')(http, options);

app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());
app.use(bodyParser.json());

Socketio.on("connection", (socket) => {

}

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.get('/', (req, res) => {
    res.send('Hello Restaurant Tycon!')
});

app.use('/api', restaurantRouter)

http.listen(3001, ()=> {
    console.log('listening on port 3001')
});