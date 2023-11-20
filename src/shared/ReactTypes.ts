export type ElementType = string
export type Key = string | null | undefined
export type Ref = string | null
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type Props = any
// eslint-disable-next-line @typescript-eslint/ban-types
export interface VNode {
  type: ElementType
  props: Props
  key?: string
  ref?: string
  __mark: string
}
