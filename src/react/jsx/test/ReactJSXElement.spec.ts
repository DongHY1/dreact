import { describe, expect, it } from 'vitest'

import { jsxDEV } from '../ReactJSXElement'
describe('ReactJSXElement', () => {
  it('should keep ref in props', () => {
    const ref = () => null
    const vnode = jsxDEV('div', { ref })
    console.log(vnode)
    expect(vnode.ref).toEqual(ref)
  })
  it('should add keys', () => {
    const vnode = jsxDEV('div', null, 'foo')
    expect(vnode.key).to.equal('foo')
  })
})
