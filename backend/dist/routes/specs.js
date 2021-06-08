"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var router = express_1.default.Router();
var checkVin_1 = require("../utils//middleware/checkVin");
//requires vin or model 
router.get('/', [checkVin_1.checkVin], function (req, res) {
    console.log();
    res.send("cheching specs");
    //const response = await getMarketVal(vin)
    // console.log(response);
    // res.send(response)
});
module.exports = router;
