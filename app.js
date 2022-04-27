const mongoose = require("mongoose");
const cors = require("cors");
const express = require("express");
const app = express();
const rates = require("./Data/rates")
const productController = require("./controllers/product.controler")

mongoose
  .connect(
    "mongodb+srv://singh202:Anurag1234@cluster0.bxefk.mongodb.net/cointab"
  )
  .then(() => console.log("connecte to mongodb"))
  .catch((err) => {
    console.log(err);
  });

app.use(cors());
app.use(express.json())
app.use("/products", productController);

const port = 5500;
app.listen(port, () =>{
    console.log(`Server is running on part ${port}`)
})