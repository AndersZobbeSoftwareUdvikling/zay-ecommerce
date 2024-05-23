'use strict';

const express = require('express');
const cors = require('cors');
const routes = require('./routes/index.js');

const host = process.env.HOST || '0.0.0.0';
const port = process.env.PORT || 3000;

const app = express();

app.use(express.json());
app.use(cors({
    origin: "https://casa.kubelab.dk/",
    optionsSuccessStatus: 200
}));
app.use('/', routes());

app.listen(port, () => console.log(`Server running on port ${port}`));
