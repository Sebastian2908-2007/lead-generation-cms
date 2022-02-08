const router = require('express').Router();

// switched make-20k-per-month from index export file to this route
router.get('/',(req,res) => {
    res.render('lead-capture');
});

module.exports = router;
//make-20K-per-month