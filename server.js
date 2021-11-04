// Packages to require
const express = require("express");
const ejsLayout = require("express-ejs-layouts");
// Lunch apps
const app = express();
const server = require("http").createServer(app);
// Puplic Variablis used here
// Lunch .env file
require("dotenv").config({
  path: "./config/.env",
});
const PORT = process.env.PORT;

// LN Uses are here
app.use(ejsLayout);
app.use(express.static("./public"));
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());

// LN Sets
app.set("view engine", "ejs");
app.set("layout", "layouts/layout");

// Init Routes
require("./routes/web")(app);

// LN Start App Server FUN
server.listen(PORT, console.log(`Server http://localhost:${PORT}`));
