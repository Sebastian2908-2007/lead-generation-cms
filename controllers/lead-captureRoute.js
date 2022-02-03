const router = require('express').Router();

router.get('/',(req,res) => {
    res.render('lead-capture');
});

module.exports = router;
