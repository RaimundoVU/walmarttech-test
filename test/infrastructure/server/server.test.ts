import {loadConfig} from '../../../src/infrastructure/config'
import {loadDBConnection} from '../../../src/infrastructure/db'
import { getProductsById, getProducts} from '../../../src/infrastructure/services/product.service';
import { checkPalindrome} from '../../../src/infrastructure/server/routes/controllers/search';

beforeAll(async () => {
  const appConfig = loadConfig()
  const dbModule = loadDBConnection({dbUri: appConfig.DB_URI})
  await dbModule.start()
});

afterAll(async () => {
  const appConfig = loadConfig()
  const dbModule = loadDBConnection({dbUri: appConfig.DB_URI})
  await dbModule.close();
});

it('Should return 1 product', async() => {
  let product = await getProductsById(181);
  console.log(product);
  expect(product.length).toEqual(1);
});

it('Check if id is equal to search', async() => {
  let product = await getProductsById(181);
  expect(product[0].id).toEqual(181);
});


it('Should return more than product', async() => {
  let product = await getProducts("asd");
  let check = product.length > 1;
  expect(check).toEqual(true);
});

it('Check palindrome true', () => {
  let check = checkPalindrome('abba');
  expect(check).toEqual(true);
});

it('Check palindrome false', () => {
  let check = checkPalindrome('asdf');
  expect(check).toEqual(false);
});
