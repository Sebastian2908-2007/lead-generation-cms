const router = require('express').Router();
const { Lead, Note } = require('../../models');


router.get('/',(req,res) => {
    Note.findAll({
        attributes:['id','note_text','created_at'],
        include: {
            model: Lead,
            attributes: ['first_name','last_name']
        }
    })
    .then(dbNotes => res.json(dbNotes))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.get('/:id',(req,res) => {
    Note.findOne({
        where: {
            id: req.params.id
        },
        attributes:['id','note_text','created_at'],
        include: {
            model: Lead,
            attributes: ['first_name','last_name']
        }
    }).then(dbNote => {
        if(!dbNote) {
            res.status(404).json({message:'no note with that id!'});
            return;
        }
        res.json(dbNote);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.post('/',(req,res) => {
    Note.create({
        note_text: req.body.note_text,
        lead_id: req.body.lead_id
    })
    .then(dbNote => res.json(dbNote))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
});

router.put('/:id',(req,res) => {
    Note.update(req.body,{
        where: {
            id: req.params.id 
        }
    }).then(dbNote => {
        if(!dbNote) {
            res.status(404).json({message: 'no note with that id'});
            return;
        }
        res.json(dbNote);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.delete('/:id',(req,res) => {
    Note.destroy({
        where: {
            id: req.params.id 
        }
    }).then(dbNote => {
        if(!dbNote) {
            res.status(404).json({message:'no note with that id!'});
            return;
        }
        res.json(dbNote);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
})
module.exports = router;