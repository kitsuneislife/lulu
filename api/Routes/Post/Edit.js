const mongoose = require("mongoose");
const ObjectId = require("mongoose").Types.ObjectId;

const Product = require("../../Schemas/Product");

async function Edit(req, res) {
  try {
    if (!req.query.method) {
      res.sendStatus(400);
      console.log("\u001b[31m[400]\u001b[0m", "In Post/Edit.js. Invalid method requested.")
      return;
    }
    const { name, description, display, category, brand, image, price, stock, image1, image2, image3, image4 } = req.body;
    switch (req.query.method) {
      case "insert":
        if (!name || !description || !display || !category || !brand || !image || !price || !stock) {
          res.sendStatus(400);
          console.log("\u001b[31m[400]\u001b[0m", "In Post/Edit.js. One or more input fields empty.");
          return;
        }
        const newProduct = new Product({
          name,
          description,
          display,
          category,
          brand,
          image,
          price,
          stock,
          image1, image2, image3, image4
        });

        newProduct.save();
        res.sendStatus(200);
        console.log("\u001b[35m[200]\u001b[0m", "In Post/Edit.js. Data inserted successfully.");
        return;
        break;
      case "modify":
        if (!req.query.id) {
          res.sendStatus(400);
          console.log("\u001b[31m[400]\u001b[0m", "In Post/Edit.js. Invalid id requested.")
          return;
        }
        if (!name || !description || !display || !category || !brand || !image || !price || !stock) {
          res.sendStatus(400);
          console.log("\u001b[31m[400]\u001b[0m", "In Post/Edit.js. One or more input fields empty.");
          return;
        }

        const mid = new ObjectId(req.query.id);
        await Product.findOneAndUpdate(
          { '_id': mid },
          {
            name,
            description,
            display,
            category,
            brand,
            image,
            price,
            stock,
            image1, image2, image3, image4
          });
        res.sendStatus(200);
        console.log("\u001b[35m[200]\u001b[0m", "In Post/Edit.js. Data modified successfully.");
        return;
        break;
      default:
        res.sendStatus(400);
        console.log("\u001b[31m[400]\u001b[0m", "In Post/Edit.js. Invalid method requested.");
        return;
    }
  } catch (e) {
    res.sendStatus(400);
    console.error(e);
    console.log("\u001b[31m[400]\u001b[0m", "In Post/Delete.js. Something went wrong.");
  }
}

module.exports = {
  path: "/edit",
  load: Edit
}