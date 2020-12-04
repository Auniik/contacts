const Contact = require('../../models/Contact')
const handler = {};

handler.index = (req, res) => {
    res.json(`You are in contacts index, to see contacts go to <a href="/">Contacts</a>`)
}

handler.store = (req, res) => {
    
    // console.log((new Contact).fillable)
    // res.json(`You are in contacts store, to see contacts go to <a href="/contacts">Contacts</a>`)
}

handler.show = (req, res) => {
    res.json(`You are in contacts show, to see contacts go to <a href="/contacts">Contacts</a>`)
}

handler.update = (req, res) => {
    res.json(`You are in contacts update, to see contacts go to <a href="/contacts">Contacts</a>`)
}

handler.destroy = (req, res) => {
    res.json(`You are in contacts destroy, to see contacts go to <a href="/contacts">Contacts</a>`)
}



module.exports = {
    contactController: handler
}