//the server definitions:
const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");
//importing routes for all server componenets:
const itemsRoutes = require("./routes/items"); //for routing
const productsRoutes = require("./routes/products"); //for routing
const blogsRoutes = require("./routes/blogs"); //for routing
const usersRoutes = require("./routes/users"); //for routing
const app = express(); //for running the server
const path = require("path");

//in order to run the server we use express:
app.use(express.json()); //we want the server to know how to handle the json from the body
app.use(express.urlencoded());
app.use(cors());
app.use(express.static(path.join(__dirname, "public")));

const PORT = process.env.PORT || 3001;

//calling all paths by creating app middlewares:
app.use("/items", itemsRoutes); // everything in the items.js route will have the prefix "/items"
app.use("/products", productsRoutes); // everything in the products.js route will have the prefix "/products"
app.use("/blogs", blogsRoutes);
app.use("/users", usersRoutes);

//the server we listen to:
app.listen(PORT, () => console.log("server is runing on port: " + PORT));
