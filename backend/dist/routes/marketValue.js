"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var router = express_1.default.Router();
var badRequestError_1 = require("../errors/badRequestError");
//requires vin or model 
router.get('/', function (req, res) {
    throw new badRequestError_1.BadRequestError("missing Vin");
    if (!req.params) {
    }
    // res.send("ready to go!")
});
module.exports = router;
