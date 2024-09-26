require('dotenv').config();
const express = require("express");
const router = require("./router");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());
app.use(router); // CONFIGURAR CORRETAMENTE ANTES DO DEPLOY

module.exports = app;