const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  items: [
  {
    menuItem: { type: mongoose.Schema.Types.ObjectId, ref: 'MenuItem' },
    quantity: { type: Number, required: true }
  }
    ],
  totalPrice: { type: Number, required: true  },
  status: { type: String, enum: ["pending","preparing", "ready", "completed", "cancelled"], default: "pending" },
});

module.exports = mongoose.model('Order', orderSchema);