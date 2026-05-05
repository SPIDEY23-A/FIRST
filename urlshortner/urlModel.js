const express = require('express');
const router = express.Router();
const { generateUrl, redirectUrl } = require('../controller/urlcontroller');

router.post('/url', generateUrl);
router.get('/:code', redirectUrl);

module.exports = router;