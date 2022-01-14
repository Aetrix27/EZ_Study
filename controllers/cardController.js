const db = require("../models");
const Card = db.cards;
const User = db.users;

// Create a card and save it with the user
exports.create = (req, res) => { 
  var card = new Card(req.body);
  card.author = req.userId;

  if (req.userId) { var post = new Card(req.body); 
    card.author = req.userId;
    card
    .save()
    .then(card => {
        return User.findById(req.userId);
    })
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

  
  // Retrieve all cards from the database.
exports.findAll = async (req, res) => {
	try {
		const cards = await Card.find({});
		res.json(cards);
		console.log('CARDS');
		console.log(cards);
	} catch (err) {
		//!
		console.error(err);
		res.status(500).send();
	}
};

// Find a single card with an id
exports.findOne = (req, res) => {
	const id = req.params.id;

	Card.findById(id)
		.then((data) => {
			if (!data)
				res.status(404).send({ message: 'Not found card with id ' + id });
			else res.send(data);
		})
		.catch((err) => {
			res.status(500).send({ message: 'Error retrieving card with id=' + id });
		});
};

exports.delete = (req, res) => {
  const id = req.params.id;

  Card.findByIdAndRemove(id)
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Card with id=${id}. Maybe Card was not found!`
        });
      } else {
        res.send({
          message: "Card was deleted successfully!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Card with id=" + id
      });
    });
};


  