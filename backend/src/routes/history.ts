import express from 'express';
const router = express.Router();

import {BadRequestError} from '../errors/badRequestError';

import {getMarketVal} from '../utils/external_api'
import {checkVin} from'../utils/middleware/checkVin'


//requires vin or model 

router.get('/',checkVin, async (req, res, next) => {

const vin = req.query.vin;

    
    res.send("cheching vin");
})


module.exports = router;

