
import {  findPath, findComponent } from './utils'
import routes from './routes'
const router = {}

router.routes = routes
const getComponent = (params) => findComponent(params, routes)
const getPath = (params) => findPath(params, routes)
// router push by name
router.push =async (name) => {
  let a = await getComponent(name)()
  router.current = a.default
  console.log('push finished', router.current)
  router.path = getPath(name)
  window.history.pushState(name, null, router.path)
}
router.getCurrent = () => router.current

router.init = () => {
  router.push('index')
}
window.onpopstate = (e) => {
  console.log(e, 'popstate')
}

export default router