const express = require('express');
const routes = require('./routes');
const sequelize = require('./config/connection');
const {grabCard, makeArrayOfCards} = require('./functions/WebScraper');

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);

sequelize.once('open', () => {
    app.listen(PORT, () => console.log(`API server running on port ${PORT}!`))
});