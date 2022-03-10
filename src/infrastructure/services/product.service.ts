//import { FilterQuery } from "mongoose";
import Product from '../models/product'

export const getProductsById = async (id: number) => {
  let product = await Product.findOne({id: id}).lean();
  return [product];
}

export const getProducts = async (searchValue: string) => {
  let regex = '.*' + searchValue + '.*';
  let products = await Product.find(
    {
      $or: [
        { brand: { $regex: regex } },
        { description: {$regex: regex} }
      ]
    }
  ).lean();
  return products;
}
