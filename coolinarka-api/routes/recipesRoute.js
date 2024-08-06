const express = require('express');
const router = express.Router();
const Recipe = require('../models/Recipe')

// Create a new recipe
router.post('/', async (req, res) => {
  try {
    const recipe = new Recipe(req.body);
    await recipe.save();
    res.status(201).send(recipe);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Get all recipes
router.get('/', async (req, res) => {
  try {
    const recipes = await Recipe.find();
    res.status(200).send(recipes);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Get a single recipe by ID
router.get('/:id', async (req, res) => {
  try {
    const recipe = await Recipe.findById(req.params.id);
    if (!recipe) {
      return res.status(404).send();
    }
    res.status(200).send(recipe);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Update a recipe by ID
router.patch('/:id', async (req, res) => {
  try {
    const recipe = await Recipe.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!recipe) {
      return res.status(404).send();
    }
    res.status(200).send(recipe);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Delete a recipe by ID
router.delete('/:id', async (req, res) => {
  try {
    const recipe = await Recipe.findByIdAndDelete(req.params.id);
    if (!recipe) {
      return res.status(404).send();
    }
    res.status(200).send(recipe);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
