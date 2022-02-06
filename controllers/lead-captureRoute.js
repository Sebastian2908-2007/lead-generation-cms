const router = require('express').Router();

// switched make-20k-per-month from index export file to this route
router.get('/make-20K-per-month',(req,res) => {
    res.render('lead-capture');
});

module.exports = router;
