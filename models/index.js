const dbConfig = require("../data/ezstudy-db.js");

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.set('debug', false);

const db = {};
db.mongoose = mongoose;

db.url = dbConfig.url;
db.users = require("./userModel.js")(mongoose);
db.cards = require('./cardModel')(mongoose);

module.exports = db;