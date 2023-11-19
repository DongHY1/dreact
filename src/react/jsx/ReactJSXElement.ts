import type { ElementType, IReactElement, Key, Props, Ref } from '@/shared/ReactTypes'

function ReactElement(type: ElementType, key: Key, ref: Ref, props: Props): IReactElement {
  const element: IReactElement = {
    // This tag allows us to uniquely identify this as a React Element
    $$typeof: Symbol.for('react.element'),
    // Built-in properties that belong on the element
    type,
    key,
    ref,
    props,
    __mark: 'daviddong'
  }
  return element
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function jsx(type: ElementType, config: any, maybeKey?: string): IReactElement {
  const props = {}
  let key = null
  let ref = null
  key = maybeKey
  if (config?.ref) {
    ref = config.ref
  }
  for (const propName in config) {
    const val = config[propName]
    if (propName === 'key') {
      if (val) {
        key = '' + val
      }
      continue
    }
    if (propName === 'ref') {
      if (val) {
        ref = val
      }
      continue
    }
    // 需要判断是否是自己的property
    props[propName] = val
  }
  return ReactElement(type, key, ref, props)
}

export const jsxDEV = jsx
