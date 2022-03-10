import Router from 'koa-router'
import {pingRouteController} from './controllers/ping'
import {searchProductController} from './controllers/search'

export function loadRoutes(router: Router) {
  router.get('/ping', pingRouteController)
  router.get('/search-product', searchProductController);
  return router
}
