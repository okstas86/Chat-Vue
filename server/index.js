const express = require('express')
const app = express()
const PORT = 5000
const http = require('http')
const server = http.createServer(app)
const cors = require('cors')
const io = require('socket.io')(server, {
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
  socket.on('message', data =>
    io.emit('response',data)
  )
  socket.on('disconnect', () =>
    console.log(`${socket.id} user disconnected`)
    )
})


server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})