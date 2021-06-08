"use strict";
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test', { useNewUrlParser: true, useUnifiedTopology: true }).then(function () {
    console.log("db connected...");
}).catch(function (e) {
    console.log("error...", e);
});
module.exports = mongoose;
// export default mongoose
