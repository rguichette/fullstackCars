"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var app = express_1.default();
var mongoose = require('./db_config');
var marketValue = require("./routes/marketValue");
var specs = require("./routes/specs");
var errorHandler_1 = require("./errors/errorHandler");
app.use("/marketvalue", marketValue);
app.use("/specs", specs);
app.all("*", function (req, res) {
    res.send("route not found");
});
app.use(errorHandler_1.errorHandler);
// getImages("make", "model", "something");
// // getMarketVal("JTDZN3EU0E3298500")
// app.get('/', (req:Request, res:Response) =>{
//     res.send("server up and running")
// })
app.listen(4000, function () {
    console.log("listening");
});
