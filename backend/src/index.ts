import express from "express";
import cors from "cors";
import { createServer } from "http";
import {Server} from "socket.io";
import dotenv from "dotenv";
import connectDB from "./config/db";
import pollRoutes from "./routes/pollRoutes"


dotenv.config();

const app = express();
const server = createServer(app)

const io = new Server(server,{cors:{origin: "*"}});


app.use(cors());
app.use(express.json());

//websocket connection
io.on("connection",(socket) => {
    console.log("New client connected");
    socket.on("disconnect",() => console.log("client disconnected"))
})

//db connection
connectDB()


const PORT = process.env.PORT || 5000;

//middlewares
//routes

app.use("/api/polls",pollRoutes)






console.log("just before listening to server")
server.listen(PORT,() => console.log("server is running on port 5000"))