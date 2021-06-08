import express, {Request, Response} from 'express';
const router = express.Router();

import {BadRequestError} from '../errors/badRequestError';
import {checkVin} from '../utils//middleware/checkVin'


import {getSpecs} from '../utils/external_api'


//requires vin or model 

router.get('/', [checkVin],(req:Request, res:Response) => {
    
    console.log();

  res.send("cheching specs")
   

//const response = await getMarketVal(vin)
    // console.log(response);
    
    // res.send(response)
})


module.exports = router;

