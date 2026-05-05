const controller = require('../controllers/urlController');
const express = require('express');
const router = express.Router();
router.post('/url' , controller.createUrl);
router.get('/url/:shorturl', controller.redirectUrl);

module.exports = router;