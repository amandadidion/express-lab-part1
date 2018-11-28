"use strict";

const express = require("express");
const items = express.Router();
const pool = require ("./db");

items.get ("/items", (req, res) => {
 pool.query("select * from cart").then((result) => {
  res.json(result.rows);
 });
});

items.post("/items", (req, res) => {
 pool.query("insert into cart(product, price, quantity) values ($1::text, $2::real, $3::int)", [req.body.product, req.body.price, req.body.quantity]).then (() => {
  pool.query("select * from cart").then((result) => {
   res.json(result.rows);
 });
});
});

items.put("/items/:id", (req, res) => {
 pool.query("update cart set product=$1::text, price=$2::real, quantity=$3::int where id=$4::int", [req.body.product, req.body.price, req.body.quantity, req.params.id]).then (() => {
  pool.query("select * from cart").then((result) => {
   res.json(result.rows);
});
 });
});

items.delete("/items/:id", (req, res) => {
 pool.query("delete from cart where id=$1::int", [req.params.id]).then (() => {
   pool.query("select * from cart").then((result) => {
    res.json(result.rows);
 });
});
});

module.exports = items;
