import { describe, expect, it } from 'vitest'

import { jsxDEV } from '../ReactJSXElement'
describe('ReactJSXElement', () => {
  it('should keep ref in props', () => {
    const ref = () => null
    const vnode = jsxDEV('div', { ref })
    expect(vnode.ref).toEqual(ref)
  })
  it('should add keys', () => {
    const vnode = jsxDEV('div', null, 'foo')
    expect(vnode.key).to.equal('foo')
  })
  it('should have children in props', () => {
    const vnode = jsxDEV('div', {
      children: [
        '123',
        jsxDEV('span', {
          children: '456'
        })
      ]
    })
    expect(vnode.type).toEqual('div')
    expect(vnode.props.children[1].type).toEqual('span')
    expect(vnode.props.children[0]).toEqual('123')
    expect(vnode.props.children[1].props.children).toEqual('456')
  })
})
