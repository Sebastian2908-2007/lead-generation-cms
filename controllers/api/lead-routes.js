const router = require('express').Router();
const {Lead,Note} = require('../../models');

// get all leads
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

router.get('/:id',(req,res) => {
    Lead.findOne({
        where: {
            id: req.params.id 
        },
        attributes:['id','first_name','last_name','email','phone_number','created_at'],
        include:{
            model: Note
        }
    }).then(dbLead => {
        if(!dbLead) {
            res.status(404).json({message:'no lead with that id'});
            return;
        }
        res.json(dbLead);
    }).catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
})

// create the lead
router.post('/',(req,res) => {
    Lead.create({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        phone_number: req.body.phone_number
    })
    .then(dbLead => {
        if(!dbLead) {
            res.json({message:'incomplete field'});
            return;
        }
        res.json(dbLead);
    })
    .catch(err => { 
        console.log(err);
        res.status(500).json(err);
    });
});

router.put('/:id',(req,res) => {
    Lead.update(req.body,{
        where: {
            id: req.params.id 
        }
    }).then(dbLead => {
        if(!dbLead) {
            res.status(404).json({message:'no lead with that id'});
            return;
        }
        res.json(dbLead);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
});

router.delete('/:id',(req,res) => {
    Lead.destroy({
        where: {
            id: req.params.id 
        }
    }).then(dbLead => {
        if(!dbLead) {
            res.status(404).json({message:'no lead with that id'});
            return;
        }
        res.json(dbLead);
    }).catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
    
});

module.exports = router;