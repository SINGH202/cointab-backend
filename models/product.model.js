const mongoose = require("mongoose");
const express = require("express");
const { type } = require("express/lib/response");

const productSchema = new mongoose.Schema(
  {
    weight: { type: String, required: true },
    pincode: { type: String, required: true },
    deliveryType: { type: String, required: true },
  },
  { timestamps: true, versionKey: false }
);

module.exports = mongoose.model("Product", productSchema);
