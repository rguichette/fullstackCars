import { Request, Response, NextFunction } from 'express';
import {CustomError} from "./customError";

export const errorHandler = (err:Error,req: Request, res:Response, next:NextFunction) =>{

//     if(err instanceof CustomError){
//     console.log("hey")
//   return  res.send("handled needs work")
// }
if(err instanceof CustomError){
    res.send("testing error handler")
}
// console.log(err)
// return res.send("helloooo error handler")

}