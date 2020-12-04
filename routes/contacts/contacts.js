const router = require('express').Router();
const {contactController} = require('../../app/http/controllers/contactController');


router.get('/', contactController.index)
    .post('/', contactController.store);



module.exports = {
    contactRouter: router
}