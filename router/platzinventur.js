"use strict";

const path = require('path'),
		  express = require('express'),
      router = express.Router();



router.use((req,res,_next) => {
	res.sendFile(path.join(__dirname, "../dist/index.html"));
});

module.exports = { router };