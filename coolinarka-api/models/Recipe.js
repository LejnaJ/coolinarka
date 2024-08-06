const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
  title: { type: String, required: true },
  ingredients: [String],
  instructions: { type: String, required: true },
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  ratings: [{ user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, rating: Number }],
  comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }]
});

const Recipe = mongoose.model('Recipe', recipeSchema);
module.exports = Recipe;
