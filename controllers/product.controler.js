const router = require('express').Router();
const Product = require("../models/product.model")
const pincode = require('../Data/pincode')
const rates = require("../Data/rates")
router.get("/", async(req, res) =>{
    try {
        const Products = await Product.find();
        res.status(200).json(Products);
    } catch (err) {
        res.status(404).json(err.message);
    }
})

router.post("/", async(req, res) =>{
    // const newProduct = new Product(req.body);
    try {
        // const product = await newProduct.save();
        const item = req.body.pincode
        const deliveryType = req.body.deliveryType;
        let weight = (req.body.weight);
        // newDatas = pincode.filter((item) => item.CustomerPincode !== forDeletedData[i]);
        for(var i = 0; i < pincode.length; i++){
            if(pincode[i]['Customer Pincode'] == item){
                res.status(200).json(req.body.pincode);
                const zone = pincode[i]['Zone']
                for(var j = 0; j < rates.length; j++){
                    if(deliveryType == rates[j]['Rate Type'] && zone == rates[j]['Zone']){
                        console.log(rates[j])
                        // if(weight.length>3){
                        //     if(weight[3]>5){
                                
                        //     }else{
                        //         weight[3] = 0
                        //     }
                        //     console.log(weight, "more")
                        // }else{
                        //     console.log(weight, "less")
                        // }
                        if(weight > 0.5){
                            
                            // console.log(rates[j], weight)
                            // console.log((0.5 * ( +rates[j]['First 0'])) , (( +weight) -0.5))
                            console.log(( +weight) -0.5)
                        }else{
                            console.log("less")
                        }
                    }
                }
            }
        }
        
    } catch (err) {
        res.status(400).json(err.message)
    }
})

module.exports = router