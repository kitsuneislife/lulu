const mongoose      = require("mongoose");
const express       = require("express");
const cors          = require("cors");
const fs            = require("fs");
const app           = express();

/*app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));*/
mongoose.connect(process.env.mongoUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
db = mongoose.connection;
mongoose.pluralize(null);

db.on("error", console.error.bind(console, "Erro de conexão:"));
db.once("open", () => {console.log("\u001b[35m[MongoDB]\u001b[0m", "Online.")});

/* */

const Router = require("./Router");
Router.load()

/* */
/*
app.get("/", (req, res) => {res.status(200).send({status: "ok"})});
app.listen(3000, () => {console.log("\u001b[35m[App]\u001b[0m", "Online.")});*/