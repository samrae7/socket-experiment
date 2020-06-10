"use strict";

const ioHook = require("iohook");
const server = require("http").createServer();
const socketIO = require("socket.io");

server.listen(3000, function () {
  console.log("Server listening on port 3000 now");
});

const io = socketIO(server);

io.on("connection", (socket) => {
  console.log("Server connected to client");
  socket.on("greeting-from-client", function ({ message }) {
    console.log("Client responded:", message);
  });
  socket.emit("greeting-from-server", {
    message: "hi this this the first message from the server",
  });

  ioHook.on("mousemove", (event) => {
    console.log("foo", event);
    socket.emit("mouseevent-from-server", {
      message: event.x,
    });
  });

  ioHook.start();
});
