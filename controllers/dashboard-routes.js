const router = require('express').Router();
const {Lead,Note} = require('../models');
const authorize = require('../utils/authorize');

router.get('/',authorize,(req,res) => {
    res.render('dashboard');
});

module.exports = router;
