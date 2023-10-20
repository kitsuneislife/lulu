const mongoose = require("mongoose");

mongoose.pluralize(null);

const productSchema = new mongoose.Schema({
  name: String,
  description: String,
  display: String,
  category: String,
  brand: String,
  image: String,
  price: String,
  stock: Number,
  image1: String,
  image2: String,
  image3: String,
  image4: String,
});

const Product = mongoose.model("Product", productSchema, "Produtos");
module.exports = Product;