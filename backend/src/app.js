const express = require('express');
const cors = require('cors');
const { PORT } = require('./config/env');
const authRoutes=require('./routes/authRoutes')
const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'ServiceHub API is running',
  });
});

app.use('/api/auth', authRoutes);
module.exports = { app, PORT };
