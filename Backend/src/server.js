import express from "express";
import bodyParser from "body-parser";
import viewEngine from "./config/viewEngine";
import initWebRoutes from './routes/web';
require('dotenv').config();
import cors from 'cors';
import connectDB from "./config/connectDB";
let app = express();

//config appnpm start


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))
const corsOptions = {
    origin: 'http://localhost:3000',
    credentials: true,
  };
  
  app.use(cors(corsOptions));
viewEngine(app);
initWebRoutes(app);


connectDB();


let port = process.env.PORT || 6969;
//Port === undefined => port = 6969

app.listen(port, () => {
    //callback
    console.log("Backend Nodejs is runing on the port : " + port)
})