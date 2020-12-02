"use strict";

const bcrypt = require('bcrypt'),
      low = require('lowdb'),
      FileSync = require('lowdb/adapters/FileSync'),
      adapter = new FileSync('db.json'),
      db = low(adapter);

db.defaults({ users: [] })
  .write();

const checkPassword = (username, password) => {
  let usr = db.get('users')
              .find({username: username})
              .value();

  if (usr === undefined) {
    console.log(`User ${username} not found`);
    return usr;
  }

  return bcrypt.compareSync(password, usr['password'], (err,res) => {
    if(err) {
      return err;
    } else {
      return res;
    }
  });
};

module.exports = { db, checkPassword };