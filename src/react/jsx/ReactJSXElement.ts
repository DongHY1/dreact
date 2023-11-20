import type { ElementType, Key, Props, Ref, VNode } from '@/shared/ReactTypes'

function ReactElement(type: ElementType, props: Props, key: Key, ref: Ref): VNode {
  const element: VNode = {
    type,
    props,
    key,
    ref,
    __mark: 'daviddong'
  }
  return element
}

export function jsx(type: ElementType, props: Props, maybeKey?: string): VNode {
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
