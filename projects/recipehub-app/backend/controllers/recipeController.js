const Recipe = require('../models/Recipe');
const User = require('../models/User');
const path = require('path');

const getRecipes = async (req, res) => {
  try {
    const { search, cuisine, difficulty, sort } = req.query;
    const query = {};

    if (search) {
      query.$text = { $search: search };
    }
    if (cuisine) {
      query.cuisine = cuisine;
    }
    if (difficulty) {
      query.difficulty = difficulty;
    }

    let sortOption = { createdAt: -1 };
    if (sort === 'rating') {
      sortOption = { averageRating: -1 };
    }

    const recipes = await Recipe.find(query)
      .populate('user', 'name')
      .sort(sortOption);

    res.json(recipes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getRecipe = async (req, res) => {
  try {
    const recipe = await Recipe.findById(req.params.id).populate('user', 'name');

    if (!recipe) {
      return res.status(404).json({ message: 'Recipe not found' });
    }

    res.json(recipe);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createRecipe = async (req, res) => {
  try {
    const {
      title,
      description,
      cuisine,
      prepTime,
      cookTime,
      servings,
      difficulty,
      ingredients,
      instructions,
    } = req.body;

    if (!title || !ingredients || !instructions) {
      return res.status(400).json({ message: 'Please provide required fields' });
    }

    const image = req.file ? `/uploads/${req.file.filename}` : null;

    const recipe = await Recipe.create({
      user: req.user._id,
      title,
      description,
      image,
      cuisine,
      prepTime: parseInt(prepTime),
      cookTime: parseInt(cookTime),
      servings: parseInt(servings),
      difficulty,
      ingredients: JSON.parse(ingredients),
      instructions: JSON.parse(instructions),
    });

    res.status(201).json(recipe);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateRecipe = async (req, res) => {
  try {
    const recipe = await Recipe.findById(req.params.id);

    if (!recipe) {
      return res.status(404).json({ message: 'Recipe not found' });
    }

    if (recipe.user.toString() !== req.user._id.toString()) {
      return res.status(401).json({ message: 'Not authorized' });
    }

    const updateData = { ...req.body };
    if (req.file) {
      updateData.image = `/uploads/${req.file.filename}`;
    }
    if (req.body.ingredients) {
      updateData.ingredients = JSON.parse(req.body.ingredients);
    }
    if (req.body.instructions) {
      updateData.instructions = JSON.parse(req.body.instructions);
    }

    const updatedRecipe = await Recipe.findByIdAndUpdate(
      req.params.id,
      updateData,
      { new: true, runValidators: true }
    );

    res.json(updatedRecipe);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteRecipe = async (req, res) => {
  try {
    const recipe = await Recipe.findById(req.params.id);

    if (!recipe) {
      return res.status(404).json({ message: 'Recipe not found' });
    }

    if (recipe.user.toString() !== req.user._id.toString()) {
      return res.status(401).json({ message: 'Not authorized' });
    }

    await recipe.deleteOne();

    res.json({ message: 'Recipe removed', id: req.params.id });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const addToFavorites = async (req, res) => {
  try {
    const user = await User.findById(req.user._id);
    const recipeId = req.params.id;

    if (user.favorites.includes(recipeId)) {
      return res.status(400).json({ message: 'Recipe already in favorites' });
    }

    user.favorites.push(recipeId);
    await user.save();

    res.json({ message: 'Added to favorites', favorites: user.favorites });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const rateRecipe = async (req, res) => {
  try {
    const { rating } = req.body;
    const recipe = await Recipe.findById(req.params.id);

    if (!recipe) {
      return res.status(404).json({ message: 'Recipe not found' });
    }

    const existingRating = recipe.ratings.find(
      (r) => r.user.toString() === req.user._id.toString()
    );

    if (existingRating) {
      existingRating.rating = rating;
    } else {
      recipe.ratings.push({
        user: req.user._id,
        rating,
      });
    }

    recipe.calculateAverageRating();
    await recipe.save();

    res.json(recipe);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getRecipes,
  getRecipe,
  createRecipe,
  updateRecipe,
  deleteRecipe,
  addToFavorites,
  rateRecipe,
};
