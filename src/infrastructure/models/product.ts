import mongoose from 'mongoose';

export interface ProductDocument extends mongoose.Document{
  id: number;
  brand: string;
  description: string;
  image: string;
  price: number;
}

const ProductSchema = new mongoose.Schema({
  id: { type: Number, required: true },
  brand: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  price: { type: Number, required: true }
}, {collection: 'products'});

const Product = mongoose.model("Product", ProductSchema);

export default Product;
