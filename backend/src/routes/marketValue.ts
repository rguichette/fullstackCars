import express from 'express';
const router = express.Router();

import {BadRequestError} from '../errors/badRequestError';



//requires vin or model 

router.get('/', (req, res) => {
    
  throw new BadRequestError("missing Vin") 
  
    if(!req.params){
}



    // res.send("ready to go!")
})


module.exports = router;

