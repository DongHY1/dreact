function ReactElement(type, props, key, ref) {
  const element = {
    type,
    props,
    key,
    ref,
    __mark: 'daviddong'
  }
  return element
}

export function jsx(type, props, maybeKey) {
  const normalizedProps = {}
  let key = null
  let ref = null
  if (maybeKey) {
    key = maybeKey
  }
  for (const prop in props) {
    if (prop == 'key') key = props[prop]
    else if (prop == 'ref') ref = props[prop]
    else normalizedProps[prop] = props[prop]
  }
  return ReactElement(type, props, key, ref)
}

export const jsxDEV = jsx
