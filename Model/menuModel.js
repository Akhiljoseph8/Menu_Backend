
const mongoose = require("mongoose");

const MenuItemSchema = new mongoose.Schema({
  itemName: { type: String, required: true },
  description: { type: String },
  price: { type: Number, required: true }
});

const MenuSchema = new mongoose.Schema({
  menuName: { type: String, required: true, unique: true },
  description: { type: String },
  items: [MenuItemSchema] 
});

const Menu = mongoose.model("menu", MenuSchema);

module.exports = Menu;
