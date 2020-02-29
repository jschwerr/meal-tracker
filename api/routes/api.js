var express = require('express');
var router = express.Router();
let Food = require('../models/food.js');

router.get('/food', function(req, res, next) {
  Food.find(function(err, food) {
      if (err) {
          console.log(err);
      } else {
          console.log(food);
          res.json(food);
      }
  });
});

router.get('/food/:id', function(req, res) {
    let id = req.params.id;
    Food.findById(id, function(err, todo) {
        res.json(food);
    });
});

router.post('/food/add', function(req, res) {
    let food = new Food(req.body);
    food.save()
        .then(food => {
            res.status(200).json({'food': 'food added successfully'});
        })
        .catch(err => {
            res.status(400).send('adding new food failed');
        });
});

module.exports = router;
