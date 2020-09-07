const express = require('express');
const path = require('path');
const router = express.Router();

const authFilePath = path.join(__dirname, '../../public/authorization.html');

router.get('/authorization', (req, res) => {
    res.sendFile(authFilePath);
})

module.exports = router;