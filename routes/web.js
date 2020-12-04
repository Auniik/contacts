const router = require('express').Router();
const { contactRouter } = require('./contacts/contacts');
const homeController = require('../app/http/controllers/homeController');


router.use('/contacts', contactRouter)


router.get('/', homeController.index);




module.exports.router = router;