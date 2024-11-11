const express = require("express");
const http = require("http");
const socketIo = require("socket.io");
const cors = require("cors");
const ROOM_ID = 12345;
const app = express();

app.use(
  cors({
    origin: "*",
  })
);

const server = http.createServer(app);
const io = socketIo(server, {
  cors: {
    origin: "*",
  },
});

app.get("/api", (req, res) => {
  return res.json("I am working fine");
});

io.on("connection", (socket) => {
  console.log("New user connected");
  socket.join(ROOM_ID);
  socket.on("draw", (data) => {
    socket.to(ROOM_ID).emit("drawn", data);
  });

  socket.on("disconnect", () => {
    console.log("User disconnected");
  });
});

const PORT = process.env.PORT || 5001;

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
