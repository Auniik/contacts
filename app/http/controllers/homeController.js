const index = (req, res) => {
    res.json(`You are in home, to see contacts go to <a href="/contacts">Contacts</a>`)
}



module.exports = {
    index
}