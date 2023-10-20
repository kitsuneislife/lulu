const mongoose = require("mongoose");

const Product = require("../../Schemas/Product");

async function Request(req, res) {
  if(!req.query.collection) {
    res.sendStatus(400);
    console.log("\u001b[31m[400]\u001b[0m", "In Post/Request.js. Invalid collection requested.")
    return;
  }
  switch(req.query.collection.toLowerCase()) {
    case "produtos" || "product":
      const productRaw = await Product.find({});
      res.send(productRaw);
      console.log("\u001b[32m[200]\u001b[0m", "In Post/Request.js. Data sent successfully.");
      return;
      break;
    default: 
      res.sendStatus(400);
      console.log("\u001b[31m[400]\u001b[0m", "In Post/Request.js. Invalid collection requested.");
      return;
  }
}

module.exports = {
  path: "/request",
  load: Request
}