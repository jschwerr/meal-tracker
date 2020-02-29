const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Food = new Schema({
  food_name: {
    type: String
  },
  food_serving_size: {
    type: Number
  },
  food_serving_measure: {
    type: String
  },
  food_calories_per_serving: {
    type: Number
  }
}, { collection: 'food' });

module.exports = mongoose.model('Food', Food);
