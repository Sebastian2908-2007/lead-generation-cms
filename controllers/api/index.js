const router = require('express').Router();
const leadRoutes = require('./lead-routes');
const noteRoutes = require('./note-routes');
const loginRoute = require('./login-route');

router.use('/notes',noteRoutes);
router.use('/leads',leadRoutes);
router.use('/login',loginRoute);

module.exports= router;