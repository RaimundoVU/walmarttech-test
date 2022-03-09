//import { FilterQuery } from "mongoose";
import Product from '../models/product'

export const getProductsById = async (id: number) => {
  console.log('$$$$', id);
  let product = await Product.findOne({id: id})
  return product;
}
