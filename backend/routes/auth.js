const express = require('express');
const router = express.Router();
const user = require('../models/user');
router.post('/', (req, res) => {
    console.log(req.body);
})