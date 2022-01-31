const router = require('express').Router();
const leadRoutes = require('./lead-routes');
const noteRoutes = require('./note-routes');

router.use('/notes',noteRoutes);
router.use('/leads',leadRoutes);

module.exports= router;