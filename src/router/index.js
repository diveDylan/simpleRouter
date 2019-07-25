
import {  findPath, findComponent } from './utils'
import routes from './routes'
const router = {}

router.routes = routes
const getComponent = (params) => findComponent(params, routes)
const getPath = (params) => findPath(params, routes)
// router push by name
router.push =async (name) => {
  if (router.path == getPath(name)) return
  router.current = await getComponent(name)
  console.log('push finished', router.current)
  router.path = getPath(name)
  window.history.pushState(name, null, router.path)
}
router.getCurrent = () => router.current

router.init = async () => {
  console.log('init')
  const initParams = routes[0].name
  router.current = await getComponent(initParams)
  router.path = getPath(name)
  window.history.replaceState(initParams, null, router.path)
}
window.onpopstate = async(e) => {
  console.log(e, 'popstate')
  router.current = await getComponent(e.state)
  router.path = getPath(e.state)
  console.log('from popevent', router.path)

}

export default router