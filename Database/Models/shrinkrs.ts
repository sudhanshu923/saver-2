import mongoose from "mongoose";


const stockValueSchema = new mongoose.Schema({
  date: { type: Date, required: true },
  open: { type: Number, required: true },
  high: { type: Number, required: true },
  low: { type: Number, required: true },
  close: { type: Number, required: true },
  volume: { type: Number, required: true }
});

const stockSchema = new mongoose.Schema({
  stockSymbol: { type: String, required: true },
  exchange: { type: String, required: true },
  values: [stockValueSchema]
});




export const Shrinkrs = mongoose.models.Shrinkrs || mongoose.model('Shrinkrs',stockSchema);