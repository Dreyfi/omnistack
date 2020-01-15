const express = require("express");
const mongoose = require('mongoose');
const app = express();
const dotenv = require('dotenv');
const routes = require('./routes')

app.use(express.json());
app.use(routes);
dotenv.config();

mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0-ar73x.mongodb.net/omnistack?retryWrites=true&w=majority`,
{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.listen(3333);