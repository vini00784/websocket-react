import express from "express"
import http from "http"
import { Server } from "socket.io"

const app = express()
const server = http.createServer(app)
const io = new Server(server, { cors: {origin: "http://localhost:5173"} })

const PORT = 3030

server.listen(PORT, () => console.log(`Server running on ${PORT}`))