const { authJwt } = require("../middlewares");

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
//   app.post("/post/create", posts.create);

  //FOR TESTING PURPOSES ONLY
  // GET route that returns single post with id
  app.get("/card/:id", [authJwt.verifyToken], cards.findOne);

  // GET route that returns all posts
  app.get("/card",  posts.findAll);

  // PUT route that updates a post
  app.put("/card/update/:id", [authJwt.verifyToken], cards.update);

  // Route that deletes a post 
  app.delete("/card/delete/:id", [authJwt.verifyToken], cards.delete);

  // Route that deletes all posts
  app.delete("/card/delete_all", [authJwt.verifyToken], cards.deleteAll);
};
    