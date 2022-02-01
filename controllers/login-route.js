

const router = require('express').Router();

// this renders the login view if you are not already logged in or the /dashboard if you are
router.get('/',(req,res) => {
    if (req.session.loggedIn) {
        res.redirect('/dashboard')
    }else{ 
        res.render('login');
    }
});

module.exports = router;