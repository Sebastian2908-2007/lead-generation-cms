const router = require('express').Router();
const {Lead,Note} = require('../models');

router.get('/',(req,res) => {
    res.render('dashboard');
});

module.exports = router;
