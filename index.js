require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const router = require('./Routes');
const app = express();
const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

app.use(express.json());
app.use('/', router);

const url = process.env.URL;
mongoose.connect(url)
    .then(() => console.log("DB ok"))
    .catch(() => console.log("Error con el servidor"));