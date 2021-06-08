"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = void 0;
var customError_1 = require("./customError");
var errorHandler = function (err, req, res, next) {
    //     if(err instanceof CustomError){
    //     console.log("hey")
    //   return  res.send("handled needs work")
    // }
    if (err instanceof customError_1.CustomError) {
        res.send("testing error handler");
    }
    // console.log(err)
    // return res.send("helloooo error handler")
};
exports.errorHandler = errorHandler;
