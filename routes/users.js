var express = require('express');
var router = express.Router();

const usersController = require("../controllers/UsersController")

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


router.get('/sign-in', usersController.signIn)
router.get("/sign-up", usersController.signUp)

module.exports = router;
