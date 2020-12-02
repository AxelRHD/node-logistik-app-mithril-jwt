"use strict";

const express = require('express'),
      router = express.Router();



router.use((req,res,next) => {
    console.log('Internal router logging.');
    next();
});

router.get('/', (req,res) => {
    // res.send("Hallo bei Platzinventur");
    res.render('platzinventur', { user: req.user });
});

router.get('/secret', (req,res) => {
    res.send(`You got in, ${req.user}!`);
});

module.exports = { router };