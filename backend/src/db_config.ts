
 const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true, useUnifiedTopology: true}).then(()=>{
    console.log("db connected...")
}).catch((e:Error)=>{
    console.log("error...", e);
});

module.exports = mongoose; 

// export default mongoose





