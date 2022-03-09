import { getProductsById} from '../../../services/product.service';
//import Product from '../../../models/product'

export const searchProductController = async (ctx: any) => {
  const id = ctx.request.querystring;
  const products = await getProductsById(id)
  ctx.body = products;
}
