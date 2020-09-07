const express = require('express');
const path = require('path');
const router = express.Router();

const authFilePath = path.join(__dirname, '../../public/404.html');

router.get('*', (req, res) => {
    res.sendFile(authFilePath);
})

module.exports = router;