var express = require('express');
var router = express.Router();

router.get('/food', function(req, res, next) {
 res.json([
   {'name': 'chicken'},
   {'name': 'beef'}
 ]);
});

module.exports = router;
