"use strict";

const express = require("express");
const items = require("./routes");
const app = express();
const port = 8888;

app.use(express.json());
app.use(express.static("./public"));
app.use("/", items);


app.listen(port, () => console.log(`server up and running on localhost: ${port}`));