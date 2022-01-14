const { authJwt } = require("../middleware");

const cards = require("../controllers/cardController.js");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });
  // POST route that creates a post one authenticated 
  app.post("/card/create",[authJwt.verifyToken], cards.create);

  //FOR TESTING PURPOSES ONLY
  // GET route that returns single post with id
  app.get("/card/:id", [authJwt.verifyToken], cards.findOne);

  app.get("/card",  cards.findAll);

  app.delete("/card/delete/:id", [authJwt.verifyToken], cards.delete);

};
    