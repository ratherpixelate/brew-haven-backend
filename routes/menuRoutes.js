const express = require('express');
const router = express.Router();
router.get('/', (req, res) => {
    res.json([
    { name: 'Latte', price: 180 },
    { name: 'Cappuccino', price: 160 }
    ]);
});

module.exports = router;