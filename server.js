const express = require("express");
const cart = require("./cart-items-routes");
const app = express();
const port = 8080;

app.use(express.json());
app.use("/cart-items", cart);

app.listen(port, () => console.log(`cart items on: ${port}`));