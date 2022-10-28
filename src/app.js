require('express-async-errors');
const express = require('express');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

// middlewares de erro já implementados
app.use((err, _req, _res, next) => {
  console.error(err.stack);
  // passa o erro para o próximo middleware
  next(err);
});

app.use((err, _req, res, _next) => {
  res
    .status(500)
    .json({ message: `Algo deu errado! Mensagem: ${err.message}` });
});

module.exports = app;
