const router = require('express').Router();
const {Lead,Note} = require('../../models');

router.get('/',(req,res) => {
    Lead.findAll({
        attributes:['id','first_name','last_name','email','phone_number','created_at'],
        order:[['created_at','DESC']],
        include:[
            { 
            model: Note
            }
        ]
    }).then(dbLeads => res.json(dbLeads))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
});

module.exports = router;