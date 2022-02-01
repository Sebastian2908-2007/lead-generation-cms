const router = require('express').Router();
const routes = require('./api');
const dashboard = require('./dashboard-routes');
const loginRoute = require('./login-route');

// this login rendders login page
router.use('/login',loginRoute)
// this will render all dashboard routes
router.use('/dashboard',dashboard);
// this use the api routes
router.use('/api',routes);

module.exports = router;