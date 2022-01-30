const router = require('express').Router();
const leadRoutes = require('./lead-routes');

router.use('/leads',leadRoutes);

module.exports= router;