import { Schema, model, Document } from 'mongoose';

// 1. Create an interface representing a document in MongoDB.
interface Car {

    Year: Date,
    Make: string,
    Model: string,
    Category: string,

}

interface CarModel extends Car, Document {}


const carSchema = new Schema({
   
    Year: {type: Number},
    Make: { type: String, required: true },
    Model: { type: String, required: true },
    Category: { type: String, required: true },

  });
  
  export const CarModel = model<CarModel>('Cars', carSchema);

