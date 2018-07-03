const express = require('express')
let app = express()

const http = require('http')
let server = http.createServer(app)

let socket = require('socket.io')
let io = socket(server)

server.listen(3000, () => {
  console.log('server on 3000 Port')
})

let chat = io.of('/chat').on('connection', (socket) => {
  console.log('connection') // 연결되면 connection 출력
})
