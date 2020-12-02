"use strict";

const express = require('express'),
      app = express(),
      // handlebars = require('express-handlebars'),
      // session = require('express-session'),
      bodyParser = require('body-parser'),
      cookieParser = require('cookie-parser'),
      httpStatus = require('http-status-codes'),
			// path = require('path'),
      jwt = require('jsonwebtoken'),
      moment = require('moment');

const { db, checkPassword } = require('./utils'),
			platzinventur = require('./router/platzinventur');
			// nodeImports = require('./router/node-imports');

const jwt_secret = process.env.JWT_SECRET || 'A Super Secret!',
      jwt_cookie = 'token';



// dummy: dummy
// user:  Lager?
// admin: Logistik!

// console.log(`Password check: ${checkPassword('dummy', 'dummy')}`);



// HANDLEBARS
app.set('port', process.env.PORT || 3000);
// app.engine('handlebars', handlebars());
// app.set('view engine', 'handlebars');



// MIDDLEWARE FUNCTIONS
const verifyToken = (req,res,next) => {
  const token = req.cookies[jwt_cookie];

  if(!token) {
    return res.status(httpStatus.UNAUTHORIZED).end();
  }

  let payload;
  try {
    payload = jwt.verify(token, jwt_secret);
  } catch (e) {
    if(e instanceof jwt.JsonWebTokenError) {
      return res.status(httpStatus.UNAUTHORIZED).end();
    }

    return res.status(httpStatus.UNAUTHORIZED).end();
  }

  console.log(payload);
  req.user = payload.user;
  next();
};


const getUserFromToken = (req,res,next) => {
  const token = req.cookies[jwt_cookie];

  if(token) {
    try {
      let payload = jwt.verify(token, jwt_secret);
      req.user = payload.user;
    } finally { }
  }
  next();
};


// MIDDLEWARE
// app.use(express.static('public'));
app.use(express.static('dist'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(getUserFromToken);

app.use((req,res,next) => {
  console.log(`${moment().format('YYYY-MM-DD HH:mm:SS')} [${req.method}] - ${req.path}`);
  next()
});



// NODE_MODULES STATICS (e. g. alpine.js)
// app.use('/nm', nodeImports.router);



// ENDPOINTS
app.get('/', (req,res) => {
  res.render('home', { pageTitle: "HOME", user: req.user });
});


app.post('/auth/login', (req,res) => {
  const { username, password } = req.body;
  if(!username || !password) {
    res.status(httpStatus.BAD_REQUEST);
    return res.json({ message: "bad request"});
  }

  // let usrActive = ['dummy','user','admin'].includes(username);

  if (checkPassword(username, password)) {
    const token = jwt.sign({user: username}, jwt_secret, { expiresIn: "2d" });
    res.cookie(jwt_cookie, token, { maxAge: 1000 * 60 * 60 * 24 * 2 });
    res.json({ message: 'login successfull'});
  } else {
    res.status(httpStatus.UNAUTHORIZED);
    return res.json({ message: "unauthorized"});
  }
});


app.get('/auth/logout', (req,res) => {
  res.clearCookie(jwt_cookie);
  res.redirect('/');
});


app.get('/login', (req,res) => {
  res.render('login', { pageTitle: 'Login', user: req.user });
});


// app.get('/bundle', (req,res) => {
//   res.render('alpine01');
// });
 


// ROUTER
// app.use('/platzinventur/secret', verifyToken);
app.use('/platzinventur', platzinventur.router);


// START ROUTER
app.listen(app.get("port"), () => {
  console.log(`App listening on http://localhost:${app.get("port")}`);
});