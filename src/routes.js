const { Router } = require('express');
const routes = Router();

// Query params
// Route params
// Body

routes.post('/users', (request, res) => {
    console.log(request.body);
    return res.json({message:'Hello omnistack.'});
});

module.exports = routes;