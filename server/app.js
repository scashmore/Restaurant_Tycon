const express = require('express')();
const http = require('http').Server(express);
var cors = require("cors");
const options = { cors: { origin: "*" } };
const Socketio = require('socket.io')(http, options);

http.listen(3001, ()=> {
    console.log('listening on port 3001')
});