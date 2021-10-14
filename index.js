const express = require("express");
const app = express();
require("dotenv/config");
const mongoose = require("mongoose");
const homeRoute = require("./routes/homeRoute");
const path = require("path");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect(process.env.mongoURI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true
});
mongoose.connection.on('connected', () => {
    console.log('Connected to MongoDB');
});
mongoose.connection.on('error', (error) => {
    console.log(error);
});

app.use(express.static(path.join(__dirname, "utils")));
app.set('view engine', 'hbs');

app.use(homeRoute);

const PORT = process.env.PORT || 7070;
app.listen(PORT, () => {
    console.log(`App is up and running on http://localhost:${PORT}`);
});