const express = require("express");
const { createServer } = require("http");
const { Server } = require("socket.io");

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer);

io.on("connection", (client) => {
    console.log( "cleint came",)


client.emit("data", {data: "dataku"})

});

httpServer.listen(3000, console.log("3000 da run"));