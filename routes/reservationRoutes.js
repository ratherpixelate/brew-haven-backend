const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
  res.json({ message: 'Reservation created (fake)' });
});

module.exports = router;