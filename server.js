require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
require('express-group-routes');
const bodyParser = require('body-parser');

const app = express();
const db = process.env.MONGO_URI;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mongoose
	.connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
	.then(() => console.log('MongoDB successfully connected'))
	.catch((err) => console.log(err));

const routes = require('./routes');

routes.index(app);

app.listen(process.env.PORT, () => {
    console.log(`Server listen at ${process.env.PORT}`)
})