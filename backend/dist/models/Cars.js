"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarModel = void 0;
var mongoose_1 = require("mongoose");
var carSchema = new mongoose_1.Schema({
    Year: { type: Number },
    Make: { type: String, required: true },
    Model: { type: String, required: true },
    Category: { type: String, required: true },
});
exports.CarModel = mongoose_1.model('Cars', carSchema);
