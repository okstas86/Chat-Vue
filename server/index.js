const express = require('express')
const app = express()
const PORT = 5000
const http = require('http')
const server = http.createServer(app)
const cors = require('cors')
const io = require('socket.io')(http, {
  cors: {
    origin: "*",
  }
})


app.get('api',(req, res) => {
  res.json({
    message: 'Hello',
  })
})

io.on('connection', (socket) => {
  console.log(`${socket.id} user connected`)
  socket.on('disconnect', () =>
    console.log(`${socket.id} user disconnected`)
    )
})


server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})