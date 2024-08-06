const express = require('express');
const mongoose = require('mongoose');
const recipeRouter = require('./routes/recipes');

const app = express();
const port = 3000;

app.use(express.json());

mongoose.connect('mongodb://localhost:27017/coolinarka', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB...', err));

app.use('/recipes', recipeRouter);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
