import {Request, Response, NextFunction} from 'express';
import {BadRequestError} from '../../errors/badRequestError'

export function checkVin(req:Request, res:Response, next:NextFunction){
//check vin 
if(!req.query.vin)
throw new BadRequestError("missing Vin") 

var letterNumber = /^[0-9a-zA-Z]+$/;
let vin = req.query.vin.toString();
console.log(vin.match(letterNumber));
if(!vin.match(letterNumber) || vin.length < 17){
console.log("did not match")
throw new BadRequestError("vin is 17 characters containing 0-9 and a-z");  
}
//TODO: check vin requirements before moving on 
next();
}

