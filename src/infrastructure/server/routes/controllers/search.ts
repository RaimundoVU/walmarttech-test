import { getProductsById, getProducts} from '../../../services/product.service';

export const checkPalindrome = (value: string) => {
  let re = /[\W_]/g;
  let lowerStr = value.toLowerCase().replace(re, '');
  let reverseStr = lowerStr.split('').reverse().join('');
  return lowerStr === reverseStr;
}
export const searchProductController = async (ctx: any) => {
  let products = [];
  const searchValue = ctx.request.querystring;
  const isPalindrome = checkPalindrome(searchValue);
  if ( Number.isInteger(Number(searchValue))) {
    products = await getProductsById(searchValue)
  } else {
    products = await getProducts(searchValue);
  }
  if (isPalindrome) {
    products = products.map((product: any) => ({...product, price: product.price * 0.5}))
  }
  ctx.body = products;
}
