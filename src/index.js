const Express = require('express');
require('dotenv').config();
const { v4: uuidv4 } = require('uuid');
const User = require('./model');

const PORT = process.env.HOST_PORT || 3000;

const app = Express();

app.use(Express.json());

app.get('/', (req, res) => {
  try {
    const { name, birth_date, email } = req.body;
    User.create({
      id: uuidv4(),
      name,
      birth_date,
      email,
    }).then(res.status(201).send('User created'));
  } catch (error) {
    console.log(error);
  }
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
