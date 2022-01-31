const router = require('express').Router();
require('dotenv').config();

// this route is to login one user which is my client no other users will ever be created this is a purely admin app
router.post('/',(req,res) => {
    const name = process.env.user1;
    const password = process.env.userPassword;

    if(name === req.body.name && password === req.body.password) {
        res.json({message:"you are now logged in"});
        return;
    } 
    res.status(500).json({message:'incorrect username or password!'});
    
    
});

module.exports = router;