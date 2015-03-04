'use strict';
let http      = require('http'),
    koa       = require('koa'),
    serve     = require('koa-static'),
    marko     = require('marko'),
    socketIo  = require('socket.io'),
    question  = require('./question');

let app, server, io;

app = koa();

app.use(serve(__dirname + '/public'));

app.use(function *(){
  this.body = marko.load('./views/index.marko').stream();
  this.type = 'text/html';
});

server = http.Server(app.callback());

io = socketIo(server);

question.setup(io);

server.listen(3000);