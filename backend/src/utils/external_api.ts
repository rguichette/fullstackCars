const _fetch = require('node-fetch');




const API_KEY = "ob95jyqil_ai1dlxehg_jsl27qn7b";
const BASE_URI = "http://api.carsxe.com";

export const getImages = function (_:any, make:string, model:string, year?:number): void{
    console.log("getting images");
return;
};

export const getHistory = function (){

}



export const getMarketVal = function (vin: string){
// api + key
const URI = BASE_URI +`/marketvalue?key=${API_KEY}&vin=${vin}&format=json`;
return _fetch(URI).then((data:any)=>{
    return data.json()
}).then((data:any)=>{
    return data
})
}

export const getSpecs = function (vin: string){
    const URI = BASE_URI +`/specs?key=${API_KEY}&vin=${vin}&format=json`;
return _fetch(URI).then((data:any)=>{
    return data.json()
}).then((data:any)=>{
    return data
})
}





