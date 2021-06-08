"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkVin = void 0;
var badRequestError_1 = require("../../errors/badRequestError");
function checkVin(req, res, next) {
    //check vin 
    if (!req.query.vin)
        throw new badRequestError_1.BadRequestError("missing Vin");
    var letterNumber = /^[0-9a-zA-Z]+$/;
    var vin = req.query.vin.toString();
    console.log(vin.match(letterNumber));
    if (!vin.match(letterNumber) || vin.length < 17) {
        console.log("did not match");
        throw new badRequestError_1.BadRequestError("vin is 17 characters containing 0-9 and a-z");
    }
    //TODO: check vin requirements before moving on 
    next();
}
exports.checkVin = checkVin;
