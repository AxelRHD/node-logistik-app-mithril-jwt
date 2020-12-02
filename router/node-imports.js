"use strict";

const express = require('express'),
      router = express.Router(),
      path = require('path'),
      rootDir = path.normalize(__dirname+'/..');


      
router.get("/js/moment.js", (req,res) => {
    res.sendFile(rootDir + '/node_modules/moment/min/moment.min.js');
});
  
router.get("/js/moment.min.js.map", (req,res) => {
    res.sendFile(rootDir + '/node_modules/moment/min/moment.min.js.map');
});

router.get("/js/alpine.js", (req,res) => {
    res.sendFile(rootDir + '/node_modules/alpinejs/dist/alpine.js');
});


router.get('/css/mini-nord.css', (req,res) => {
    res.contentType('text/css')
    res.sendFile(rootDir + '/node_modules/mini.css/dist/mini-nord.css')
});
router.get('/css/mini-nord.min.css', (req,res) => {
    res.set('content-type', 'text/css');
    res.sendFile(rootDir + '/node_modules/mini.css/dist/mini-nord.min.css')
});

router.get('/css/mini-default.css', (req,res) => {
    res.contentType('text/css')
    res.sendFile(rootDir + '/node_modules/mini.css/dist/mini-default.css')
});
router.get('/css/mini-default.min.css', (req,res) => {
    res.set('content-type', 'text/css');
    res.sendFile(rootDir + '/node_modules/mini.css/dist/mini-default.min.css')
});

module.exports = { router };