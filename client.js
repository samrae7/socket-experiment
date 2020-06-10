"use strict";

const io = require("socket.io-client");

const socket = io("http://localhost:3000");

socket.on("connect", function () {
  console.log("client connected");
});

socket.on("greeting-from-server", function ({ message }) {
  console.log("Client received from server: ", message);
});

socket.emit("greeting-from-client", {
  message: "Hey there this is the client",
});
socket.on("disconnect", function () {
  console.log("client disconnected");
});
