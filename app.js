const express = require('express');
const {port} = require('./config/environment');
const middlewares = require('./app/http/middleware')
const app = express();
const {router} = require('./routes/web')


app.use(middlewares);
app.use('/', router);

app.listen(port, (req, res) => {
    console.log(`Server is listening to port: ${port}`)
})