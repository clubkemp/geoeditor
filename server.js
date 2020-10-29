const express = require("express");
const path = require('path')

const PORT = process.env.PORT || 4000;

const app = express();
app.use(express.static("public"));
app.use('/node', express.static(path.join(__dirname, 'node_modules')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({
  defaultLayout: "main"
}));
app.set("view engine", "handlebars");

const routes = require("./controllers/maps.js");
app.use(routes);



app.listen(PORT, function() {
    console.log("App now listening on port:", PORT);
  });
