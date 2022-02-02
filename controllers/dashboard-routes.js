const router = require('express').Router();
const {Lead,Note} = require('../models');
const authorize = require('../utils/authorize');

router.get('/',authorize,(req,res) => {
    Lead.findAll({
        attributes:['id','first_name','last_name','email','phone_number','created_at'],
        include: {
            model: Note
        }
    }).then(dbLeadData => {
        const leads = dbLeadData.map(lead => lead.get({plain: true}));
        res.render('dashboard',{leads, loggedIn: req.session.loggedIn});
    }).catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
  
});

module.exports = router;
