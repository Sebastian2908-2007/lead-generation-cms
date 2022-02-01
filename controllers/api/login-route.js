const router = require('express').Router();
require('dotenv').config();

// this route is to login one user which is my client no other users will ever be created this is a purely admin app
router.post('/',(req,res) => {
    const name = process.env.user1;
    const password = process.env.userPassword;
    const sId = '888'

    if(name != req.body.name || password != req.body.password) {
        res.status(500).json({message:'incorrect username or password!'});
        return;
    } 
   req.session.save(() => {
       req.session.user_id = sId;
       req.session.username = name;
       req.session.loggedIn = true;

       res.json({user: name,message:"you are now logged in"});
   });

 console.log(req.session);  
console.log(req.session.user_id);
   
    
});

// this route will log the user out by destroying the session
router.post('/logout',(req,res) => {
    if(req.session.loggedIn) {
        req.session.destroy(() => {
            res.status(204).end();
        })
    }else{ 
        res.status(404).end();
}
});

module.exports = router;