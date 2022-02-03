const router = require('express').Router();
const {Lead,Note} = require('../models');
const authorize = require('../utils/authorize');

//this route renders dashboard
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

// this route gives us the edit lead page
router.get('/edit/:id',authorize,(req,res) => {
    Lead.findOne({
        where: {
            id: req.params.id 
        },
        attributes:['id','first_name','last_name','email','phone_number','created_at'],
        include: {
            model:Note
        }
    }).then(dbLead => {
        const lead = dbLead.get({plain: true});
        res.render('edit-lead',{lead,loggedIn: req.session.loggedIn})
    }).catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
});

// this route renders single lead page or /dashboard/lead/:id on that page you cand add a note
router.get('/lead/:id',authorize,(req,res) => {
    Lead.findOne({
        where: {
            id: req.params.id 
        },
        attributes:['id','first_name','last_name','email','phone_number','created_at'],
        include: {
            model: Note,
            attributes:['id','note_text','created_at'] 
        }
    })
    .then(dbLead => {
        const lead = dbLead.get({plain:true});
        res.render('single-lead', {lead, loggedIn: req.session.loggedIn})
    }).catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// this route renders the single note page where you can edit or delete a note
router.get('/note/:id',authorize,(req,res) => {
    Note.findOne({
        where: {
            id: req.params.id 
        },
        attributes:['id','note_text','created_at']
    })
    .then(dbNoteData => {
        const note = dbNoteData.get({plain:true});
        res.render('single-note',{note,loggedIn: req.session.loggedIn});
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});
module.exports = router;
