
import {  findPath, getAsyncComponents } from './utils'
import routes from './routes'
const router = {}

router.routes = routes
const getComponent = (params) => getAsyncComponents(params, routes)
const getPath = (params) => findPath(params, routes)

// router push by name
router.push =async (name) => {
  window.history.pushState(name, null, getPath(name))
  router.current = await getComponent(name)
  console.log('current: ', router.current)
}

router.init = async () => {
  router.current = await getComponent('index')
  console.log('current: ', router.current)
}
export default router