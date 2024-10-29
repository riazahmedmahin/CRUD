// routes/itemRoutes.js
import express from 'express'
const router = express.Router();
import Item from  "../models/Item.js";

// Create an item
router.post("/create", async (req, res) => {
  try {
    let item = new Item(req.body);
    await item.save();
    res.json({"status":"success",item:item});
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Read all items
router.get("/read", async (req, res) => {
  try {
    let items = await Item.find();
    res.json({"status":"success",items});
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Read an item by ID
router.get("read/:id", async (req, res) => {
  try {
    let item = await Item.findById(req.params.id);
    if (!item) return res.status(404).json({ message: "Item not found" });
    res.json(item);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Update an item
router.put("update/:id", async (req, res) => {
  try {
    let item = await Item.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!item) return res.status(404).json({ message: "Item not found" });
    res.json(item);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete an item
router.delete("delete/:id", async (req, res) => {
  try {
    let item = await Item.findByIdAndDelete(req.params.id);
    if (!item) return res.status(404).json({ message: "Item not found" });
    res.json({ message: "Item deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router; 