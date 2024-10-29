// models/Item.js
import mongoose from "mongoose";

const itemSchema = new mongoose.Schema({
  name: { type: String, required: true }, // Name of the item, must be provided
  price: { type: Number, required: true, min: 0 }, // Price must be a non-negative number
  description: { type: String }, // Optional description of the item
  createdAt: {
    type: Date,
    default: Date.now, // Sets the default value to the current date and time
  },
  updatedAt: {
    type: Date,
    default: Date.now, // Sets the default value to the current date and time
  },
},
{ versionKey: false }
); 

const Item = mongoose.model("Items", itemSchema);

export default Item; // Ensure this is a default export