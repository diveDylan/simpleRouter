
import { findComponent, findPath } from './utils'
import routes from './routes'
const router = {}

router.routes = routes
const getComponent = (params) => findComponent(params, routes)
const getPath = (params) => findPath(params, routes)

// router push by name
router.push =async (name) => {
  window.history.pushState(name, null, getPath(name))
  router.current = await getComponent(name)
}

router.current = getComponent('index')

export default router