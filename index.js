const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(cors());

// Check karne ke liye ki server chal raha hai
app.get('/', (req, res) => {
    res.send("RedOcean Server is Live!");
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));