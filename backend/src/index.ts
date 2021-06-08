import { read } from "fs";


import express,{Request, Response} from 'express'

const app = express();
const mongoose = require('./db_config')

import { specs, history, marketValue} from './routes'

import {getImages, getMarketVal} from "./utils/external_api"
import {errorHandler} from './errors/errorHandler'


app.use("/marketvalue", marketValue);
app.use("/specs", specs);
app.use("/history", history)

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




