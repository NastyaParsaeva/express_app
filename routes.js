const express = require('express');
const productList = require('./mock-responses/product-list.json');
const bodyParser = require('body-parser');
const users = require('./mock-responses/mock-users.json');

const router = express.Router();
const jsonParser = bodyParser.json();

router.get('/', function (req, res) {
  res.send('My Clothing server home page');
})

router.get('/product-list', function (req, res) {
  res.json(productList);
})

router.post('/auth', jsonParser, function (req, res) {
  const { login, password } = req.body;
  const foundUser = users.find((user) => {
    return user.login === login && user.password === password;
  });
  if (foundUser) {
    res.status(200).json(foundUser.name);
  } else {
    res.status(404).json('wrong login/password');
  }
});

module.exports = router;