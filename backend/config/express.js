const express = require('express');
const { allowCrossOriginRequestsMiddleware } = require('../app/middleware/cors.middleware');
const bodyParser = require('body-parser');

module.exports = function () {
    const app = express();
    app.rootUrl = '/api'

    // MIDDLEWARE
    app.use(allowCrossOriginRequestsMiddleware);
    app.use(bodyParser.json());
    app.use(bodyParser.raw({ type: 'text/plain' }));
    app.use(bodyParser.raw({ type: 'image/*', limit: '5mb'}));

    app.get('/api', function (req, res) {
        res.send({ 'message': 'Hello World!' })
    });

    //ROUTES
    require('../app/routes/users.routes')(app);

    return app
};