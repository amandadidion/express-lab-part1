"use strict"

const pg = require("pg");

const pool = {
 user: "postgres",
 password: "****",
 host:"localhost",
 port: 5432,
 database: "amandadidion", 
 ssl: false
};

module.exports = new pg.Pool (pool);