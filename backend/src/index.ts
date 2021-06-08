import { read } from "fs";


import express,{Request, Response} from 'express'

const app = express();
const mongoose = require('./db_config')

const marketValue = require("./routes/marketValue");
const specs = require("./routes/specs")

import {getImages, getMarketVal} from "./external_api"
import {errorHandler} from './errors/errorHandler'


app.use("/marketvalue", marketValue);
app.use("/specs", specs);

app.all("*", (req,res)=>{
    res.send("route not found");
})

app.use(errorHandler);

// getImages("make", "model", "something");
// // getMarketVal("JTDZN3EU0E3298500")



// app.get('/', (req:Request, res:Response) =>{
//     res.send("server up and running")
// })

app.listen(4000, ()=>{
    console.log("listening")
})




