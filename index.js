const express = require("express");

const app = express();
app.use(express.json());

// Query params
// Route params
// Body

app.post('/', (request, res) => {
    console.log(request.body)
    return res.json({message:'Hello omnistack.'});
});

app.listen(3333);