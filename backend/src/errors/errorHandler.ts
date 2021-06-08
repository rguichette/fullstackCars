import { Request, Response, NextFunction } from 'express';
import {CustomError} from "./customError";

export const errorHandler = (err:Error,req: Request, res:Response, next:NextFunction) =>{
console.log("handling error ");
//     if(err instanceof CustomError){
//     console.log("hey")
//   return  res.send("handled needs work")
// }
if(err instanceof CustomError){
    console.log("error................................................................")
    res.send(err.errorMessage())
}
// console.log(err)
// return res.send("helloooo error handler")

}