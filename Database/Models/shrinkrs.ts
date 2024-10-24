import mongoose from "mongoose";




const stockSchema = new mongoose.Schema({
  stockSymbol: { type: String, required: true },
  exchange: { type: String, required: true },
  values: []
});




export const Shrinkrs = mongoose.models.Shrinkrs || mongoose.model('Shrinkrs',stockSchema);