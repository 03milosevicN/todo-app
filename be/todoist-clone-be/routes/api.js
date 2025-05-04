var express = require('express');
var router = express.Router();

/* GET JSON message */
router.get('/', function(req, res, next) {
    res.json({
        message: 'hello from Express.js!'
    });
});

module.exports = router;