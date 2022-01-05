const db = require("../models");
const Card = db.cards;
const User = db.users;

exports.create = (req, res) => { 
  
    if (req.userId) {
      
        var card = new Post(req.body);
        card.author = req.userId;
        post
        .save()
        .then(user => {
          user.cards.unshift(card);
          user.save();
          res.redirect('/user');
      })
      .catch(err => {
          console.log(err.message);
      });
    } else {
        return res.status(401); 
      } 
  };
  