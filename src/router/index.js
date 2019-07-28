
import {  findPath, findComponent } from './utils'
import routes from './routes'
const router = {}

router.routes = routes
const getComponent = (params) => findComponent(params, routes)
const getPath = (params) => findPath(params, routes)
// router push by name
router.push =async (name) => {
  if (router.path === getPath(name)) return
  router.current = await getComponent(name)
  router.path = getPath(name)
  window.history.pushState(name, null, router.path)
}
const isDef = e => e !== undefined

router.init = async () => {
  const initParams = routes[0].name
  router.current = await getComponent(initParams)
  router.path = getPath(name)
  window.history.replaceState(initParams, null, router.path)
  return router.current
}
router.replace = async (name) => {
  if (router.path === getPath(name)) return
  router.current = await getComponent(name)
  router.path = getPath(name)
  window.history.replaceState(name, null, router.path)
}

window.onpopstate = async(e) => {
  window.location.reload()
  router.current = await getComponent(e.state)
  router.path = getPath(e.state)
}

export default router