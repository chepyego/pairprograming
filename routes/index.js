const express = require('express');
const router = express.Router();

router.get('/', (req, res)=> res.json("It's getting router"));

module.exports = router;