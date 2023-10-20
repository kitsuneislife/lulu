const mongoose = require("mongoose");
const Product = require("../../Schemas/Product");
const ObjectId = require("mongoose").Types.ObjectId;

async function Delete(req, res) {
  try {
    if (!req.query.id) {
      res.sendStatus(400);
      console.log("\u001b[31m[400]\u001b[0m", "In Post/Delete.js. Invalid ID requested.");
      return;
    }
    console.log(req.query.id);
    const id = new ObjectId(req.query.id);
    await Product.findByIdAndDelete({ '_id': id });

    res.sendStatus(200);
    console.log("\u001b[35m[200]\u001b[0m", "In Post/Delete.js. Document deleted successfully.");
  } catch (e) {
    res.sendStatus(400);
    console.error(e);
    console.log("\u001b[31m[400]\u001b[0m", "In Post/Delete.js. Something went wrong.");
  }
}

module.exports = {
  path: "/delete",
  load: Delete
};