const express = require("express");
const cors    = require("cors");
const fs      = require("fs")
const app     = express();

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

function load() {
  const folders = fs.readdirSync("./Routes");
  for(const folder of folders) {
    const files = fs.readdirSync(`./Routes/${folder}`)
    for(const file of files) {
      const imports = require(`./Routes/${folder}/${file}`);
      if(folder == "Get") {
        app.get(imports.path, (req, res) => { imports.load(req, res) });
      }
      if(folder == "Post" ) {
        app.post(imports.path, (req, res) => { imports.load(req, res) });
      }
    }
    console.log("\u001b[35m[Router]\u001b[0m", "Loaded", `\u001b[32m${files.length}\u001b[0m`, `files from /${folder}`);
  }
}

app.get("/", (req, res) => {res.status(200).send({status: "ok"})});
app.listen(3000, () => {console.log("\u001b[35m[App]\u001b[0m", "Online.")});

module.exports.load = load;