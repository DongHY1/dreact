export type ElementType = any
export type Key = any
export type Ref = string | null
export type Props = any
export interface IReactElement {
  $$typeof: symbol
  type: ElementType
  key: Key
  ref: Ref
  props: Props
  __mark: string
}
