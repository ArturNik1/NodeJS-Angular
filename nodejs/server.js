const express = require('express');
const app = express(),
    bodyParser = require('body-parser');
    port = 3080;

const users = [];

app.use(bodyParser.json());

app.get('/api/users', (req, res) => {
    res.json(users);
});

app.post('/api/user', (req, res) => {

    const isThere = users.some((user) => { 
        return user.email == req.body.email;
    });
    if (isThere) {
        res.json("user exists");
    }
    else {
        const user = req.body;
        users.push(user);
        res.json("user added");
    }
});

app.post('/api/login', (req, res) => {
    const user = users.find(user => user.email == req.body.email);
    if (user === undefined) {
        res.json("no user");
    }
    else {
        if (user.password == req.body.password) {
            res.json("user correct");
        }
        else {
            res.json("no user");
        }
    }

});

app.get('/', (req,res) => {
    res.send('App Works !!!!');
});

app.listen(port, () => {
    console.log(`Server listening on the port::${port}`);
});