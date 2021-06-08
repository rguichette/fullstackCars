"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMarketVal = exports.getHistory = exports.getImages = void 0;
var _fetch = require('node-fetch');
var API_KEY = "ob95jyqil_ai1dlxehg_jsl27qn7b";
var BASE_URI = "http://api.carsxe.com";
var getImages = function (_, make, model, year) {
    console.log("getting images");
    return;
};
exports.getImages = getImages;
var getHistory = function () {
};
exports.getHistory = getHistory;
var getMarketVal = function (vin) {
    // api + key
    var URI = BASE_URI + ("/marketvalue?key=" + API_KEY + "&vin=" + vin + "&format=json");
    _fetch(URI).then(function (data) {
        return data.json();
    }).then(function (data) { return data; });
};
exports.getMarketVal = getMarketVal;
