import express from 'express';
const router = express.Router();

import {BadRequestError} from '../errors/badRequestError';

import {getMarketVal} from '../utils/external_api'
import {checkVin} from'../utils/middleware/checkVin'


//requires vin or model 

router.get('/',checkVin, async (req, res, next) => {
    

    


//TODO: check vin requirements before moving on 
const vin = req.query.vin;
//    console.log(vin)

// const response = await getMarketVal(vin)
    // console.log(response);
    
    // res.send(response)

    res.send("checking market value")
})


module.exports = router;

