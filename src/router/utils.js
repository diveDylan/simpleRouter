export async function findComponent(params, list) {
  let component = null
  // name
  list.map(i => {
    if (params.indexOf('/') === -1 && i.name === params) component = i.components
    if (params.indexOf('/') === -1 && i.path === params) component = i.components
  })
  let a = await component()
  return a.default
}

export function findPath(params, list) {
  let path
  if (params.indexOf('/') !== -1) return params
  else {
    list.map(i => {
      if (i.name === params) path = i.path
      return i
    })
    return path
  }
 
}

