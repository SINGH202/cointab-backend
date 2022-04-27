const router = require('express').Router();
const Product = require("../models/product.model")

router.get("/", async(req, res) =>{
    try {
        const Products = await Product.find();
        res.status(200).json(Products);
    } catch (err) {
        res.status(404).json(err.message);
    }
})

router.post("/", async(req, res) =>{
    const newProduct = new Product(req.body);
    try {
        const product = await newProduct.save();
        res.status(200).json(product);
    } catch (err) {
        res.status(400).json(err.message)
    }
})

module.exports = router