var express = require('express');
var chartCtrl = require('./controlers/chart');
var router = express.Router();

router.route('/chart').get(chartCtrl.get);

module.exports = router;