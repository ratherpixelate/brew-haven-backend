const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Brew Haven backend is running');
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

app.use(express.json());

const menuRoutes = require('./routes/menuRoutes');
const authRoutes = require('./routes/authRoutes');
const orderRoutes = require('./routes/orderRoutes');
const reservationRoutes = require('./routes/reservationRoutes');

app.use('/menu', menuRoutes);
app.use('/auth', authRoutes);
app.use('/order', orderRoutes);
app.use('/reservation', reservationRoutes);