const express = require("express");
const app = express();
const bodyparser = require("body-parser");
const session = require('express-session');
// Routes
const auth = require("./routes/auth");
const sellerHistory = require("./routes/sellerHistory");
const seller = require("./routes/seller");
const buy = require("./routes/buy");
const buyerHistory = require("./routes/buyerHistory");
const wishlist = require("./routes/wishlist");
const cookie = require("cookie-parser");

const cors = require("cors");
// Middlewares For BodyParser
app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));
app.use(cors());
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());

app.use(cookie("aayushdesai01"));

//Middleware
app.use("/auth", auth);
app.use("/sellerHistory", sellerHistory);
app.use("/seller", seller);
app.use("/buy",buy);
app.use("/buyerHistory",buyerHistory);
app.use("/wishlist",wishlist);

app.all("*", (req, res) => {
  return res.json({ success: false, err_code: 404, message: "Invalid URL!" });
});

app.listen(5000, () => {
  console.log("Server has Started on port 5000");
});
